import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './contact.css'
import Info from './info';
import Formsubmit from './formsubmit';
Contact.propTypes = {  
   
};

function Contact(props) {

    const [info, setinfo] = useState({name:'HCM',email:'@123.com',phone:'123456789'})
   
    function handelTosubmit(info){
       const inf= {... info};
       setinfo(inf);
    }
   
    return (
        <>
        <div id="contact" className="content-section">
        <div className="section-heading">CONTACT</div>
        <div className="section-sub-heading ">Fan? Drop a note!</div>
        <div className="row contact-desc">
             <Info info={info}/>
            <Formsubmit onToSubmit={handelTosubmit}/>
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