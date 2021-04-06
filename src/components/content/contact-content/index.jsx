import React from 'react';
import PropTypes from 'prop-types';
import './contact.css'
Contact.propTypes = {
    
};

function Contact(props) {
    return (
        <>
        <div id="contact" className="content-section">
        <div className="section-heading">CONTACT</div>
        <div className="section-sub-heading ">Fan? Drop a note!</div>
        <div className="row contact-desc">
            <div className="col col-2 s-col-full pb-16 ">
                <div className="contact-info">
                    <p><i className="ti-location-pin"></i>Chicago, US</p>
                    <p><i className="ti-mobile"></i>Phone: <a href="tel:+00 151515"></a>+00 151515</p>
                    <p><i className="ti-email"></i>Email: <a href="mailto:mail@mail.com"></a>mail@mail.com</p>
                </div>
            </div>
                <div className="col col-2 contact-form s-col-full">
                    <form action="">
                        <div className="row">
                            <div className="col col-2 s-col-full">
                                <input type="text" name="" placeholder="Name" required id="" className="form-control"/>
                            </div>
                            <div className="col col-2 s-col-full">
                                <input type="email" name="" placeholder="Email" required id="" className="form-control"/>
                            </div>
                        </div>
                        <div className="row mt-8">
                            <div className="col col-1">
                                <input type="text" name="" placeholder="Message" required id="" className="form-control"/>
                            </div>
                        </div>
                        
                        <input type="submit" className="btn mt-16 mr--8 pull-right" value="SEND"/>
                    </form>
                   
                </div>
        </div>
        <div className="clear"></div>

        </div>
                {/* <!-- Begin Map --> */}
                <div className="map-section">
              <img src="https://www.w3schools.com/w3images/map.jpg" alt="" className="map"/>
          </div>
          {/* <!-- End Map --> */}
        </>
        
     
    );
}

export default Contact;