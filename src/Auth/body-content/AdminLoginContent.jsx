import React, { useEffect, useState } from "react";

// import BackgroundVideo  from "./cyberzone.mp4";
import "../../AdminDashboard/admin.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
import {validateRegistration} from '../../utils/inputValidations'
import ParticlesBackground from "./ParticlesBackground";
import "./background.css"
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../redux/auth/authSlice'


function AdminLoginContent(){
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({email:"", password:""})
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    // navigate(0)
    useEffect(()=>{
        if (isError) {
            alert(message)
          }
      
          if (isSuccess) {
            navigate('/home')
          }
          dispatch(reset())
    }, 
    [user, isError, isLoading, message, isSuccess, navigate, dispatch]
    )


    const handleChange = event => {
        setInputs(inputs=>{return{...inputs, [event.target.name]: event.target.value}})
    }

    const handleSubmit = e =>{
        e.preventDefault();

        const userData = {
            email: inputs.email,
            password: inputs.password,
        }
        dispatch(login(userData))
    }

  useEffect(() => {
      Aos.init({ duration: 1000 });
  }, []);


  useEffect(() => {
      Aos.init({ duration: 3000 });
  }, []);

    return(
        <>
             <ParticlesBackground/>
             <main className="login" id="particles-js">
                 <video autoPlay loop muted width="1350">
                 {/* <source src={BackgroundVideo} type="video/mp4"/> */}
                 </video>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <p className="text-center Login-name">ADMIN LOGIN</p>
                                </div>
                                {/* ======= form ========== */}
                                <form onSubmit={handleSubmit} data-aos="zoom-out-right" data-aos-offset="100" >
                                    <div className="form-group">
                                        <label htmlFor="email" style={{marginBottom: "-12px"}} className="FormLable"><p>Email</p></label>
                                        <input style={{height:'2.5rem'}} value={inputs.email} onChange={handleChange} className={`form-control ${formErrors.email? "border-color": ""}`} type="text" name="email" placeholder="Email" />
                                    </div>
                                    <p style={errorMessage}>{formErrors.email}</p>
                                    <div className="form-group" style={{marginTop: '13px'}}>
                                        <label htmlFor='password' style={{marginBottom: "-12px"}} className="FormLable"><p>Password</p></label>
                                        <input style={{height:'2.5rem'}} value={inputs.password} onChange={handleChange} className={`form-control ${formErrors.password? "border-color": ""}`} type="password" placeholder="Password" name="password" />
                                    </div>
                                    <p style={errorMessage}>{formErrors.password}</p>
                                    <div style={{marginTop: '2rem'}} className="form-group btn-auth">
                                        <button type="submit" data-aos="zoom-out-right" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn ">LOGIN</button>
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
                                        <p style={{fontSize:".9rem", marginTop:"-.6rem"}}><span><a style={{color:"#4ab2cc"}} href="/adminforgotpassword">Forgot Password</a></span></p>
                                        <p style={{fontSize:".9rem", marginTop:"-.6rem"}}>In need of an Account? <span style={{color:"#4ab2cc"}}><a style={{color:"#4ab2cc"}} href="/adminregister">Sign Up</a></span></p>
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

export default AdminLoginContent;

const errorMessage = {
    color:"red",
    fontSize:".8rem",
    marginTop:"-.5rem"
    };
