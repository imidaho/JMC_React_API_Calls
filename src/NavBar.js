import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Flickr API's </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Api1">Api1</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Api2">Api2</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Api3">Api3</Link>
                    </li>
                </ul>

            </div>
        </nav>
        // <ul>
        //     <Link to='/'><li>Go Home</li></Link>
        //     <Link to='/Away'><li>Go Away</li></Link>
        // </ul>
    )
};

export default NavBar;