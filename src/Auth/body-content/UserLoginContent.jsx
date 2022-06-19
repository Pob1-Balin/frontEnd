import React, { useEffect, useState } from "react";
// import BackgroundVideo  from "./cyberzone.mp4";
import "../../AdminDashboard/admin.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

function UserLoginContent(){

  useEffect(() => {
      Aos.init({ duration: 3000 });
  }, []);

  const initialValues = {email:"", password:""};
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
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
      if(!values.email){
          errors.email = "Email is required!"
      }else if(!emailRegex.test(values.email)){
        errors.email = "This is not a valide email"
      }
      if(!values.password){
          errors.password = "Password is required!"
      }else if(!passwordRegex.test(values.password)){
        errors.password = "Password must have a minimum of 8 characters, at least one lowercase, one uppercase, one number, and one special character"
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
                                    <p className="text-center Login-name">LOGIN</p>
                                </div>
                                <form onSubmit={handleSubmit} data-aos="zoom-out-right" data-aos-offset="100" >
                                    <div className="form-group">
                                    <div style={{marginBottom: "-12px"}} className="FormLable"><p>Email</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="text" name="email" placeholder="Email" value ={formValues.email} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.email}</p>
                                    <div className="form-group" style={{marginTop: '13px'}}>
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Password</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="password" placeholder="Password" name="password" value ={formValues.password} onChange={handleChange}/>
                                    </div>
                                    <p style={errorMessage}>{formErrors.password}</p>
                                    <div style={{marginTop: '1.3rem'}} className="form-group">
                                        <button type="submit" data-aos="zoom-out-right" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn">SUBMIT</button>
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
                                        <p style={{fontSize:".9rem", marginTop:"-.6rem"}}><span><a style={{color:"#4ab2cc"}} href="/forgotpassword">Forgot Password</a></span></p>
                                        <p style={{fontSize:".9rem", marginTop:"-.6rem"}}>In need of an Account? <span style={{color:"#4ab2cc"}}><a style={{color:"#4ab2cc"}} href="/signup">Sign Up</a></span></p>
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

export default UserLoginContent;

const errorMessage = {
    color:"red",
    fontSize:".8rem",
    marginTop:"-.5rem"
    };
