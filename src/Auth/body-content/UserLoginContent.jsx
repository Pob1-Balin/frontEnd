import React, { useEffect, useState } from "react";
import "../../AdminDashboard/admin.css";
import '../style.css'
import axios from "axios";
import { API } from "../../config";
import { useNavigate, Link } from "react-router-dom";
import { loginFormValidations } from '../../utils/inputValidations'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../redux/auth/authSlice'
import ParticlesBackground from "./ParticlesBackground";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';



function UserLoginContent(){
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    // navigate(0)
    useEffect(()=>{
        if (isError) {
            // alert(message)
            toast.error(message)
          }
      
          if (isSuccess) {
            if(user.isAdmin){
                navigate('/admindashboard')
            }else{
                const submitUserInfo = (userSubscribeInfo) => {
                    axios.put(`http://localhost:7000/api/v1/users/${user._id}/update`, userSubscribeInfo)
                        .then(res => {
                        })
                        .catch(err => {
                        })
                        navigate("/home");
                }
                
                const day = new Date();
                // const last_seen = day.toUTCString();
                const last_seen = day.toDateString();
                submitUserInfo({
                    last_seen,
                });
            }
            
          }  
          dispatch(reset())
    }, 
    [user, isError, isLoading, message, isSuccess, navigate, dispatch]
    )

    const onSubmit = (values, actions) => {

        const userData = {
            email: values.email,
            password: values.password,
        }
        dispatch(login(userData))
        
        // actions.resetForm();
      };
      
      const { values, handleChange, handleBlur, touched, errors, isSubmitting, handleSubmit} = useFormik({
        initialValues: {
             email: "", password: ""
        },
        validationSchema: loginFormValidations,
        onSubmit,
      })
    return(
        <>
             <ParticlesBackground/>
             <main className="login" id="particles-js" style={{marginTop:"-1.3rem"}}>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-1 col-sm-12"></div>
                            <div className="col-lg-6 col-md-10 col-sm-12">
                                <div className="portlet-title">
                                    <p className="text-center Login-name fontBold">S'identifier</p>
                                </div>
                                {/* ======= form ========== */}
                                <form onSubmit={handleSubmit} style={{marginLeft:"2rem", marginRight:"2rem"}}>
                                    <div className="form-group">
                                        <label htmlFor="email" style={{marginBottom: "-12px"}} className="FormLable"><p>Adresses e-mail</p></label>
                                        <input style={{height:'2.5rem', color:"rgb(35, 175, 203)", background:"transparent", borderRadius:".25rem"}} className={`form-control ${errors.email && touched.email && 'form-control2 border-color'}`} id="email" type="text" name="email" placeholder="Entrer votre mail" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='error'>{errors.email && touched.email ? errors.email : ''}</span>
                                    </div>
                                    <div className="form-group" style={{marginTop: '15px'}}>
                                        <label htmlFor='password' style={{marginBottom: "-12px"}} className="FormLable"><p>Mot de passe</p></label>
                                        <input style={{height:'2.5rem', color:"rgb(35, 175, 203)", background:"transparent", borderRadius:".25rem"}} className={`form-control ${errors.password && touched.password && 'form-control2 border-color'}`} id="password" type="password" placeholder="Tapez votre mot de passe" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='error'>{errors.password && touched.password ? errors.password : ''}</span>
                                    </div> 
                                    <div style={{marginTop: '1.5rem'}} className="form-group btn-auth">
                                        <button type="submit" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn fontSemiBold">Me connecter</button>
                                    </div>
                                    <div className="row" style={{marginTop:"-.5rem"}}>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div><hr style={{height:".4px", marginTop:"35px"}}/></div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div style={{textAlign:"center", marginTop:'-3rem'}}><button className="Orbutton fontLight">OU</button></div>
                                        </div>
                                     </div>
                                </form>
                              
                                <div className="row text-center mt-2 mb-4" style={{marginTop:"-.5rem"}}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formExtra">
                                        <p style={{fontSize:"1rem", marginTop:"-.6rem"}}><span><Link style={{color:"#4ab2cc"}} to="/forgotpassword">Mot de passe oublié ?</Link></span></p>
                                        <p style={{fontSize:"1rem", marginTop:"-.6rem"}}>Besoin d'un compte ? <span style={{color:"#4ab2cc"}}><Link style={{color:"#4ab2cc"}} to="/clientregister">S'inscrire</Link></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-1 col-sm-12"></div>
                        </div>
                    </div>
                 </div>
                 <div>
        <ToastContainer />
      </div>
             </main>
        </>
    )
}

export default UserLoginContent;
