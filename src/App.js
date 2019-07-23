import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import About from './Components/About'
import QOD from './Components/quoteoftheday'
import FlickrImageSearch from './Components/flickrimagesearch'
import RandomUsers from './Components/randomusers'
// user can s
class App extends Component {


  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={About} />
          <Route path="/quoteoftheday" component={QOD} />
          <Route path="/flickrimagesearch" component={FlickrImageSearch} />
          <Route path="/randomusers" component={RandomUsers} />

        </div>
      </HashRouter>
    );
  }
}
export default App;
