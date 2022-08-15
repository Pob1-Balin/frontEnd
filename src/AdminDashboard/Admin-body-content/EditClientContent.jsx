import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../admin.css";
import {API} from '../../config'
import Footer from '../components/Footer'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function EditClientContent(){
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.state)
    const [user, setUser]=useState({
        firstName: location.state.firstName,
        lastName: location.state.lastName,
        email: location.state.email,
        gender: location.state.gender,
        country: location.state.country,
        phone: location.state.phone
    })

    const handleChange = event =>{
        setUser({...user, [event.target.name]:event.target.value})
    }

    const [updated, setUpdated]=useState(false)

    const handleSubmit = ()=>{
        axios.put(`${API}/users/${location.state.id}/update`,{
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            gender: user.gender,
            country: user.country,
            phone_number: user.phone,
        }).then(()=>{
            toast.success('Update Successfully')
        }).catch(()=>{
            toast.error('Update failed!!!')
        })
    }
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                 <div className="breadcome-area clients-breadcome-area servicee">
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
                                                <li style={{fontSize:'1rem', color:'gray'}}><span className="bread-blod">Edit Clients</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService">
                     <div className="container-fluid">
                             <div className="row">
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{fontSize:'1.3rem', color:'gray', fontStyle:'bold', fontWeight:'550'}}>Edit Client</p></div>
                                        <div id="myTabContent" className="tab-content custom-product-edit">
                                            <div className="product-tab-list">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="review-content-section">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="devit-card-custom">
                                                                        <div className="form-group">
                                                                             <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handleChange}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                             <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={handleChange}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                             <input type="text" className="form-control" name="email" value={user.email} onChange={handleChange}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                             <input type="number" className="form-control" name="phone" value={user.phone} onChange={handleChange}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                             <input type="text" className="form-control" name="country" value={user.country} onChange={handleChange}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                             <input type="text" className="form-control" name="gender" value={user.gender} onChange={handleChange}/>
                                                                        </div>
                                                                        <button onClick={handleSubmit} className="mt-15 btn waves-effect waves-light pd-setting btn-info">Submit</button>
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

                <div style={{marginTop: '3rem'}}></div>
               <div className="add-clients-footer"><Footer/></div>
               <ToastContainer/>
            </main>

        </>
    )
}

export default EditClientContent;