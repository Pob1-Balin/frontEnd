import React, { useEffect } from "react";
// import BackgroundVideo  from "./cyberzone.mp4";
import "../../AdminDashboard/admin.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos';
import 'aos/dist/aos.css';

function UserForgotPasswordContent(){

  useEffect(() => {
      Aos.init({ duration: 2000 });
  }, []);

    return(
        <>
             <main className="login" style={{background:"white"}}>
                 <video autoPlay loop muted width="1350">
                 {/* <source src={BackgroundVideo} type="video/mp4"/> */}
                 </video>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <div style={{textAlign:"center", marginBottom:"-.5rem"}}><FaChevronCircleRight style={{fontSize:"1.3rem", color:"#4ab2cc"}}/></div>
                                    <p className="text-center Login-name">Forgot Password?</p>
                                    <p className="light-gray" style={{marginTop:"-1.4rem", textAlign:"center"}}>No worries we'll send you reset instructions</p>
                                </div>
                                <form data-aos="zoom-out-right" data-aos-offset="100" >
                                    <div className="form-group">
                                    <div style={{marginBottom: "-12px"}} className="FormLable"><p>Email*</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="email" name="email" placeholder="Email" />
                                    </div>
                                    <div style={{marginTop: '1.3rem'}} className="form-group">
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
                                    <p style={{textAlign:"center", color:"#4ab2cc"}}><FaChevronCircleLeft style={{marginTop:".3px", marginRight:"2px"}}/><a style={{color:"#4ab2cc"}} href="userlogin">Back to login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </main>

        </>
    )
}

export default UserForgotPasswordContent;