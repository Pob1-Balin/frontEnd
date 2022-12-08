import React, { useState, useEffect } from "react";
import ClientService from "../components/ClientService";
import NotSubscribedServices from "../components/NotSubscribedServices";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../../AdminDashboard/admin.css";
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../redux/auth/authSlice'
import axios from 'axios'
import { API } from '../../config'
import Footer from "../../ClientsDashboard/components/Footer";

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
                <div className="border-bottom headerTitle ml-3 mr-1">
                    <h1 className="h2"><p>Présentation du cours</p></h1>
                </div>
                <div className="Home_navigation ml-3 mr-1">
                    <p><span style={{color: '#0d3360', fontSize:"1.5rem"}}>Cours souscrits</span></p>
                </div>
                <div className="wrapper3 services_wrapper" style={{marginTop:"2.5rem", marginBottom:"3rem"}}>
                     {/* <ClientService user={props.user}/> */}
                     <ClientService services={subscribed_services}/>
                </div>

                <div className="border-bottom ml-3 mr-1"></div>
                
                <div className="Home_navigation ml-3 mr-1">
                    <p><span style={{color: '#0d3360', fontSize:"1.5rem"}}>Plus de cours</span></p>
                </div>

                <div className="wrapper3 services_wrapper" style={{marginTop:"2.5rem"}}>
                    {/* {service.map(serviceData => <NotSubscribedServices key={serviceData._id} id={serviceData._id} service_name={serviceData.name} service_amount={serviceData.amount} number_of_subscribers={serviceData.subscribers} short_description={serviceData.description}/>)} */}
                    <NotSubscribedServices userData={user} services={unsubscribed_services}/>
                </div>

                <div style={{marginTop:"5rem"}}></div>
                <Footer destination="/legal" />

             </main>
        </>
    );
}

export default ClientsServicesPageContent;
