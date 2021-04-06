import React from 'react';
import PropTypes from 'prop-types';
import './nav.css'

Navbar.propTypes = {
    
};

function Navbar(props) {
    return (
        <ul id='nav'>
           
                <li><a href="#">Home</a></li>
                <li><a href="#band">Band</a></li>
                <li><a href="#tour">Tour</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">More
                    <i className="nav-arrow-down ti-angle-down" />
                    </a>
                    <ul className="subnav">
                    <li><a href="#">Merchandise</a></li>
                    <li><a href="#">Extra</a></li>
                    <li><a href="#">Media</a></li>
                    </ul>
                </li>
       
        </ul>
    );
}

export default Navbar;