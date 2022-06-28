import React, { useEffect, useState } from "react";
// import BackgroundVideo  from "./cyberzone.mp4";
import "../../AdminDashboard/admin.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {validateRegistration} from '../../utils/inputValidations'
import axios from 'axios'
import { API } from "../../config";
import { useNavigate } from "react-router-dom";

function SetUserPasswordContent(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({password:"", confirm_password:""})
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = event => {
        setInputs(inputs=>{return{...inputs, [event.target.name]: event.target.value}})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setFormErrors(validateRegistration(inputs));
        setIsSubmit(true);
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

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
                                        <label htmlFor="country" style={{marginBottom: "-12px"}} className="FormLable"><p>Password</p></label>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.password? "border-color": ""}`} type="password" name="password" placeholder="Enter password" value ={inputs.password} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.password}</p>
                                    <div className="form-group">
                                        <label htmlFor="country" style={{marginBottom: "-12px"}} className="FormLable"><p>Confirm password</p></label>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.confirm_password? "border-color": ""}`} type="password" name="confirm_password" placeholder="Enter confirm password" value ={inputs.confirm_password} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.confirm_password}</p>
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