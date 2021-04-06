import React from 'react';
import PropTypes from 'prop-types';
import './footer.css'
Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div id="footer">
            <div className="social-list">
                <a href=""><i className="ti-facebook"></i></a>
                <a href=""><i className="ti-instagram"></i></a>
                <a href=""><i className="ti-skype"></i></a>
                <a href=""><i className="ti-pinterest"></i></a>
                <a href=""><i className="ti-twitter"></i></a>
                <a href=""><i className="ti-linkedin"></i></a>
            </div>
            <p>Powered by <a href="#">w3.css</a> </p>
         </div>
    );
}

export default Footer;