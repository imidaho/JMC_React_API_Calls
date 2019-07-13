import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class Api1 extends Component {
    constructor() {
        super();
        this.state = {
            randomQuote: []
        }
    }

    fetchQuote = () => {

    }
    render() {
        return (
            <div>
                <div>
                    <h1>Quote Search</h1>
                </div>
                <div>
                    <form onSubmit={this.fetchQuote} >
                        <input
                            class="form-control form-control-lg"
                            type="text"
                            placeholder="Search for Quotes"
                            ref={this.photoInput}
                        />
                        <button type="submit" class="btn btn-primary mb-2">Search for quotes about this</button>
                    </form >
                </div>
            </div >
        )
    }
}

export default Api1