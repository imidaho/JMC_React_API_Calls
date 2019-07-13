import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import About from './About'
import Api1 from './Api1'
import Api2 from './Api2'
import Api3 from './Api3'
// user can s
class App extends Component {


  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={About} />
          <Route path="/Api1" component={Api1} />
          <Route path="/Api2" component={Api2} />
          <Route path="/Api3" component={Api3} />

        </div>
      </HashRouter>
    );
  }
}
export default App;
