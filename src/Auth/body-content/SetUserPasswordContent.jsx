import React, { useEffect, useState } from "react";
// import BackgroundVideo  from "./cyberzone.mp4";
import "../../AdminDashboard/admin.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos';
import 'aos/dist/aos.css';

function SetUserPasswordContent(){
  useEffect(() => {
      Aos.init({ duration: 2000 });
  }, []);

  const initialValues = {password:"", confirmPassword:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
          console.log(formValues);
      }
  })

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  };

  const validate = (values) => {
      const errors = {};
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
      if(!values.password){
          errors.password = "Password is required!"
      }else if(!passwordRegex.test(values.password)){
        errors.password = "Password must have a minimum of 8 characters, at least one lowercase, one uppercase, one number, and one special character"
      }
      if(!values.confirmPassword){
          errors.confirmPassword = "Confirm password is required!"
      }else if(values.password != values.confirmPassword){
        errors.confirmPassword = "Confirm password does not match password"
      }
      return errors;
  };

    return(
        <>
             <main className="login" style={{background:"white"}}>
                 <video autoPlay loop muted width="1350">
                 {/* <source src={BackgroundVideo} type="video/mp4"/> */}
                 </video>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <div style={{textAlign:"center", marginBottom:"-.5rem"}}><FaChevronCircleRight style={{fontSize:"1.3rem", color:"#4ab2cc"}}/></div>
                                    <p className="text-center Login-name">Set New Password</p>
                                    <p className="light-gray" style={{marginTop:"-1.4rem", textAlign:"center"}}>Your new password must be different from previously used password</p>
                                </div>
                                <form onSubmit={handleSubmit} data-aos="zoom-out-right" data-aos-offset="100" >
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Password*</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="password" name="password" placeholder="Enter password" value ={formValues.password} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.password}</p>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Confirm password*</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="password" name="confirmPassword" placeholder="Enter confirm password" value ={formValues.confirmPassword} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.confirmPassword}</p>
                                    <div style={{marginTop: '1.3rem'}} className="form-group">
                                        <button type="submit" data-aos="zoom-out-right" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn">Reset Password</button>
                                    </div>
                                </form>
                                <div className="row" style={{marginTop:"-.5rem"}}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="200"><hr style={{height:".4px", marginTop:"35px"}}/></div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="200" style={{textAlign:"center", marginTop:'-3rem'}}><button className="Orbutton">OR</button></div>
                                    </div>
                                </div>
                                <div style={{marginTop:"-.5rem"}} data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <p style={{textAlign:"center", color:"#4ab2cc"}}><FaChevronCircleLeft style={{marginTop:".3px", marginRight:"2px"}}/>Back to login</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </main>

        </>
    )
}

export default SetUserPasswordContent;

const errorMessage = {
    color:"red",
    fontSize:".8rem",
    marginTop:"-.5rem"
    };