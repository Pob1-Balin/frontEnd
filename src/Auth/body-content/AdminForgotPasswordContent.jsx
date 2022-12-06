import React, { useEffect, useState } from "react";
// import BackgroundVideo  from "./cyberzone.mp4";
import "../../AdminDashboard/admin.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {validateRegistration} from '../../utils/inputValidations'
import axios from 'axios'
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";

function AdminForgotPasswordContent(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({email:""})
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
        Aos.init({ duration: 1000 });
    }, []);
    return(
        <>
             <main className="login" style={{height:"69rem"}}>
                 <ParticlesBackground/>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-1 col-sm-12"></div>
                            <div className="col-lg-6 col-md-10 col-sm-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <div style={{textAlign:"center", marginBottom:"-.5rem"}}><FontAwesomeIcon icon="fas fa-check" style={{fontSize:"1.3rem", color:"#4ab2cc"}}/></div>
                                    <p className="text-center Login-name">Mot de passe oublié ?</p>
                                    <p className="light-gray" style={{marginTop:"-1.4rem", textAlign:"center"}}>No worries we'll send you reset instructions</p>
                                </div>
                                <form onSubmit={handleSubmit} data-aos="zoom-out-right" data-aos-offset="100" style={{marginLeft:"2rem", marginRight:"2rem"}} >
                                    <div className="form-group">
                                        <label htmlFor="country" style={{marginBottom: "-12px"}} className="FormLable"><p>Email</p></label>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.email? "border-color": ""}`} type="text" name="email" placeholder="Enter your email" value ={inputs.email} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.email}</p>
                                    <div style={{marginTop: '2rem'}} className="form-group btn-auth">
                                        <button type="submit" data-aos="zoom-out-right" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn">Reset Password</button>
                                    </div>
                                    <div className="row" style={{marginTop:"-.5rem"}}>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div data-aos="zoom-out-right" data-aos-offset="200"><hr style={{height:".4px", marginTop:"35px"}}/></div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div data-aos="zoom-out-right" data-aos-offset="200" style={{textAlign:"center", marginTop:'-3rem'}}><button className="Orbutton">OU</button></div>
                                        </div>
                                    </div>
                                </form>
                                <div style={{marginTop:"-.5rem"}} data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <p style={{textAlign:"center", color:"#4ab2cc"}}><FaChevronCircleLeft style={{marginTop:".3px", marginRight:"2px"}}/><a style={{color:"#4ab2cc"}} href="adminlogin">Back to login</a></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-1 col-sm-12"></div>
                        </div>
                    </div>
                 </div>
             </main>

        </>
    )
}

export default AdminForgotPasswordContent;

const errorMessage = {
    color:"red",
    fontSize:".8rem",
    marginTop:"-.5rem"
    };
