import React from 'react';
import PropTypes from 'prop-types';
import './band.css'
import '../../../index.css'
Band.propTypes = {
    
};

function Band(props) {
    return (
        <div id="band" className="content-section">
        <div className="section-heading">THE BAND</div>
        <div className="section-sub-heading">We love music</div>
        <div className="text-about">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <div className="row box-team-list">
            <div className="col col-3 s-col-full mt-16 text-alige">
                {/* Lát Tách Ra các Component con */}
                <p className="item-name">Name</p>
                <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="img-number" className="item-img"/>
            </div>
            <div className="col col-3 s-col-full mt-16 text-alige">
                 <p className="item-name">Name</p>
                 <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="img-number" className="item-img"/>
            </div>
            <div className="col col-3 s-col-full mt-16 text-alige">
                 <p className="item-name">Name</p>
                 <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="img-number" className="item-img"/>
             </div>
             <div className="clear"></div>

        </div>     
    </div>
    );
}

export default Band;