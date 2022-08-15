import React, { useEffect } from "react";
import "../admin.css";
import Footer from '../components/Footer'
import Chart from '../components/Chart';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


function HomepageContent() {
    const navigate = useNavigate()

    const {user} = useSelector((state)=>state.auth)
  
  
    useEffect(()=>{
      if(!user.isAdmin){
        navigate('/')
        console.log('kjdshkj')
      }
    },[user])
    console.log(user.isAdmin)
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                <div className="breadcome-area home-page-breadcome-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="breadcome-list single-page-breadcome">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="breadcome-heading">
                                                <p style={{ fontStyle: "bold", paddingTop: "1rem", color: "gray" }}>Admin Dashboard</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul className="breadcome-menu">
                                                <li className="breadcome-linkss"><a style={{color: '#4ab2cc' }} href="admindashboard">Home /</a></li>
                                                <li className="breadcome-linkss" style={{color: 'gray' }}><span className="bread-blod">Dashboard</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="analytics-sparkle-area">
                    <div className="container-fluid" data-aos="zoom-in-down" data-aos-offset="400">
                        <div className="row homedashbaord">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{ marginTop: '1.2rem' }}>
                                <div className="analytics-sparkle-line">
                                    <div className="analytics-content">
                                        <h5>Number of registered clients</h5>
                                        <h2>FCFA<span className="counter">5000</span> <span className="tuition-fees"></span></h2>
                                        <span className="text-success percentage">20%</span>
                                        <div className="progress m-b-0">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}> <span className="sr-only">20% Complete</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{ marginTop: '1.2rem' }}>
                                <div className="analytics-sparkle-line reso-mg-b-30">
                                    <div className="analytics-content">
                                        <h5>Weekly registered</h5>
                                        <h2>$<span className="counter">3000</span> <span className="tuition-fees"></span></h2>
                                        <span className="text-danger percentage">30%</span>
                                        <div className="progress m-b-0">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}> <span className="sr-only">230% Complete</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{ marginTop: '1.2rem' }}>
                                <div className="analytics-sparkle-line">
                                    <div className="analytics-content">
                                        <h5>Number of registered clients</h5>
                                        <h2>$<span className="counter">5000</span> <span className="tuition-fees">Tuition Fees</span></h2>
                                        <span className="text-success percentage">20%</span>
                                        <div className="progress m-b-0">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}> <span className="sr-only">20% Complete</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{ marginTop: '1.2rem' }}>
                                <div className="analytics-sparkle-line reso-mg-b-30">
                                    <div className="analytics-content">
                                        <h5>Weekly registered</h5>
                                        <h2>$<span className="counter">3000</span> <span className="tuition-fees">Tuition Fees</span></h2>
                                        <span className="text-danger percentage">30%</span>
                                        <div className="progress m-b-0">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}> <span className="sr-only">230% Complete</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="all-content-wrapper">
                    <div className="product-sales-area mg-tb-30 graph-container">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product-sales-chart">
                                        <div className="portlet-title">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div className="caption pro-sl-hd">
                                                        <span className="caption-subject graph-title"><b style={{paddingTop:"-5rem"}}><p>Total Services Income Generated</p></b></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div className="actions graph-rp graph-rp-dl">
                                                        <form style={{display:"flex"}}>
                                                            <div className="form-group" style={{marginRight:".5rem"}}>
                                                                <input className="form-control" type="text" name="from" placeholder="From" />
                                                            </div>
                                                            <div className="form-group" style={{marginRight:".5rem"}}>
                                                                <input className="form-control" type="text" placeholder="To" name="to"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <button type="submit" style={{background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn">SUBMIT</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>


                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <Chart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <div className="white-box analytics-info-cs mg-b-10 res-mg-t-30 table-mg-t-pro-n res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n visits2 visits">
                                        <div className="white-box res-mg-t-30 table-mg-t-pro-n">
                                            <h3 className="box-title" style={{ marginTop: '-1.2rem' }}>Visits from countries</h3>
                                            <ul className="country-state" style={{ marginLeft: '-2rem' }}>
                                                <li>
                                                    <h2><span className="counter">1250</span></h2> <small>From Australia</small>
                                                    <div className="country-progress pull-right">75% <i className="fa fa-level-up text-danger ctn-ic-1"></i></div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-danger ctn-vs-1" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}> <span className="sr-only">75% Complete</span></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h2><span className="counter">1050</span></h2> <small>From USA</small>
                                                    <div className="country-progress pull-right">48% <i className="fa fa-level-up text-success ctn-ic-2"></i></div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-info ctn-vs-2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "48%" }}> <span className="sr-only">48%</span></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h2><span className="counter">6350</span></h2> <small>From Canada</small>
                                                    <div className="country-progress pull-right">55% <i className="fa fa-level-up text-success ctn-ic-3"></i></div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-success ctn-vs-3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "55%" }}> <span className="sr-only">55% Complete</span></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h2><span className="counter">950</span></h2> <small>From India</small>
                                                    <div className="country-progress pull-right">33% <i className="fa fa-level-down text-success ctn-ic-4"></i></div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-success ctn-vs-4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "33%" }}> <span className="sr-only">33% Complete</span></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h2><span className="counter">3250</span></h2> <small>From Bangladesh</small>
                                                    <div className="country-progress pull-right">60% <i className="fa fa-level-up text-success ctn-ic-5"></i></div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-inverse ctn-vs-5" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}> <span className="sr-only">60% Complete</span></div>
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
                <div><Footer /></div>
            </main>

        </>
    )
}

export default HomepageContent;