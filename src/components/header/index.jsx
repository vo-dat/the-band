import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './nav';
import './header.css'
import SearchBtn from './searchBtn';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <div id='header'>
            <Navbar />
            <SearchBtn />
        </div>
    );
}

export default Header;