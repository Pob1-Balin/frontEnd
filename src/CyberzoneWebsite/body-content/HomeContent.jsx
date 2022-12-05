import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./style.css";
import HeroSection from "../components/HeroSection"
import images from "./images.png"
import Divider from "../body-content/divider2.png"
import CallIcon from "./icons-03.png"
import LocationIcon from "./icons-01.png"
import EmailIcon from "./icons-02.png"

function HomeContent(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return(
        <>
             <main className="overflow">
                <HeroSection/>
                <section className="counter">
                    <div className="container">
                        <div className="counter__content">
                            <div className="row counter__content__row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="counter__item">
                                        <div className="counter__item__text">
                                            <i className="icon fas fa-project-diagram fa-3x"></i>
                                            <h2 className="counter_num">230</h2>
                                            <p>Compled Projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="counter__item second__item">
                                        <div className="counter__item__text">
                                            <i className="icon far fa-smile-beam fa-3x"></i>
                                            <h2 className="counter_num">1068</h2>
                                            <p>Happy clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="counter__item third__item">
                                        <div className="counter__item__text">
                                        <i className="icon fas fa-chalkboard-teacher fa-3x"></i>
                                            <h2 className="counter_num">230</h2>
                                            <p>Perspective clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="counter__item four__item">
                                        <div className="counter__item__text">
                                            <i className="icon fas fa-list-alt fa-3x"></i>
                                            <h2 className="counter_num">230</h2>
                                            <p>Compled Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div style={{marginTop:"2.3rem"}}>
                    <center>
                        <h1><p className="" style={{color:"white"}}><span style={{color:"black"}}>Our</span> <span style={{color:"#6ec5d8"}}>Services</span></p></h1>
                        <img style={{marginTop:"-2.5rem", width:"8rem"}} src={Divider}/>
                    </center>
                </div>

























































                <div class="card" style={{width: "18rem", marginLeft:"20rem"}}>
                    <div className="text-center mt-4">
                       <img src={CallIcon} width="70" height="70"/>
                       <div className="card-body">
                            <h5 className="" style={{color:"#6ec5d8"}}>Name of service</h5>
                            <p className="card-text text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p style={{color:"#6ec5d8", fontSize:"1rem"}}>Read More</p>
                       </div>
                    </div>
                </div>

                <div>
                    <center><button style={{width:"10rem", height:"3rem", fontWeight:"bold", fontSize:"1rem", backgroundColor:"#6ec5d8", border:"none"}} type="submit" className="btn btn-primary">Load More</button></center>
                </div>

             </main>
        </>
    );
}

export default HomeContent;
