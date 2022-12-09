import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "../../AdminDashboard/admin.css";
import '../style.css'
import { FaChevronCircleLeft, FaCheckCircle } from "react-icons/fa";
import { forgotPasswordFormValidations } from '../../utils/inputValidations'
import axios from 'axios'
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";
import { useSelector, useDispatch } from 'react-redux'
import { resetPassword, reset } from '../../redux/auth/authSlice'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';

function UserForgotPasswordContent(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const onSubmit = (values, actions) => {

        const userEmail = {
            email: values.email
        }
        dispatch(resetPassword(userEmail))
        
        // actions.resetForm();
      };
      
      const { values, handleChange, handleBlur, touched, errors, handleSubmit, isSubmitting} = useFormik({
        initialValues: {
             email: "", 
        },
        validationSchema: forgotPasswordFormValidations,
        onSubmit,
      })
    return(
        <>
             <main className="login" style={{height:"100vh", marginTop:"-1.2rem"}}>
                 <ParticlesBackground/>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-1 col-sm-12"></div>
                            <div className="col-lg-6 col-md-10 col-sm-12">
                                <div className="portlet-title">
                                    <div style={{textAlign:"center", marginBottom:"-.5rem"}}><FaCheckCircle style={{fontSize:"2rem", color:"#4ab2cc"}}/></div>
                                    <p className="text-center Login-name fontBold">Mot de passe oublié?</p>
                                    <p className="light-gray fontBold" style={{marginTop:"-1.4rem", textAlign:"center", fontSize:".8rem"}}>Pas de soucis, nous vous enverrons des instructions de réinitialisation</p>
                                </div>
                                <form onSubmit={handleSubmit} style={{marginLeft:"2rem", marginRight:"2rem"}}>
                                    <div className="form-group">
                                        <label htmlFor="email" style={{marginBottom: "-12px"}} className="FormLable"><p>Adresses e-mail</p></label>
                                        <input style={{height:'2.5rem', color:"rgb(35, 175, 203)", background:"transparent", borderRadius:".25rem"}} className={`form-control ${errors.email && touched.email && 'form-control2 border-color'}`} id="email" type="text" name="email" placeholder="Entrer votre mail" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='error'>{errors.email && touched.email ? errors.email : ''}</span>
                                    </div>
                                    <div style={{marginTop: '1.5rem'}} className="form-group btn-auth">
                                        <button disabled={isSubmitting} type="submit" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn submitBtnf">Réinitialiser le mot de passe</button>
                                    </div>
                                    <div className="row" style={{marginTop:"-.5rem"}}>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div><hr style={{height:".4px", marginTop:"35px"}}/></div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div style={{textAlign:"center", marginTop:'-3rem'}}><button className="Orbutton">OU</button></div>
                                        </div>
                                    </div>
                                </form>
                                <div style={{marginTop:"-.5rem"}} className="portlet-title">
                                    <p style={{textAlign:"center", color:"#4ab2cc", fontSize:"1rem"}}><FaChevronCircleLeft style={{marginRight:"5px", marginTop:"-2px"}}/><Link style={{color:"#4ab2cc"}} to="/">Retour pour vous inscrire</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-1 col-sm-12"></div>
                        </div>
                    </div>
                 </div>

        <ToastContainer />
             </main>

        </>
    )
}

export default UserForgotPasswordContent;