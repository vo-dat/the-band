import React from 'react';
import PropTypes from 'prop-types';
import Band from './band-content';
import Tour from './tour-content';
import Contact from './contact-content';

Content.propTypes = {
    
};

function Content(props) {
    return (
        <div id='content'>
           <Band ></Band>
           <Tour ></Tour>
           <Contact></Contact>
        </div>
    );
}

export default Content;