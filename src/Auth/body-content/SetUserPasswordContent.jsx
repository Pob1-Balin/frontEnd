import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "../../AdminDashboard/admin.css";
import '../style.css'
import { FaChevronCircleLeft, FaCheckCircle } from "react-icons/fa";
import { resetPasswordFormValidations } from '../../utils/inputValidations'
import axios from 'axios'
import { API } from "../../config";
import { useNavigate, useLocation } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';

function SetUserPasswordContent(){
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (values, actions) => {
        axios.post('http://localhost:7000/api/v1/users/'+location.state.id+'/'+location.state.token, {password:values.password}).then((res)=>{
            toast.success("Successfull passward reset!!")
        })
        .catch((err)=>{
            toast.error("Could not resset password. Pls Try again!!")
        })
        // actions.resetForm();
      };
      
      const { values, handleChange, handleBlur, touched, errors, isSubmitting, handleSubmit} = useFormik({
        initialValues: {
           password: "", confirm_password: ""
        },
        validationSchema: resetPasswordFormValidations,
        onSubmit,
      })

    return(
        <>
             <main className="login">
                 <ParticlesBackground/>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-1 col-sm-12"></div>
                            <div className="col-lg-6 col-md-10 col-sm-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <div style={{textAlign:"center", marginBottom:"-.5rem"}}><FaCheckCircle style={{fontSize:"1.8rem", color:"#4ab2cc"}}/></div>
                                    <p className="text-center Login-name">Definir un nouveau mot de passe</p>
                                    <p className="light-gray" style={{marginTop:"-1.4rem", textAlign:"center"}}>Entrez un mot de passe que vous n'oublierez pas</p>
                                </div>
                                <form onSubmit={handleSubmit} style={{marginLeft:"2rem", marginRight:"2rem"}}>
                                    <div className="form-group" style={{ marginTop: '13px' }}>
                                        <label htmlFor="password" style={{ marginBottom: "-12px" }} className="FormLable"><p>Mot de passe *</p></label>
                                        <input style={{ height: '2.5rem' }} className={`form-control ${errors.password && touched.password && 'form-control2 border-color'}`} type="password" placeholder="Entrez votre mot de passe " name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                        <span className='error'>{errors.password && touched.password ? errors.password : ''}</span>
                                    </div>
                                    <div className="form-group" style={{ marginTop: '13px' }}>
                                        <label htmlFor="confirm_password" style={{ marginBottom: "-12px" }} className="FormLable"><p>Confirmez le mot de passe *</p></label>
                                        <input style={{ height: '2.5rem' }} className={`form-control ${errors.confirm_password && touched.confirm_password && 'form-control2 border-color'}`} type="password" placeholder="Confirmez le mot de passe" name="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
                                        <span className='error'>{errors.confirm_password && touched.confirm_password ? errors.confirm_password : ''}</span>
                                    </div>
                                    <div style={{marginTop: '2rem'}} className="form-group btn-auth">
                                        <button type="submit" data-aos="zoom-out-right" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn">Réinitialiser le mot de passe</button>
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

export default SetUserPasswordContent;
