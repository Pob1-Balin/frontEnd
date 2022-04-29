import React from "react";
import "../admin.css";
import Footer from '../components/Footer'
import {API} from '../../config'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function AddServiceContent(){
    const navigate = useNavigate();

    const [values, setValues] = useState({
        dashboard_id:'',
        service_name: '',
        service_amount: '',
        number_of_subscribers: '',
        short_description: '',
    })


    // Destructing so as to be able to send to the backend


    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const submitService = (serviceInfo) => {
            axios.post(`${API}/services/add/`, serviceInfo)
            .then(res => {
                alert(res)
                // if (res.status === 200)
                // alert('service successfully added')
                // else
                // Promise.reject()
            })
            .catch(err => {
                alert('Something went wrong')
                console.log(err)
            })

        }

    const clickAddService = (event)=>{
        event.preventDefault();
        const { dashboard_id, service_name, service_amount, number_of_subscribers, short_description} = values;
        submitService({
            dashboard_id,
            service_name,
            service_amount,
            number_of_subscribers,
            short_description,
        });
        sessionStorage.setItem('name', 'success');
        navigate('/services');
    }

  

    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                 <div class="breadcome-area clients-breadcome-area servicee">
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
                                                <li style={{fontSize:'1rem', color:'gray'}}><span class="bread-blod">Edit Services</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                    <div class="single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{fontSize:'1.3rem', color:'gray', fontStyle:'bold', fontWeight:'550'}}>Edit Service Data</p></div>
                                        <div id="myTabContent" class="tab-content custom-product-edit">
                                            <div class="product-tab-list">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="review-content-section">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div class="devit-card-custom">

                                                                       <div class="form-group">
                                                                            <input onChange={handleChange} type="text" class="form-control" placeholder="service id" name="service_id" value={values.dashboard_id}/>
                                                                        </div>
                                                                       <div class="form-group">
                                                                            <input onChange={handleChange} type="text" class="form-control" placeholder="dashborad id" name="dashboard_id" value={values.dashboard_id}/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input onChange={handleChange} type="text" class="form-control" placeholder="Enter service name" name="service_name" value={values.service_name}/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input onChange={handleChange} type="text" class="form-control" placeholder="service amount" name="service_amount" value={values.service_amount}/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input onChange={handleChange} type="text" class="form-control" placeholder="num of sub" name="number_of_subscribers" value={values.number_of_subscribers}/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input onChange={handleChange} type="text" class="form-control" placeholder="Enter short description of service" name="short_description" value={values.short_description}/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                             <input type="file" class="form-control" onchange="document.getElementById('prepend-big-btn').value = this.value;"/>
                                                                        </div>
                                                                        <button onClick={clickAddService} href="#!" class="mt-15 btn waves-effect waves-light pd-setting btn-info">Submit</button>
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


                    {API}

                    {JSON.stringify(values)}
                <div style={{marginTop: '7rem'}}></div>
                
               <div className="add-clients-footer"><Footer/></div>
            </main>

        </>
    )
}

export default AddServiceContent;
