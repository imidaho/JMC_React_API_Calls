import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class About extends Component {

    render() {
        return (
            <div className="mx-auto" style={{ width: 500 }}>
                <div >
                    <h1>Hello!
                    </h1>

                    <div>   </div>
                    <div >This is my Code Louisville React.js Final Project for the May 2019 session.  </div>
                    <div >
                        <ul style={{ margin: 10 }}><h3>About this project:</h3></ul>
                        <li style={{ margin: 10 }}>The three routed links listed in the Navbar each demonstrate a successful Fetch APi to a freely available API.
They are set to catch any errors in the console, so if there seems to be a problem or delay, please check the console for details.</li>
                        <li style={{ margin: 10 }}>Be advised, The Flickr Image Search utilizes a keyword input, and it is possible that the images returned by Flickr are NSFW.</li>
                        <li style={{ margin: 10 }}>There is a section of code in the quoteoftheDay component that is copied and pasted from the provider of the API.  Their documentation included a request that their logo be included in it's use, but I ran into styling issues as they are handled by through React.js.  The code has been commented out, but I left it so I could look into it after the final project is due.</li>
                    </div>
                    <div style={{ margin: 10 }}>
                        Initially, I had some issues calling API's that were getting blocked via Cross Origin Resource Sharing and Cross Origin Read Blocking , which created issues with my initial idea for the project; a City of Louisville Restaurant health Score checker.  So I pivoted to a less complimentary set of API's that were more welcoming to a newer developer.
               </div>
                    <div style={{ margin: 10 }}>
                        Please let me know how I might improve what I have so far!
               </div>
                    <div style={{
                        margin: 10
                    }
                    }>
                        Regards, James
               </div >
                </div >
            </div >
        )
    }
}

export default About