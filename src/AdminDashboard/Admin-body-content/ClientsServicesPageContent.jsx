import React from "react";
import { useState, useEffect } from "react";
import ClientService from "../components/ClientService";
import NotSubscribedServices from "../components/NotSubscribedServices";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../admin.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/user";

function ClientsServicesPageContent(){
    const dispatch = useDispatch()
    useEffect(() => {
        Aos.init({ duration: 2000 });

        // dispatchec an action to add user data to store
        const user = localStorage.getItem("user")
        if(user){
            dispatch(addUser(user))
        }
      }, []);
    
    return(
        <>
             <main className="">
             <div className="services-section" style={{height:"20rem"}}>
                 <div data-aos="zoom-out-right" data-aos-offset="100" style={{textAlign:"center", paddingTop:"9rem"}}>
                     <p className="about" style={{color:"white", fontSize:"2rem"}}>Services</p>
                 </div>
             </div>

             <div className="px-md-4" style={{marginTop:"1rem", marginLeft:"4rem", marginRight:"4rem"}}>
                 <div style={{marginLeft:"-3rem"}} data-aos="fade-left" data-aos-offset="200">
                     <p  style={{fontSize:'1.5rem', marginTop:"2rem", marginBottom:"1.8rem"}} className="">Services you've subscribed for</p>
                 </div>
                 <div class="services-area ">
                     <div class="container-fluid services">
                         <div class="row mg-b-15">
                             <ClientService/>
                         </div>
                     </div>
                 </div>
            </div>

             <div className="px-md-4" style={{marginLeft:"4rem", marginRight:"4rem"}}>
                 <div style={{marginLeft:"-3rem"}} data-aos="fade-left" data-aos-offset="200">
                     <p  style={{fontSize:'1.5rem', marginTop:"2.3rem", marginBottom:"1.8rem"}} className="">More Services to subscribe to</p>
                 </div>
                 <div  data-aos="zoom-in" data-aos-offset="200" class="services-area ">
                     <div class="container-fluid services">
                         <div class="row mg-b-15">
                             <NotSubscribedServices/>
                         </div>
                     </div>
                 </div>
            </div>

            <div style={{marginTop:"5rem"}}></div>

             </main>
        </>
    );
}

export default ClientsServicesPageContent;
