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

    const id = "62f3c2e5be76be3cc1b6ebc7";
    const submitUnit = (unitInfo) => {
        axios.put(`${API}/unit/unit/${id}`, unitInfo)
            .then(res => {
            })
            .catch(err => {
            })
    }

    let timeSpentScrolling = 0;

    let isHalted = false;
    let haltedStartTime, haltedEndTime;
    let totalHaltedTime = 0;

    const update_halt_state = () => {
      if (isHalted) {
        isHalted = false;
        haltedEndTime = new Date().getTime()
        totalHaltedTime += (haltedEndTime - haltedStartTime) / 1000
      } else {
        isHalted = true;
        haltedStartTime = new Date().getTime()
      }
    }

    // Listen for scroll events
    window.addEventListener('scroll', () => {
      timeSpentScrolling += 1.8;
      update_halt_state()
    });

    document.addEventListener("DOMContentLoaded", () => {
      const start = new Date().getTime();

      // AVERAGE SCROLLING INTERVAL - 39 seconds
      setInterval(() => {
        if (new Date().getTime() - start > 39000) {
          update_halt_state()
        }
      }, 39000)

      window.addEventListener("beforeunload", () => {
        const end = new Date().getTime();
        update_halt_state()

        const totalTime = ((end - start) / 1000) - (timeSpentScrolling / 1000) - totalHaltedTime
        const time_spent = Math.round(totalTime);
        submitUnit({
            time_spent,
        });

      });

    });









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
                    <div className="container-fluid services-area">
                        <div className="container-fluid services">
                        <div className="row mg-b-15">
                            {service.map((serviceData, index) => <Services key={serviceData._id} id={serviceData._id} service_name={serviceData.name} service_amount={serviceData.amount} index={index} number_of_subscribers={serviceData.subscribers} image={serviceData.image} display="admin" short_description={serviceData.description}  />)}
                        </div>
                        </div>
                    </div>
                }
                 <div style={{marginRight:"-1rem"}}><Footer/></div>
            </main>

        </>
    )
}

export default ServicesContent;