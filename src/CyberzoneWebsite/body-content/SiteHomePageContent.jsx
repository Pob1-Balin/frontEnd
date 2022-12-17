import React from "react";
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../admins.css";

function SiteHomePageContent (){
    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({ duration: 2000 });
      }, []);
    
    return(
        <>
             <main className="">
             <div className="Home-page-hero-section" style={{backgroundColor:"red", height:"30rem"}}>

                 <div data-aos="zoom-out-right" data-aos-offset="100" style={{textAlign:"center", paddingTop:"10rem"}}>
                     <p className="about" style={{color:"white"}}>CYBERZONE ACCADEMY</p>
                     <p style={{color:"white"}}>lorem ygiuhopk ytfuygho8hi uhh8u9iok ygighh ygygi7u</p>
                     <div class="product-buttons">
                         <Link to='/adminmodulepage' style={{ textDecoration: 'none', textAlign:"center" }}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info"><FaChevronCircleRight style={{paddingTop: ""}} size='1rem' color='#ffffff'/> Click Here</button></Link>
                     </div>

                 </div>
             </div>

             <div>
                 <div  data-aos="fade-right" data-aos-offset="100" style={{textAlign:"center", paddingTop:"4rem", paddingBottom:"4rem"}}>
                     <p className="about">What we do</p>
                     <p>lorem ygiuhopk ytfuygho8hi uhh8u9iok ygighh ygygi7u yhusij jasnbuoiash uhah uua ahso  euhao eaiohjao ouiah</p>
                     <div class="product-buttons">
                         <Link to='/adminmodulepage' style={{ textDecoration: 'none', textAlign:"center" }}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info"><FaChevronCircleRight style={{paddingTop: ""}} size='1rem' color='#ffffff'/> About Us  </button></Link>
                     </div>
                 </div>
             </div>

             <div className="px-md-4" style={{marginTop:"1rem", marginLeft:"4rem", marginRight:"4rem"}}>

                 <div  data-aos="fade-left" data-aos-offset="100" style={{textAlign:"center"}}>
                     <p className="about mb-5">Our Services</p>
                 </div>

                 <div  data-aos="zoom-in" data-aos-offset="100" class="services-area ">
                     <div class="container-fluid services">
                         <div class="row mg-b-15">
                             <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                                 <div class="courses-inner mg-t-30">
                                    <div class="courses-title">
                                        <a href="#"><img src="./images/Cature.png" alt="" /></a>
                                        <h2>Name</h2>
                                    </div>
                                    <div class="course-des" style={{ paddingLeft: ".3rem" }}>
                                        <p><span></span> <b>Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd</b></p>
                                    </div>
                                 </div>
                             </div>
                             <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                                 <div class="courses-inner mg-t-30">
                                    <div class="courses-title">
                                        <a href="#"><img src="./images/Cature.png" alt="" /></a>
                                        <h2>Name</h2>
                                    </div>
                                    <div class="course-des" style={{ paddingLeft: ".3rem" }}>
                                        <p><span></span> <b>Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd</b></p>
                                    </div>
                                 </div>
                             </div>
                             <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                                 <div class="courses-inner mg-t-30">
                                    <div class="courses-title">
                                        <a href="#"><img src="./images/Cature.png" alt="" /></a>
                                        <h2>Name</h2>
                                    </div>
                                    <div class="course-des" style={{ paddingLeft: ".3rem" }}>
                                        <p><span></span> <b>Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd</b></p>
                                    </div>
                                 </div>
                             </div>
                             <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                                 <div class="courses-inner mg-t-30">
                                    <div class="courses-title">
                                        <a href="#"><img src="./images/Cature.png" alt="" /></a>
                                        <h2>Name</h2>
                                    </div>
                                    <div class="course-des" style={{ paddingLeft: ".3rem" }}>
                                        <p><span></span> <b>Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd</b></p>
                                    </div>
                                 </div>
                             </div>
                             
                         </div>
                         <div class="product-buttons" style={{textAlign:"center"}}>
                                        <Link to='/adminmodulepage' style={{ textDecoration: 'none', textAlign:"center" }}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info"><FaChevronCircleRight style={{paddingTop: ""}} size='1rem' color='#ffffff'/> View service</button></Link>
                                    </div>
                     </div>
                 </div>
             
            </div>

             </main>
        </>
    );
}

export default SiteHomePageContent;
