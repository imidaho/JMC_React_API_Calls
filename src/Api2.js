import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'


class Api2 extends Component {
    constructor() {
        super();
        this.state = {
            flickrPhotos: []
        }
    }

    photoInput = React.createRef();

    generateImage = (farmId, serverId, Id, secret) => {
        console.log(farmId)
        const url = "https://farm" + farmId + ".staticFlickr.com/" + serverId + "/" + Id + "_" + secret + "_b.jpg"

        return (<div>
            <img src={url} />
        </div>)
    }

    fetchPhotos = (e) => {
        let calledPhotos = []
        e.preventDefault();
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=84468b7152a743aab170a8e0fee052a1&tags=${this.photoInput.current.value}&per_page=5&format=json&nojsoncallback=1`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.photos.photo)
                //return data.photos.photo.map(index => this.generateImage(index.farm, index.server, index.id, index.secret))
                this.setState({ flickrPhotos: data.photos.photo })
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
        const photosToDisplay = this.state.flickrPhotos.map(index => this.generateImage(index.farm, index.server, index.id, index.secret))

        return (
            <div>
                <div>
                    <h1>Photo Search</h1>
                </div>
                <div>
                    <form onSubmit={this.fetchPhotos} >
                        <input
                            class="form-control form-control-lg"
                            type="text"
                            placeholder="Enter a Photo Search Term"
                            ref={this.photoInput}
                        />
                        <button type="submit" class="btn btn-primary mb-2">Search for photos with this term</button>
                    </form >
                </div>
                <div>{photosToDisplay} </div>
            </div >
        )
    }

}

export default Api2