import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class QOD extends Component {
    constructor() {
        super();
        this.state = {
            quoteOfTheDay: "",
            author: ""
        }
    }

    fetchQuote = (buttonValue, e) => {
        fetch(`http://quotes.rest/qod.json?category=${buttonValue}`)
            .then(response => response.json())
            .then(response => {
                this.setState({ quoteOfTheDay: response.contents.quotes[0].quote })
                this.setState({ author: response.contents.quotes[0].author })
            })
    }
    render() {
        const quoteToDisplay = `"${this.state.quoteOfTheDay}"`
        const authorToDisplay = `-- ${this.state.author}`
        return (
            <div>
                <div>
                    <h1>Choose a Quote of the Day from a category Below</h1>
                </div>
                <div className="d-flex justify-content-around">
                    <button type="button" onClick={(e) => this.fetchQuote('inspire', e)} class="btn btn-primary mb-2">Inspirational</button>
                    <button type="button" onClick={(e) => this.fetchQuote('management', e)} class="btn btn-primary mb-2">Management</button>
                    <button type="button" onClick={(e) => this.fetchQuote('life', e)} class="btn btn-primary mb-2">Life</button>
                    <button type="button" onClick={(e) => this.fetchQuote('sports', e)} class="btn btn-primary mb-2">Sports</button>
                    <button type="button" onClick={(e) => this.fetchQuote('love', e)} class="btn btn-primary mb-2">Love</button>
                    <button type="button" onClick={(e) => this.fetchQuote('funny', e)} class="btn btn-primary mb-2">Funny</button>
                </div>
                <div className="text-center">{quoteToDisplay} </div>
                <div className="text-center">{authorToDisplay}</div>
            </div >
        )
    }
}

export default QOD