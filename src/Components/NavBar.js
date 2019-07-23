import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
                <div className="container">
                    <a className="navbar-brand" href="#">API's</a>
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${classOne}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">About<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/quoteoftheday">Quotes of the Day</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/flickrimagesearch">Flickr Image Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/randomusers">Generate Random Users</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        );
    }
}
// export default Nav;

// class NavBar extends Component= () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <Link className="navbar-brand" to="/">API's </Link>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//                     <li className="nav-item active">
//                         <Link className="nav-link" to="/">About<span className="sr-only">(current)</span></Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/quoteoftheday">Quotes of the Day</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/flickrimagesearch">Flickr Image Search</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/randomusers">Generate Random Users</Link>
//                     </li>
//                 </ul>

//             </div>
//         </nav>

//     )
// };

export default NavBar;