import React, { useEffect, useState } from "react";
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
import { useSelector, useDispatch } from 'react-redux'
import { resetPassword, reset } from '../../redux/auth/authSlice'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function UserForgotPasswordContent(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({email:""})
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = event => {
        setInputs(inputs=>{return{...inputs, [event.target.name]: event.target.value}})
    }

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(()=>{
        if (isError) {
            // alert(message)
            toast.error("User does not exist")
          } 
          if (isSuccess) {
            // alert(message)
            toast.success("Reset link sent to your email")
          } 
          dispatch(reset())
    }, 
    [user, isError, isLoading, message, isSuccess, navigate, dispatch]
    )
    const handleSubmit = e =>{
        e.preventDefault();
        const userEmail = {
            email: inputs.email
        }
        setFormErrors(validateRegistration(inputs));
        setIsSubmit(true);
        dispatch(resetPassword(userEmail))
    }


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <>
             <main className="login" style={{height:"69rem"}}>
                 <ParticlesBackground/>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <div style={{textAlign:"center", marginBottom:"-.5rem"}}><FontAwesomeIcon icon="fas fa-check" style={{fontSize:"1.3rem", color:"#4ab2cc"}}/></div>
                                    <p className="text-center Login-name">Forgot Password?</p>
                                    <p className="light-gray" style={{marginTop:"-1.4rem", textAlign:"center"}}>No worries we'll send you reset instructions</p>
                                </div>
                                <form onSubmit={handleSubmit} data-aos="zoom-out-right" data-aos-offset="100" >
                                    <div className="form-group">
                                        <label htmlFor="country" style={{marginBottom: "-12px"}} className="FormLable"><p>Email</p></label>
                                        <input style={{height:'2.5rem'}} className={`form-control ${formErrors.email? "border-color": ""}`} type="text" name="email" placeholder="Enter your email" value ={inputs.email} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.email}</p>
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
                                    <p style={{textAlign:"center", color:"#4ab2cc"}}><FaChevronCircleLeft style={{marginTop:".3px", marginRight:"2px"}}/><a style={{color:"#4ab2cc"}} href="clientslogin">Back to login</a></p>
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

export default UserForgotPasswordContent;

const errorMessage = {
    color:"red",
    fontSize:".8rem",
    marginTop:"-.5rem"
    };
