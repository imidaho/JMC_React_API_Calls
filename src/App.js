import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Away from './Away'
import NavBar from './NavBar'

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <h1>Hello World</h1>
        <Route exact path="/" component={Home} />
        <Route path="/Away" component={Away} />
      </div>
    </HashRouter>
  );
}

export default App;
