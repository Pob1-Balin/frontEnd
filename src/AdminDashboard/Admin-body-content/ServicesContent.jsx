import React, { useState, useEffect }  from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Services from "../components/services";
// import { timeSpentTimer } from "../../utils/Timer";
import axios from "axios";
import {API} from '../../config'
import EmptyPageContent from "../../CommonPageContents/EmptyPageContent";
import Loader from "../../CommonPageContents/Loader";
import SearchBar from "../components/SearchBar";


function ServicesContent(){
    if(JSON.parse(localStorage.getItem("refreshservice")) == "true"){
        localStorage.removeItem("refreshservice")
        localStorage.setItem('refreshservice', JSON.stringify("false"));
        window.location.reload();
    }

    window.addEventListener("beforeunload", (event) => {
        localStorage.setItem('redirecthome', false);
    }); 
    
    const [loading, setLoading] = useState(true);
    const [service, setService] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${API}/service`).then(({data})=>{
            setService(data.data)
            setLoading(false)
        }).catch((err)=>{
            setLoading(false)
        })
    }, []);
    return(
        <>
            {loading ?
                <Loader/>
                :
                <main className="px-md-4 wrapper2 dashboard-pages" style={{paddindTop:"1rem"}}>
                    <SearchBar location="Cours"/>
                    <div className="product-status mg-b-15 clients-product-status addservice">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-status-wrap drp-lst" style={{background:'#f6f8fa'}}>
                                    <div className="add-product">
                                            <h4 style={{color:'gray'}}></h4>
                                            <Link style={{background:'#4ab2cc'}} to="/addservice">Ajouter des cours</Link>
                                        </div>
                                    <div className="asset-inner">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    {service.length == 0?
                    <EmptyPageContent text="Oopps!!! no services have been added" directives="Click on the add service button above to add a service."/>
                    :

                    <div className="wrapper3 services_wrapper servicess" style={{marginTop:"2.2rem", marginLeft:"0rem"}}>
                    {/* {service.map(serviceData => <NotSubscribedServices key={serviceData._id} id={serviceData._id} service_name={serviceData.name} service_amount={serviceData.amount} number_of_subscribers={serviceData.subscribers} short_description={serviceData.description}/>)} */}
                        {service.map((serviceData, index) => <Services key={serviceData._id} service_id={serviceData._id} service_name={serviceData.name} service_amount={serviceData.amount} index={index} number_of_subscribers={serviceData.subscribers} image={serviceData.image} display="admin" short_description={serviceData.description}  />)}
                    </div>
                    }
                   <div style={{marginRight:"-1rem"}}><Footer/></div>
                </main>
            }

        </>
    )
}

export default ServicesContent;