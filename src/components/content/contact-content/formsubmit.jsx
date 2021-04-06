import React, { useState } from 'react';
import PropTypes from 'prop-types';

Formsubmit.propTypes = {
    onToSubmit: PropTypes.func,
};

function Formsubmit(props) {
    const {onToSubmit} = props;
    const [info, setinfo] = useState({
        name:'',phone:'',email:''});

       
        function handelOnchangeName(e){  
            setinfo({...info,name:e.target.value})
        } 
        function handelOnchangeNumberPhone(e){
            setinfo({...info,phone:e.target.value})
         
        } 
        function handelOnchangeEmail(e){
            setinfo({...info,email:e.target.value});
           
        }    
      
        function handelSubmit(e){
            e.preventDefault();
            const newinfo={
                name:info.name, email:info.email, phone:info.phone,
            }
            setinfo(newinfo);
           if(!onToSubmit) {return};
           onToSubmit(newinfo);
           setinfo({name:'',email:'',phone:''});
          
        }
    return (
        <div className="col col-2 contact-form s-col-full">
            <form action=""  onSubmit={handelSubmit}>
                <div className="row">
                    <div className="col col-2 s-col-full">
                        <input type="text" name="" placeholder="Name" required value={info.name} onChange={handelOnchangeName} className="form-control"/>
                    </div>
                    <div className="col col-2 s-col-full">
                        <input type="email" name="" placeholder="Email" required value={info.email} onChange={handelOnchangeEmail} className="form-control"/>
                    </div>
                </div>
                <div className="row mt-8">
                    <div className="col col-1">
                        <input type="text" name="" placeholder="Message" required value={info.phone}  onChange={handelOnchangeNumberPhone} className="form-control"/>
                    </div>
                </div>
                
                <input type="submit" className="btn mt-16 mr--8 pull-right" value="SEND" />
            </form>
        </div>
    );
}

export default Formsubmit;