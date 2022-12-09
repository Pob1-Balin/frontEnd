import React, { useState, useEffect }  from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Services from "../components/services";
// import { timeSpentTimer } from "../../utils/Timer";
import axios from "axios";
import {API} from '../../config'
import EmptyPageContent from "../../CommonPageContents/EmptyPageContent";


function ServicesContent(){
const [service, setService] = useState([]);
  useEffect(() => {
      axios.get(`${API}/service`).then(({data})=>{
        setService(data.data)
        //   console.log(data.data)
      }).catch((err)=>{
         //  console.log("Something Went Wrong:", err)
      })
      // Aos.init({ duration: 2000 });
  }, []);
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                 <div className="breadcome-area clients-breadcome-area addservice-bread">
                     <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="breadcome-list single-page-breadcome">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="breadcome-heading">
                                                <form role="search" className="sr-input-func">
                                                    <input type="text" placeholder="Search..." className="search-int col-xs-12 form-control mobile-menu-search"/>
                                                    <a href="#"><i className="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul className="breadcome-menu">
                                                <li><a style={{color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{color:'gray'}}><span className="bread-blod">Services</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>
                 <div className="product-status mg-b-15 clients-product-status addservice">
                     <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-status-wrap drp-lst" style={{background:'#f6f8fa'}}>
                                    <div className="add-product">
                                         <h4 style={{color:'gray'}}></h4>
                                         <a style={{background:'#4ab2cc'}} href="addservice">Add Services</a>
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
                     {service.map((serviceData, index) => <Services key={serviceData._id} id={serviceData._id} service_name={serviceData.name} service_amount={serviceData.amount} index={index} number_of_subscribers={serviceData.subscribers} image={serviceData.image} display="admin" short_description={serviceData.description}  />)}
                    </div>
                }
                 <div style={{marginRight:"-1rem"}}><Footer/></div>
            </main>

        </>
    )
}

export default ServicesContent;