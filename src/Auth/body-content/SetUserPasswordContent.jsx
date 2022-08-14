import React, { useEffect, useState } from "react";
import "../../AdminDashboard/admin.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {validateRegistration} from '../../utils/inputValidations'
import axios from 'axios'
import { API } from "../../config";
import { useNavigate, useLocation } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function SetUserPasswordContent(){
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)
    const [inputs, setInputs] = useState({password:""})
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = event => {
        setInputs(inputs=>{return{...inputs, [event.target.name]: event.target.value}})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        // setFormErrors(validateRegistration(inputs));
        setIsSubmit(true);
        // navigate('/userpasswordsetmessage')
        console.log(inputs)
        axios.post('http://localhost:7000/api/v1/users/'+location.state.id+'/'+location.state.token, {password:inputs.password}).then((res)=>{
            toast.success("Successfull passward reset!!")
        })
        .catch((err)=>{
            toast.error("Could not resset password. Pls Try again!!")
        })
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <>
             <main className="login">
                 <ParticlesBackground/>
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
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.confirm_password? "border-color": ""}`} type="password" placeholder="Enter confirm password" value ={inputs.confirm_password} onChange />
                                    </div>
                                    <p style={errorMessage}>{formErrors.confirm_password}</p>
                                    <div style={{marginTop: '2rem'}} className="form-group btn-auth">
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
                                    <p style={{textAlign:"center", color:"#4ab2cc"}}><FaChevronCircleLeft style={{marginTop:".3px", marginRight:"2px"}}/><a href="/clientslogin">Back to login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

        <ToastContainer />
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