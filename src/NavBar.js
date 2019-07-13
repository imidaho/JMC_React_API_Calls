import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">API's </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">About<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/quoteoftheday">Quotes of the Day</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/flickrimagesearch">Flickr Image Search</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/randomusers">Generate Random Users</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
};

export default NavBar;