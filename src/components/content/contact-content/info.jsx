import React from 'react';
import PropTypes from 'prop-types';

Info.propTypes = {
    info: PropTypes.object,
};
Info.defauftProps={
    info:{}
}

function Info(props) {
    const {info} = props;
    return (
       
             <div className="col col-2 s-col-full pb-16 ">
                <div className="contact-info">
                    <p><i className="ti-location-pin"></i>{info.name}</p>
                    <p><i className="ti-mobile"></i>Phone: <a href="tel:+00 151515"></a>{info.phone}</p>
                    <p><i className="ti-email"></i>Email: <a href="mailto:mail@mail.com"></a>{info.email}</p>
                </div>
            </div>
    );
}

export default Info;