import React from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Services from "../components/services";
import { useState, useEffect } from "react";
import axios from "axios";
import {API} from '../../config'

function ServicesContent(){

  const [service, setSevice] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/service`)
      .then(({ data }) => {
        setSevice(data.data);
        console.log(data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                 <div class="breadcome-area clients-breadcome-area addservice-bread">
                     <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="breadcome-list single-page-breadcome">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="breadcome-heading">
                                                <form role="search" class="sr-input-func">
                                                <input type="text" placeholder="Search..." class="search-int col-xs-12 form-control mobile-menu-search"/>
                                                    <a href="#"><i class="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul class="breadcome-menu">
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span class="bread-blod">Services</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>
                 <div class="product-status mg-b-15 clients-product-status addservice">
                     <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-status-wrap drp-lst" style={{background:'#f6f8fa'}}>
                                    <div class="add-product">
                                         <h4 style={{color:'gray'}}></h4>
                                         <a style={{background:'#4ab2cc'}} href="addservice">Add Services</a>
                                     </div>
                                    <div class="asset-inner">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="container-fluid services-area">
                     <div class="container-fluid services">
                     <div class="row mg-b-15">
                        {
                        service.map(service => <Services key={service._id} id= {service._id} service_id={service.service_id} dashboard_id={service.dashboard_id} service_name={service.service_name} service_amount={service.service_amount} number_of_subscribers={service.number_of_subscribers} short_description={service.short_description}/>)}
                     </div>
                     </div>
                 </div>
                 <div style={{marginRight:"-1rem"}}><Footer/></div>
            </main>

        </>
    )
}

export default ServicesContent;