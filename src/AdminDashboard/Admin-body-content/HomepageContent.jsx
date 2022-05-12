import React, { useState, useEffect } from "react";
import "../admin.css";
import Footer from '../components/Footer'
import Chart from '../components/Chart';
import Aos from 'aos';
import 'aos/dist/aos.css';





function HomepageContent (){
    useEffect(() => {
          Aos.init({duration: 2000});
      }, []);

    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">

                <div class="breadcome-area home-page-breadcome-area">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="breadcome-list single-page-breadcome">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="breadcome-heading">
                                               <p style={{fontStyle:"bold", fontSize:"1.5rem", paddingTop:"1rem", color:"gray"}}>Admin Dashboard</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul class="breadcome-menu">
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Home /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span class="bread-blod">Dashboard</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div> 
                 
                 <div class="analytics-sparkle-area">
                    
                 <div class="container-fluid" data-aos="zoom-in-down" data-aos-offset="400">
                <div class="row homedashbaord">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:'1.2rem'}}>
                        <div class="analytics-sparkle-line">
                            <div class="analytics-content">
                                <h5>Number of registered clients</h5>
                                <h2>$<span class="counter">5000</span> <span class="tuition-fees">Tuition Fees</span></h2>
                                <span class="text-success">20%</span>
                                <div class="progress m-b-0">
                                     <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:'20%'}}> <span class="sr-only">20% Complete</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:'1.2rem'}}>
                        <div class="analytics-sparkle-line reso-mg-b-30">
                            <div class="analytics-content">
                                <h5>Weekly registered</h5>
                                <h2>$<span class="counter">3000</span> <span class="tuition-fees">Tuition Fees</span></h2>
                                <span class="text-danger">30%</span>
                                <div class="progress m-b-0">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:'30%'}}> <span class="sr-only">230% Complete</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:'1.2rem'}}>
                        <div class="analytics-sparkle-line">
                            <div class="analytics-content">
                                <h5>Number of registered clients</h5>
                                <h2>$<span class="counter">5000</span> <span class="tuition-fees">Tuition Fees</span></h2>
                                <span class="text-success">20%</span>
                                <div class="progress m-b-0">
                                     <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:'20%'}}> <span class="sr-only">20% Complete</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:'1.2rem'}}>
                        <div class="analytics-sparkle-line reso-mg-b-30">
                            <div class="analytics-content">
                                <h5>Weekly registered</h5>
                                <h2>$<span class="counter">3000</span> <span class="tuition-fees">Tuition Fees</span></h2>
                                <span class="text-danger">30%</span>
                                <div class="progress m-b-0">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:'30%'}}> <span class="sr-only">230% Complete</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 </div>
                 </div>








                 <div class="all-content-wrapper">
                     
                     <div class="product-sales-area mg-tb-30 graph-container">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                    <div class="product-sales-chart">
                                        <div class="portlet-title">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div class="caption pro-sl-hd">
                                                        <span class="caption-subject"><b>University Earnings</b></span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div class="actions graph-rp graph-rp-dl">
                                                        <p>All Earnings are in million $</p>
                                                    </div>
                                                </div>


                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                  {/* <Chart /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <div class="white-box analytics-info-cs mg-b-10 res-mg-t-30 table-mg-t-pro-n res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n visits2 visits">
                                    <div class="white-box res-mg-t-30 table-mg-t-pro-n">
                                        <h3 class="box-title" style={{marginTop: '-1.2rem'}}>Visits from countries</h3>
                                        <ul class="country-state" style={{marginLeft:'-2rem'}}>
                                            <li>
                                                <h2><span class="counter">1250</span></h2> <small>From Australia</small>
                                                <div class="pull-right">75% <i class="fa fa-level-up text-danger ctn-ic-1"></i></div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-danger ctn-vs-1" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}> <span class="sr-only">75% Complete</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <h2><span class="counter">1050</span></h2> <small>From USA</small>
                                                <div class="pull-right">48% <i class="fa fa-level-up text-success ctn-ic-2"></i></div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-info ctn-vs-2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"48%"}}> <span class="sr-only">48% Complete</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <h2><span class="counter">6350</span></h2> <small>From Canada</small>
                                                <div class="pull-right">55% <i class="fa fa-level-up text-success ctn-ic-3"></i></div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success ctn-vs-3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"55%"}}> <span class="sr-only">55% Complete</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <h2><span class="counter">950</span></h2> <small>From India</small>
                                                <div class="pull-right">33% <i class="fa fa-level-down text-success ctn-ic-4"></i></div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success ctn-vs-4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"33%"}}> <span class="sr-only">33% Complete</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <h2><span class="counter">3250</span></h2> <small>From Bangladesh</small>
                                                <div class="pull-right">60% <i class="fa fa-level-up text-success ctn-ic-5"></i></div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-inverse ctn-vs-5" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}> <span class="sr-only">60% Complete</span></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>

                 </div>



             <div><Footer/></div>
            </main>

        </>
    )
}

export default HomepageContent;