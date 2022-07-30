import React, { useState, useEffect } from "react";
import ClientService from "../components/ClientService";
import NotSubscribedServices from "../components/NotSubscribedServices";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../../AdminDashboard/admin.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/user";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import axios from "axios";
import {API} from '../../config'

function ClientsServicesPageContent(){
    const [service, setService] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        Aos.init({ duration: 2000 });

        // dispatchec an action to add user data to store
        const user = localStorage.getItem("user")
        if(user){
            dispatch(addUser(user))
        }
      }, []);

      useEffect(() => {
        axios.get(`${API}/service`).then(({data})=>{
          setService(data.data)
          //   console.log(data.data)
        }).catch((err)=>{
           //  console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
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
                <SiteHeader/>
                <div style={{backgroundColor:"red"}} data-aos="zoom-out-right" data-aos-offset="200" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 services-section">
                     <p className="about" style={{color:"white", fontSize:"2rem", textAlign:"center", paddingTop:"9rem"}}>Services</p>
                </div>
                <div className="px-md-4" style={{marginTop:"1rem", marginLeft:"4rem", marginRight:"4rem"}}>
                    <div style={{marginLeft:"-3rem"}} data-aos="fade-left" data-aos-offset="200">
                        <p style={{fontSize:'1.5rem', marginTop:"2.5rem"}} className="text-center">Services you've subscribed for</p>
                        <hr style={{marginTop:"-.1rem", marginBottom:"2rem", width:"5rem",height:".2rem", fontWeight:"bold"}}/>
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
                        <p  style={{fontSize:'1.5rem', marginTop:"2.5rem", color:"gray"}} className="text-center">More Services to subscribe to</p>
                        <hr style={{marginTop:"-.1rem", marginBottom:"5rem", width:"5rem",height:".2rem", fontWeight:"bold"}}/>
                    </div>
                    <div  data-aos="zoom-in" data-aos-offset="200" class="services-area ">
                        <div class="container-fluid services">
                            <div class="row mg-b-15">

                        {service.map(serviceData => <NotSubscribedServices key={serviceData._id} id={serviceData._id} service_name={serviceData.name} service_amount={serviceData.amount} number_of_subscribers={serviceData.subscribers} short_description={serviceData.description}/>)}
                                <NotSubscribedServices/>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop:"5rem"}}></div>
                <SiteFooter/>
             </main>
        </>
    );
}

export default ClientsServicesPageContent;
