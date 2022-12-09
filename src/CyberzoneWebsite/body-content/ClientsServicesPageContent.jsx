import React, { useState, useEffect} from "react";
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
import { FaFileAlt } from "react-icons/fa";
import Loader from '../../CommonPageContents/Loader'

function ClientsServicesPageContent(props){

    const [loading, setLoading] = useState(true)
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

    // console.log("user data", user)

      useEffect(()=>{
        if(!user){
          navigate('/')
        }
        Aos.init({ duration: 2000 });
      },[user, navigate])

      const [services, setServices] = useState([]);
      useEffect(() => {
          axios.get(`${API}/service`).then(({ data }) => {
              setServices(data.data)
              setLoading(false)
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
        {loading ?
            <Loader/>
        :
            <main className="">
            <div className="border-bottom headerTitle ml-3 mr-1">
                <h1 className="h2"><p>Présentation du cours</p></h1>
            </div>
            <div className="Home_navigation ml-3 mr-1">
                <p><span style={{color: '#0d3360', fontSize:"1.5rem"}}>Cours souscrits</span></p>
            </div>
            {subscribed_services.length == 0 ? 
                <div style={{textAlign:"center", justifyContent:"center", width:"100%", marginTop:"3rem", marginBottom:"4rem"}} className="col-12">
                    <FaFileAlt color="#0d3360" size="2.8rem"/>
                    <h4 style={{color:"#686868"}} className="empty_card_text">Oups!!! vous n'êtes encore inscrit à aucun cours</h4>
                </div>
                :
                <div className="wrapper3 services_wrapper" style={{marginTop:"2.5rem", marginBottom:"3rem"}}>
                    <ClientService services={subscribed_services}/>
                </div>
            }

            <div className="border-bottom ml-3 mr-1"></div>
            
            <div className="Home_navigation ml-3 mr-1">
                <p><span style={{color: '#0d3360', fontSize:"1.5rem"}}>Plus de cours</span></p>
            </div>

            <div className="wrapper3 services_wrapper" style={{marginTop:"2.5rem"}}>
                <NotSubscribedServices userData={user} services={unsubscribed_services}/>
            </div>

            <div style={{marginTop:"5rem"}}></div>
            <Footer destination="/legal" />

            </main>
        }
             
        </>
    );
}

export default ClientsServicesPageContent;
