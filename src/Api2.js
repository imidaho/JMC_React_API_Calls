import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'


class Api2 extends Component {

    photoInput = React.createRef();

    generateImage = (farmId, serverId, Id, secret) => {
        const html = `
        <div>
            <img src=https://farm${farmId}.staticflickr.com/${serverId}/${Id}_${secret}_[b].jpg >
        </div>`
        return html
    }

    fetchPhotos = (e) => {
        let calledPhotos = []
        e.preventDefault();
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=84468b7152a743aab170a8e0fee052a1&tags=${this.photoInput.current.value}&per_page=5&format=json&nojsoncallback=1`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.photos.photo)
                return data.photos.photo.map(index => this.generateImage(index.farm, index.server, index.id, index.secret))
            }
            )
        //.then(array => array.map(index => generateImage(index.farm, index.server, index.id, index.secret)))
        //.then()
        //.then(console.log(calledPhotos))
        //.then(console.log)
        //.then(data.photos.map(calledPhotos.push))
        e.currentTarget.reset();
    }

    //populatePhotos
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.fetchPhotos} >
                        <input
                            class="form-control form-control-lg"
                            type="text"
                            placeholder="search for photos"
                            ref={this.photoInput}
                        />
                        <button type="submit" class="btn btn-primary mb-2">Search for photos with this term</button>
                    </form >
                </div>
                <div html={this.generateImage}>

                </div>
            </div >
        )
    }

}

export default Api2