import React, { useEffect } from "react";
import "../../AdminDashboard/admin.css";
import { FaCheckCircle, FaChevronCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import ParticlesBackground from "./ParticlesBackground";

function UserCheckEmailContent(){

  useEffect(() => {
      Aos.init({ duration: 2000 });
  }, []);

    return(
        <>
             <main className="login" style={{marginTop:"-1.2rem"}}>
                 <ParticlesBackground/>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-1 col-sm-12"></div>
                            <div className="col-lg-6 col-md-10 col-sm-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <div style={{textAlign:"center", marginBottom:"-.5rem"}}><FaCheckCircle style={{fontSize:"1.8rem", color:"#4ab2cc"}}/></div>
                                    <p className="text-center Login-name fontBold">Vérifiez votre e-mail</p>
                                    <p className="light-gray fontSemiBold" style={{marginTop:"-1.4rem", textAlign:"center", fontSize:".8rem"}}>Nous avons envoyé un lien de réinitialisation du mot de passe à</p>
                                    <p className="light-gray fontLight" style={{marginTop:"-.6rem", textAlign:"center", fontSize:"1rem"}}>kongbizion3@gmail.com</p>
                                </div>
                                <div data-aos="zoom-out-right" data-aos-offset="100" style={{marginTop: '1.3rem'}} className="form-group">
                                     <button type="submit" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="fontLight btn waves-effect waves-light submitBtn">Ouvrir l'application de messagerie</button>
                                </div>
                                <div className="row" style={{marginTop:"-.5rem"}}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="200"><hr style={{height:".4px", marginTop:"35px"}}/></div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="200" style={{textAlign:"center", marginTop:'-3rem'}}><button className="Orbutton">OU</button></div>
                                    </div>
                                </div>
                                <div style={{marginTop:"-.5rem"}} className="portlet-title">
                                    <p style={{textAlign:"center", color:"#4ab2cc", fontSize:"1rem"}}><FaChevronCircleLeft style={{marginRight:"5px", marginTop:"-2px"}}/><Link style={{color:"#4ab2cc"}} to="/">Retour pour vous inscrire</Link></p>
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

export default UserCheckEmailContent;