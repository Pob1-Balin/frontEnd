import React from "react";
// import BackgroundVideo  from "./cyberzone.mp4";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../admin.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

function LoginContent(){

  useEffect(() => {
      Aos.init({ duration: 3000 });
  }, []);

  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };


    return(
        <>
             <main className="login" style={{background:"white"}}>
                 <video autoPlay loop muted width="1350">
                 {/* <source src={BackgroundVideo} type="video/mp4"/> */}
                 </video>
                 <div className="all-content-wrapper LoginCard">
                 <div className="container-fluid">
                     <div className="row">
                         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                             <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                 <p className="text-center Login-name">LOGIN</p>
                             </div>
                             <form data-aos="zoom-out-right" data-aos-offset="100" onSubmit={(e) => handleSubmit(e)}>
                                 <div className="form-group">
                                   <div style={{marginBottom: "-12px"}} className="FormLable"><p>Email</p></div>
                                     <input style={{height:'2.5rem'}} className="form-control" type="email" name="email" placeholder="Email" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}/>
                                 </div>
                                <div className="form-group" style={{marginTop: '13px'}}>
                                     <div style={{marginBottom: "-12px"}} className="FormLable"><p>Password</p></div>
                                     <input style={{height:'2.5rem'}} className="form-control" type="password" placeholder="Password" name="password" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}/>
                                </div>
                                <div style={{marginTop: '1.3rem'}} className="form-group">
                                    <button type="submit" data-aos="zoom-out-right" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn">SUBMIT</button>
                                </div>
                             </form>
                             <ToastContainer/>
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
                                     <p style={{fontSize:".9rem"}}>In need of an Account? <span><a href="/signup">Sign Up</a></span></p>
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

export default LoginContent;