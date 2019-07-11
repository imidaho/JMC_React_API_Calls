import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import './App.css';
import Api1 from './Api1'
import Api2 from './Api2'
import NavBar from './NavBar'
import Api3 from './Api3'
//import Results from './Results'
// user can search for a louisville restaurant
// user will then be able to see scores of that restaurant, a picture of the storefront, and a pic/gif randomly selected by the search term of the restuarant's inspection score, ex: '98'
// user can also refer to the history of the searches for reference while still on the page.  
class App extends Component {


  state = {
    Restaurants: [],
    currentRestaurant: {},
    searchQueries: []
  }

  // addRestaurant = () => { };
  // add props to route path?
  // where should the search value state be stored?  

  //componentDidMount() { 


  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <h1>stock image search</h1>
          {/* //<Route exact path="/" component={Home} /> */}
          <Route path="/Api1" component={Api1} />
          <Route path="/Api2" component={Api2} />
          <Route path="/Api3" component={Api3} />

        </div>
      </HashRouter>
    );
  }
}
export default App;
