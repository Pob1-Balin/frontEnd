import React, { useEffect, useState } from "react";
// import BackgroundVideo  from "./cyberzone.mp4";
import "../../AdminDashboard/admin.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

function ClientRegisterContent(){
  useEffect(() => {
      Aos.init({ duration: 2000 });
  }, []);

  const initialValues = {firstName:"", lastName:"", gender:"", email:"", country:"", phone:"", password:"", confirmPassword:""};
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
      const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const usernameRegex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/i;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
      if(!values.firstName){
          errors.firstName = "First Name is required"
      }else if(!usernameRegex.test(values.firstName)){
        errors.firstName = "First name not Valide"
      }
      if(!values.lastName){
          errors.lastName = "Last Name is required!"
      }else if(!usernameRegex.test(values.lastName)){
        errors.lastName = "Last name not Valide"
      }
      if(!values.email){
          errors.email = "Email is required!"
      }else if(!emailRegex.test(values.email)){
        errors.email = "This is not a valide email"
      }
      if(!values.phone){
          errors.phone = "Phone number is required!"
      }
      if(!values.gender){
          errors.gender = "Gender is required!"
      }
      if(!values.country){
          errors.country = "Country is required!"
      }
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
                                    <p className="text-center Login-name">Create Account</p>
                                </div>
                                <form onSubmit={handleSubmit} data-aos="zoom-out-right" data-aos-offset="100" >
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px", borderColor:"red"}} className="FormLable"><p>First Name*</p></div>
                                        <input style={{height:"2.5rem"}}  className={`form-control ${formErrors.firstName != "" ? "" : "border-color"} `} type="text" name="firstName" placeholder="Enter First Name" value ={formValues.firstName} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.firstName}</p>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Last Name*</p></div>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.lastName != "" ? "" : "border-color"} `} type="text" name="lastName" placeholder="Enter Last Name" value ={formValues.lastName} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.lastName}</p>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Email*</p></div>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.email != "" ? "" : "border-color"} `} type="text" name="email" placeholder="Enter Your Email" value ={formValues.email} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.email}</p>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Phone*</p></div>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.phone != "" ? "" : "border-color"} `} type="number" name="phone" placeholder="Enter your phone number" value ={formValues.phone} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.phone}</p>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Gender*</p></div>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.gender != "" ? "" : "border-color"} `} type="text" name="gender" placeholder="Select your Gender" value ={formValues.gender} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.gender}</p>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Country*</p></div>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.country != "" ? "" : "border-color"} `} type="text" name="country" placeholder="Select your Country" value ={formValues.country} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.country}</p>
                                    <div className="form-group" style={{marginTop: '13px'}}>
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Password*</p></div>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.password != "" ? "" : "border-color"} `} type="password" placeholder="Password" name="password" value ={formValues.password} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.password}</p>
                                    <div className="form-group" style={{marginTop: '13px'}}>
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Confirm password*</p></div>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.confirmPassword != "" ? "" : "border-color"} `} type="password" placeholder="Confirm password" name="confirmPassword" value ={formValues.confirmPassword} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.confirmPassword}</p>
                                    <div style={{marginTop: '1.3rem'}} className="form-group">
                                        <button type="submit" data-aos="zoom-out-right" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn">CREATE</button>
                                    </div>
                                </form>
                                <div className="row" style={{marginTop:"-.5rem"}}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="100"><hr style={{height:".4px", marginTop:"35px"}}/></div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="100" style={{textAlign:"center", marginTop:'-3rem'}}><button className="Orbutton">OR</button></div>
                                    </div>
                                </div>
                                <div className="row text-center mt-2 mb-4" style={{marginTop:"-.5rem"}}>
                                    <div data-aos="zoom-out-right" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <p style={{fontSize:".9rem", marginTop:"-.6rem"}}>Already have an Account? <span style={{color:"#4ab2cc"}}><a style={{color:"#4ab2cc"}} href="/userlogin">Login</a></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </main>
        </>
    )
}

export default ClientRegisterContent;

const errorMessage = {
color:"red",
fontSize:".8rem",
marginTop:"-.5rem"
};
