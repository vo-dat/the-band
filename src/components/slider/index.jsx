import React from 'react';
import PropTypes from 'prop-types';
import './slider.css'

Slider.propTypes = {
    
};

function Slider(props) {
    return (
        <div id="slider">
            <div className="text-content">
                <div className="text-header">New York</div>
                <div className="text-desriptction">The atmosphere in New York is lorem ipsum.</div>
            </div>
        </div>
    );
}

export default Slider;