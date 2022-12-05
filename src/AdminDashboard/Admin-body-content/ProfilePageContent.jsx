import React, { useEffect, useState } from "react";
import "../admin.css";
import "../profile.css"
import Footer from '../components/Footer'
import axios from "axios";
import {API} from '../../config'
import { Link } from "react-router-dom";
function ProfilePageContent (){
    const [admin, setAdmin] = useState([])
    useEffect(()=>{
        axios.get(`${API}/users/admin`).then(({data})=>{
            setAdmin(data.data)
            console.log(data.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    console.log(admin)
    
    return(
        <>{admin.map((info)=>
            <main className="px-md-4 wrapper2 dashboard-pages">
                 <div className="breadcome-area clients-breadcome-area">
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
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span className="bread-blod">Admin profile</span></li>
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
                                         <Link style={{background:'#4ab2cc'}} to="/editadminprofile" state={info}>Update Details</Link>
                                     </div>
                                    <div className="asset-inner">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="single-pro-review-area mt-t-30 mg-b-15">
                     <div className="container-fluid">
                         <div className='row'>
                             <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                 <div className="profile-info-inner">
                                     <div className="profile-img">
                                         <img src="./images/Cature.png" alt="" />
                                     </div>
                                     <div className="profile-details-hr">
                                         <div className="row">
                                             <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                                 <div className="address-hr">
                                                     <p><b>Name</b><br /> {info.first_name}</p>
                                                 </div>
                                             </div>
                                             <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                                 <div className="address-hr tb-sm-res-d-n dps-tb-ntn">
                                                     <p><b>Designation</b><br /> Head of Dept.</p>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="row">
                                             <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                                 <div className="address-hr">
                                                     <p><b>Email ID</b><br /> {info.email}</p>
                                                 </div>
                                             </div>
                                             <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                                 <div className="address-hr tb-sm-res-d-n dps-tb-ntn">
                                                     <p><b>Phone</b><br /> {info.phone_number}</p>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="row">
                                             <div className="col-lg-12">
                                                 <div className="address-hr">
                                                      <p><b>Address</b><br /> E104, catn-2, Chandlodia Ahmedabad Gujarat, UK.</p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>

                             <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 bio">
                                 <div className="product-payment-inner-st res-mg-t-30 analysis-progrebar-ctn">
                                     <ul id="myTabedu1" className="tab-review-design">
                                         <li className=""><p style={{fontStyle:"bold", fontSize:"1.2rem", fontWeight:"600"}}>Biography</p></li>
                                     </ul>
                                     <div id="myTabContent" style={{marginTop:"-2rem"}} className="tab-content custom-product-edit">
                                         <div className="Biography-content" id="">
                                             <div className="row">
                                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                     <div className="review-content-section">
                                                         <div className="chat-discussion" style={{height:'auto'}}>
                                                             <div className='row'>
                                                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                     <div className="review-content-section">
                                                                     <div className="row">
				                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
				                                                        <div className="address-hr biography">
				                                                            <p><b>Full Name</b><br /> {info.first_name} {info.last_name}</p>
				                                                        </div>
				                                                    </div>
				                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
				                                                        <div className="address-hr biography">
				                                                            <p><b>Mobile</b><br /> {info.phone_number}</p>
				                                                        </div>
				                                                    </div>
				                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
				                                                        <div className="address-hr biography">
				                                                            <p><b>Email</b><br /> {info.email}</p>
				                                                        </div>
				                                                    </div>
				                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
				                                                        <div className="address-hr biography">
				                                                            <p><b>Location</b><br /> {info.country}</p>
				                                                        </div>
				                                                    </div>
				                                                </div>
                                                                
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>

                                 </div>
                             </div>
                         </div>
                    </div>
                 </div>

             <Footer/>
            </main>
        )}
        </>
    )
}

export default ProfilePageContent;