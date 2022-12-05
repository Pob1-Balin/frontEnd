import React, { useState, useEffect } from "react";
import ClientService from "../components/ClientService";
import NotSubscribedServices from "../components/NotSubscribedServices";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../../AdminDashboard/admin.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../redux/auth/authSlice'
import axios from 'axios'
import { API } from '../../config'

import EmptyPageContent from "../../CommonPageContents/EmptyPageContent";

function ClientsServicesPageContent(props){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation();

        if(location.state){
           if(location.state.refresh === "true"){
             window.location.reload();
             navigate("/home", {state:{refresh:"false"}})
           }
        }

    //  const { user } = useSelector((state) => state.auth)

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    console.log("user data", user)

      useEffect(()=>{
        if(!user){
          navigate('/')
        }
        Aos.init({ duration: 2000 });
      },[user, navigate])

      const onLogout = () => {
            dispatch(reset())
            dispatch(logout())
            navigate('/')
      }

      const [services, setServices] = useState([]);
      useEffect(() => {
          axios.get(`${API}/service`).then(({ data }) => {
              setServices(data.data)
          }).catch((err) => {
              //  console.log("Something Went Wrong:", err)
          });
      }, []);

    var userServices = [{}];
    userServices = user.services;
    var subscribed_services = [{}];
    var unsubscribed_services = [{}];

    {services.map((item) => {
        if(userServices.find(e => e.service_id === item._id)){
             subscribed_services = [...subscribed_services, item];
        }else{
             unsubscribed_services = [...unsubscribed_services, item];
        }
    })}

    subscribed_services.splice(0,1);
    unsubscribed_services.splice(0,1);

    return(
        <>
             <main className="">
                <SiteHeader/>

                <li class="nav-item">
                    <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link">
                       <ExitToAppIcon className='logoutIcon' />
                    </a>
                    <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn">
                       <li><a href="#"><span class="edu-icon edu-locked author-log-ic"></span><p><button onClick={onLogout}>LogOut</button></p></a></li>
                    </ul>
                </li>

                <div data-aos="zoom-out-right" data-aos-offset="200" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 services-section">
                     <p className="about" style={{color:"white", fontSize:"2rem", textAlign:"center", paddingTop:"9rem"}}>Services</p>
                </div>
                <div className="px-md-4" style={{marginTop:"1rem", marginLeft:"4rem", marginRight:"4rem"}}>
                    <div style={{marginLeft:"-3rem"}} data-aos="fade-left" data-aos-offset="200">
                        <p style={{fontSize:'1.5rem', marginTop:"2.5rem", color:"gray"}} className="text-center">Services you've subscribed for</p>
                        <hr style={{marginTop:"-.1rem", marginBottom:"2rem", width:"5rem",height:".2rem", fontWeight:"bold", color:"#4ab2cc"}}/>
                    </div>
                    <div class="services-area ">
                        <div class="container-fluid services">
                            <div class="row mg-b-15">
                                {/* <ClientService user={props.user}/> */}
                                <ClientService services={subscribed_services}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-md-4" style={{marginLeft:"4rem", marginRight:"4rem"}}>
                    <div style={{marginLeft:"-3rem"}} data-aos="fade-left" data-aos-offset="200">
                        <p  style={{fontSize:'1.5rem', marginTop:"2.5rem", color:"gray", color:"gray"}} className="text-center">More Services to subscribe to</p>
                        <hr style={{marginTop:"-.1rem", marginBottom:"5rem", width:"5rem",height:".2rem", fontWeight:"bold", color:"#4ab2cc"}}/>
                    </div>
                    <div  data-aos="zoom-in" data-aos-offset="200" class="services-area ">
                        <div class="container-fluid services">
                            <div class="row mg-b-15">
                                {/* {service.map(serviceData => <NotSubscribedServices key={serviceData._id} id={serviceData._id} service_name={serviceData.name} service_amount={serviceData.amount} number_of_subscribers={serviceData.subscribers} short_description={serviceData.description}/>)} */}
                                {/* <NotSubscribedServices user={props.user}/> */}

                                <NotSubscribedServices userData={user} services={unsubscribed_services}/>
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
