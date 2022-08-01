import React, { useEffect } from "react";
import "../../AdminDashboard/admin.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ParticlesBackground from "./ParticlesBackground";
import { Link } from "react-router-dom";

function UserPasswordSetMessageContent(){

  useEffect(() => {
      Aos.init({ duration: 2000 });
  }, []);

    return(
        <>
             <main className="login">
                 <ParticlesBackground/>
                 <div style={{marginTop:"7rem"}}></div>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <div style={{textAlign:"center", marginBottom:"-.5rem"}}><FaChevronCircleRight style={{fontSize:"1.3rem", color:"#4ab2cc"}}/></div>
                                    <p className="text-center Login-name">Password Reset</p>
                                    <p className="light-gray" style={{marginTop:"-1.4rem", textAlign:"center"}}>Your password has been reset</p>
                                    <p className="light-gray" style={{marginTop:"-.6rem", textAlign:"center"}}>Click below to login</p>
                                </div>
                                <div data-aos="zoom-out-right" data-aos-offset="100" style={{marginTop: '1.3rem'}} className="form-group btn-auth">
                                    <button type="submit" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn"><a style={{color:"white"}} href="/clientslogin">Continue</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </main>

        </>
    )
}

export default UserPasswordSetMessageContent;