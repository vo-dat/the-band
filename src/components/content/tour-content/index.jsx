import React from 'react';
import PropTypes from 'prop-types';
import './tour.css'
Tour.propTypes = {
    
};

function Tour(props) {
    return (
        <div id="tour" className="tour-section">
        <div className="content-section">
            <div className="section-heading">TOUR DATES
               </div>
            <div className="section-sub-heading"> Remember to book your tickets!</div>
            <br/>
            <ul className="tickets-list">
                <li>September <span className="sold-out">Sold out</span> </li>
                <li>October <span className="sold-out">Sold out</span></li>
                <li>November3 <span className="tickets-quantity">3</span></li>
            </ul>
            <div className="row place-list">
                <div className="col col-3 s-col-full mt-16 ">
                    <img src="https://www.w3schools.com/w3images/newyork.jpg" alt="" className="place-img"/>
                    <div className="place-content">
                        <h2 className="place-heading">New York</h2>
                        <p className="place-time">Fri 27 Nov 2016</p>
                        <p className="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <a href="#" className="btn">Buy Tickets</a>
                    </div>
                </div>
                <div className="col col-3 s-col-full mt-16 ">
                    <img src="https://www.w3schools.com/w3images/paris.jpg" alt="" className="place-img"/>
                    <div className="place-content">
                        <h2 className="place-heading">Paris</h2>
                        <p className="place-time">Sat 28 Nov 2016</p>
                        <p className="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <a href="#" className="btn">Buy Tickets</a>
                    </div>
                </div>
                <div className="col col-3 s-col-full mt-16 ">
                    <img src="https://www.w3schools.com/w3images/sanfran.jpg" alt="" className="place-img"/>
                    <div className="place-content">
                        <h2 className="place-heading">San Francisco</h2>
                        <p className="place-time">Sun 29 Nov 2016</p>
                        <p className="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <a href="#" className="btn">Buy Tickets</a>
                    </div>
                </div>
                <div className="clear"></div>

            </div>
        </div> 
      </div>
    );
}

export default Tour;