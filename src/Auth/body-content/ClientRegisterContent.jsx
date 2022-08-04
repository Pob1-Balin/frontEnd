import React, { useState, useEffect } from "react";
import "../../AdminDashboard/admin.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import { validateRegistration } from '../../utils/inputValidations'

import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../../redux/auth/authSlice'
import ParticlesBackground from "./ParticlesBackground";

function ClientRegisterContent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({ first_name: "", last_name: "", gender: "", country: "", email: "", password: "", phone_number: "", confirm_password: "" })

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

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


    const handleChange = event => {
        setInputs(inputs => { return { ...inputs, [event.target.name]: event.target.value } })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormErrors(validateRegistration(inputs));
        // setIsSubmit(true);

        if (inputs.password !== inputs.confirm_password) {
            alert('password do not match')
        } else {
            const userData = {
                first_name: inputs.first_name,
                last_name: inputs.last_name,
                email: inputs.email,
                password: inputs.password,
                gender: inputs.gender,
                phone_number: inputs.phone_number,
                country: inputs.country,
                services: [],
            }
            dispatch(register(userData))
        }


    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <>
            <main className="login" style={{height:"69rem"}}>
                <ParticlesBackground/>
                <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <p className="text-center Login-name">Create Account</p>
                                </div>
                                {/* ===== form ======= */}
                                <form onSubmit={handleSubmit} data-aos="zoom-out-right" data-aos-offset="100" >
                                    <div className="form-group">
                                        <label htmlFor="first_name" style={{ marginBottom: "-12px" }} className="FormLable"><p>First Name</p></label>
                                        <input style={{ height: '2.5rem' }} value={inputs.first_name} onChange={handleChange} className={`form-control ${formErrors.first_name ? "border-color" : ""}`} type="text" name="first_name" placeholder="Enter First Name" />
                                    </div>
                                    <p style={errorMessage}>{formErrors.first_name}</p>
                                    <div className="form-group">
                                        <label htmlFor="last_name" style={{ marginBottom: "-12px" }} className="FormLable"><p>Last Name</p></label>
                                        <input style={{ height: '2.5rem' }} value={inputs.last_name} onChange={handleChange} className={`form-control ${formErrors.last_name ? "border-color" : ""}`} type="text" name="last_name" placeholder="Enter Last Name" />
                                    </div>
                                    <p style={errorMessage}>{formErrors.last_name}</p>
                                    <div className="form-group">
                                        <label htmlFor="gender" style={{ marginBottom: "-12px" }} className="FormLable"><p>Gender</p></label>
                                        <input style={{ height: '2.5rem' }} value={inputs.gender} onChange={handleChange} className={`form-control ${formErrors.gender ? "border-color" : ""}`} type="text" name="gender" placeholder="Select your Gender" />
                                    </div>
                                    <p style={errorMessage}>{formErrors.gender}</p>
                                    <div className="form-group">
                                        <label htmlFor="country" style={{ marginBottom: "-12px" }} className="FormLable"><p>Country</p></label>
                                        <input style={{ height: '2.5rem' }} value={inputs.country} onChange={handleChange} className={`form-control ${formErrors.country ? "border-color" : ""}`} type="text" name="country" placeholder="Select your Country" />
                                    </div>
                                    <p style={errorMessage}>{formErrors.country}</p>
                                    <div className="form-group">
                                        <label htmlFor="phone_number" style={{ marginBottom: "-12px" }} className="FormLable"><p>Phone Number</p></label>
                                        <input style={{ height: '2.5rem' }} value={inputs.phone_number} onChange={handleChange} className={`form-control ${formErrors.phone_number ? "border-color" : ""}`} type="number" name="phone_number" placeholder="Enter your phone number" />
                                    </div>
                                    <p style={errorMessage}>{formErrors.phone_number}</p>
                                    <div className="form-group">
                                        <label htmlFor="email" style={{ marginBottom: "-12px" }} className="FormLable"><p>Email</p></label>
                                        <input style={{ height: '2.5rem' }} value={inputs.email} onChange={handleChange} className={`form-control ${formErrors.email ? "border-color" : ""}`} type="text" name="email" placeholder="Email" />
                                    </div>
                                    <p style={errorMessage}>{formErrors.email}</p>
                                    <div className="form-group" style={{ marginTop: '13px' }}>
                                        <label htmlFor="password" style={{ marginBottom: "-12px" }} className="FormLable"><p>Password</p></label>
                                        <input style={{ height: '2.5rem' }} value={inputs.password} onChange={handleChange} className={`form-control ${formErrors.password ? "border-color" : ""}`} type="password" placeholder="Password" name="password" />
                                    </div>
                                    <p style={errorMessage}>{formErrors.password}</p>
                                    <div className="form-group" style={{ marginTop: '13px' }}>
                                        <div style={{ marginBottom: "-12px" }} className="FormLable"><p>Confirm password*</p></div>
                                        <input style={{ height: '2.5rem' }} className={`form-control ${formErrors.confirm_password ? "border-color" : ""}`} type="password" placeholder="Confirm password" name="confirm_password" value={inputs.confirm_password} onChange={handleChange} />
                                    </div>
                                    <p style={errorMessage}>{formErrors.confirm_password}</p>
                                    <div style={{ marginTop: '1.3rem' }} className="form-group">
                                        <button type="submit" data-aos="zoom-out-right" style={{ height: '2.5rem', background: '#4ab2cc', color: 'white', width: "100%", borderRadius: ".4rem" }} className="btn waves-effect waves-light submitBtn">SIGN UP</button>
                                    </div>
                                </form>
                                <div className="row" style={{ marginTop: "-.5rem" }}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="100"><hr style={{ height: ".4px", marginTop: "35px" }} /></div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="100" style={{ textAlign: "center", marginTop: '-3rem' }}><button className="Orbutton">OR</button></div>
                                    </div>
                                </div>
                                <div className="row text-center mt-2 mb-4" style={{ marginTop: "-.5rem" }}>
                                    <div data-aos="zoom-out-right" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <p style={{ fontSize: ".9rem", marginTop: "-.6rem" }}>Already have an Account? <span style={{ color: "#4ab2cc" }}><a style={{ color: "#4ab2cc" }} href="/login">Login</a></span></p>
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

export default ClientRegisterContent;

const errorMessage = {
    color: "red",
    fontSize: ".8rem",
    marginTop: "-.5rem"
};

