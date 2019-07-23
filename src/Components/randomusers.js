import React, { Component } from 'react';
import PropTypes from 'prop-types'

class RandomUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    userNum = React.createRef()
    //populates the 
    generateUsers = (firstName, lastName, phoneNum, email) => {
        return (
            <div>
                <ul>
                    <li>
                        <h3>{lastName}, {firstName}</h3>
                        <ul>
                            <li>
                                <h5>{phoneNum}</h5>
                            </li>
                            <li>
                                <h5>{email}</h5>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
    //calls randomuser api to grab x number of random user data
    fetchUsers = (e) => {
        e.preventDefault()
        fetch(`https://randomuser.me/api/?nat=us&results=${this.userNum.current.value}`)
            .then(x => x.json())
            .then(data => {
                this.setState({ users: data.results })
                console.log(this.state.users)
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            })
    }

    render() {
        const usersToDisplay = this.state.users.map(index => this.generateUsers(index.name.first, index.name.last, index.phone, index.email))

        return (
            <div>
                <div>
                    <h1>Random Users</h1>
                </div>
                <div>
                    <form onSubmit={this.fetchUsers} >
                        <div class="form-group">
                            <div className="text-center">
                                <label for="exampleFormControlSelect1">Select Number of Random Users</label>
                            </div>
                            <select class="form-control" id="exampleFormControlSelect1" ref={this.userNum}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button type="submit" class="btn btn-primary mb-2">Get Users</button>
                        </div>
                    </form >
                </div>
                <div>
                    {usersToDisplay}
                </div>
            </div >
        )
    }
}
//fetch('https://financialmodelingprep.com/api/cryptocurrency?datatype=json').then(x=> x.json()).then(console.log)

export default RandomUsers