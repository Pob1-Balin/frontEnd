import React from "react";
// import BackgroundVideo  from "./cyberzone.mp4";
import { useEffect } from "react";
import "../../AdminDashboard/admin.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

function ClientRegisterContent(){

  useEffect(() => {
      Aos.init({ duration: 3000 });
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
                                    <p className="text-center Login-name">Create Account</p>
                                </div>
                                <form data-aos="zoom-out-right" data-aos-offset="100" >
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>First Name</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="text" name="firstName" placeholder="Enter First Name" />
                                    </div>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Last Name</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="text" name="lastName" placeholder="Enter Last Name" />
                                    </div>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Gender</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="text" name="gender" placeholder="Select your Gender" />
                                    </div>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Country</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="text" name="country" placeholder="Select your Country" />
                                    </div>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Phone</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="number" name="phone" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="form-group">
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Email</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="email" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group" style={{marginTop: '13px'}}>
                                        <div style={{marginBottom: "-12px"}} className="FormLable"><p>Password</p></div>
                                        <input style={{height:'2.5rem'}} className="form-control" type="password" placeholder="Password" name="password" />
                                    </div>
                                    <div style={{marginTop: '1.3rem'}} className="form-group">
                                        <button type="submit" data-aos="zoom-out-right" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn">CREATE</button>
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
                                        <p style={{fontSize:".9rem", marginTop:"-.6rem"}}>Already have an Account? <span style={{color:"#4ab2cc"}}><a style={{color:"#4ab2cc"}} href="/userlogin">Sign Up</a></span></p>
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