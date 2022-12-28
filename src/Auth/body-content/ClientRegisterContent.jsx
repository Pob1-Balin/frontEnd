import React, { useState, useEffect } from "react";
import "../../AdminDashboard/admin.css";
import '../style.css'
import { useNavigate, Link } from "react-router-dom";
import { registerFormValidations } from '../../utils/inputValidations'
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../../redux/auth/authSlice'
import ParticlesBackground from "./ParticlesBackground";
function ClientRegisterContent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({ first_name: "", last_name: "", gender: "", country: "", email: "", password: "", phone_number: "", confirm_password: "" })
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


    useEffect(()=>{
        if(isError){
            alert(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())
    }, 
    [user, isError, isLoading, message, isSuccess, navigate, dispatch]
    )

    const onSubmit = (values, actions) => {
        const userData = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            gender: values.gender,
            phone_number: values.phone_number,
            country: values.country,
            services: [],
        }
        dispatch(register(userData))
       
        // actions.resetForm();
      };
      
      const { values, handleChange, handleBlur, touched, errors, isSubmitting, handleSubmit} = useFormik({
        initialValues: {
            first_name: "", last_name: "", gender: "", country: "", email: "", password: "", phone_number: "", confirm_password: ""
        },
        validationSchema: registerFormValidations,
        onSubmit,
      })
    return (
        <>
            <main className="login" style={{height:"69rem", marginTop:"-1.2rem"}}>
                <ParticlesBackground/>
                <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-1 col-sm-12"></div>
                            <div className="col-lg-6 col-md-10 col-sm-12">
                                <div className="portlet-title">
                                    <p className="text-center Login-name fontBold">Créer un compte</p>
                                </div>
                                {/* ===== form ======= */}
                                <form onSubmit={handleSubmit} style={{marginLeft:"2rem", marginRight:"2rem"}}>
                                    <div className="form-group">
                                        <label htmlFor="first_name" style={{ marginBottom: "-12px" }} className="FormLable"><p>Nom *</p></label>
                                        <input style={{ height: '2.5rem', background:"transparent", borderRadius:".25rem" }} className={`form-control ${errors.first_name && touched.first_name && 'form-control2 border-color'}`} type="text" name="first_name" placeholder="Entrez votre nom" value={values.first_name} onChange={handleChange} onBlur={handleBlur}/>
                                        <span className='error'>{errors.first_name && touched.first_name ? errors.first_name : ''}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name" style={{ marginBottom: "-12px" }} className="FormLable"><p>Prénom *</p></label>
                                        <input style={{ height: '2.5rem', background:"transparent", borderRadius:".25rem" }} className={`form-control ${errors.last_name && touched.last_name && 'form-control2 border-color'}`} type="text" name="last_name" placeholder="Entrez votre prénom" value={values.last_name} onChange={handleChange} onBlur={handleBlur}/>
                                        <span className='error'>{errors.last_name && touched.last_name ? errors.last_name : ''}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" style={{ marginBottom: "-12px" }} className="FormLable"><p>Adresses e-mail *</p></label>
                                        <input style={{ height: '2.5rem', background:"transparent", borderRadius:".25rem" }} className={`form-control ${errors.email && touched.email && 'form-control2 border-color'}`} type="text" name="email" placeholder="Entrez votre mail" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                        <span className='error'>{errors.email && touched.email ? errors.email : ''}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone_number" style={{ marginBottom: "-12px" }} className="FormLable"><p>Téléphone *</p></label>
                                        <input style={{ height: '2.5rem', background:"transparent", borderRadius:".25rem" }} className={`form-control ${errors.phone_number && touched.phone_number && 'form-control2 border-color'}`} type="number" name="phone_number" placeholder="Entrez votre numéro de téléphone" value={values.phone_number} onChange={handleChange} onBlur={handleBlur}/>
                                        <span className='error'>{errors.phone_number && touched.phone_number ? errors.phone_number : ''}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="gender" style={{ marginBottom: "-12px" }} className="FormLable"><p>Le genre</p></label>

                                        <select style={{ height: '2.5rem', background:"transparent", borderRadius:".25rem", color:"#a7abae"}} className={`form-select form-control ${errors.gender && touched.gender && 'form-control2 border-color'}`} type="text" name="gender" placeholder="Sélectionnez votre sexe" value={values.gender} onChange={handleChange} onBlur={handleBlur}>
                                            <option>Sélectionnez votre sexe</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>

                                        <span className='error'>{errors.gender && touched.gender ? errors.gender : ''}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country" style={{ marginBottom: "-12px" }} className="FormLable"><p>Pays</p></label>
                                        <input style={{ height: '2.5rem', background:"transparent", borderRadius:".25rem" }} className={`form-control ${errors.country && touched.country && 'form-control2 border-color'}`} type="text" name="country" placeholder="Choisissez le pays" value={values.country} onChange={handleChange} onBlur={handleBlur}/>
                                        <span className='error'>{errors.country && touched.country ? errors.country : ''}</span>
                                    </div>
                                    <div className="form-group" style={{ marginTop: '13px' }}>
                                        <label htmlFor="password" style={{ marginBottom: "-12px" }} className="FormLable"><p>Mot de passe *</p></label>
                                        <input style={{ height: '2.5rem', background:"transparent", borderRadius:".25rem" }} className={`form-control ${errors.password && touched.password && 'form-control2 border-color'}`} type="password" placeholder="Entrez votre mot de passe" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                        <span className='error'>{errors.password && touched.password ? errors.password : ''}</span>
                                    </div>
                                    <div className="form-group" style={{ marginTop: '13px' }}>
                                        <label htmlFor="confirm_password" style={{ marginBottom: "-12px" }} className="FormLable"><p>Confirmez le mot de passe *</p></label>
                                        <input style={{ height: '2.5rem', background:"transparent", borderRadius:".25rem" }} className={`form-control ${errors.confirm_password && touched.confirm_password && 'form-control2 border-color'}`} type="password" placeholder="Confirmez le mot de passe" name="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
                                        <span className='error'>{errors.confirm_password && touched.confirm_password ? errors.confirm_password : ''}</span>
                                    </div>
                                    <div style={{ marginTop: '1.5rem', background:"transparent", borderRadius:".25rem" }} className="form-group">
                                        <button type="submit" style={{ height: '2.5rem', background: '#4ab2cc', color: 'white', width: "100%", borderRadius: ".4rem" }} className="btn waves-effect waves-light submitBtn">S'inscrire</button>
                                    </div>
                                    <div className="row" style={{ marginTop: "-.5rem" }}>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div><hr style={{ height: ".4px", marginTop: "35px" }} /></div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div style={{ textAlign: "center", marginTop: '-3rem' }}><button className="Orbutton">OU</button></div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row text-center mt-2 mb-4" style={{ marginTop: "-.5rem" }}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <p style={{ fontSize: "1rem", marginTop: "-.6rem" }} className="fontLight">Vous avez déjà un compte ? <span style={{ color: "#4ab2cc" }}><Link style={{ color: "#4ab2cc" }} to="/">Me connecter</Link></span></p>
                                    </div>
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

export default ClientRegisterContent;
