import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class Api3 extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Random Users</h1>
                </div>
                <div>
                    <form >
                        {/*onSubmit={this.fetchQuote} */}
                        <input
                            class="form-control form-control-lg"
                            type="text"
                            placeholder="How Many Users?"
                            ref={this.photoInput}
                        />
                        <button type="submit" class="btn btn-primary mb-2">Get Users</button>
                    </form >
                </div>
            </div >
        )
    }
}
//fetch('https://financialmodelingprep.com/api/cryptocurrency?datatype=json').then(x=> x.json()).then(console.log)

export default Api3