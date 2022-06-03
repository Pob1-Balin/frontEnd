import React from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { API } from '../../config'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function AddServiceContent() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        service_id: '',
        dashboard_id: '',
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
        axios.post(`${API}/service`, serviceInfo)
            .then(res => {
                alert(res)
                // if (res.status === 200)
                // alert('service successfully added')
                // else
                // Promise.reject()
            })
            .catch(err => {
                console.log(err)
                alert('Something went wrong')
                console.log(err)
            })

    }

    const clickAddService = (event) => {
        event.preventDefault();
        const { service_id, dashboard_id, service_name, service_amount, number_of_subscribers, short_description } = values;
        submitService({
            service_id,
            dashboard_id,
            service_name,
            service_amount,
            number_of_subscribers,
            short_description,
        });
        navigate('/services');
    }

    return (
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
                                                    <input type="text" placeholder="Search..." className="search-int col-xs-12 form-control mobile-menu-search" />
                                                    <a href="#"><i className="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul className="breadcome-menu">
                                                <li><a style={{ fontSize: '1rem', color: '#4ab2cc' }} href="admindashboard">Dashboard /</a></li>
                                                <li style={{ fontSize: '1rem', color: 'gray' }}><span className="bread-blod">Add Services</span></li>
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
                                    <div><p className="mt-3 mb-4" style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Service</p></div>
                                    <div id="myTabContent" className="tab-content custom-product-edit">
                                        <div className="product-tab-list">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="review-content-section">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="devit-card-custom">

                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="service id" name="service_id" value={values.service_id} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="dashborad id" name="dashboard_id" value={values.dashboard_id} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="Enter service name" name="service_name" value={values.service_name} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="service amount" name="service_amount" value={values.service_amount} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="num of sub" name="number_of_subscribers" value={values.number_of_subscribers} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="Enter short description of service" name="short_description" value={values.short_description} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input type="file" className="form-control" onchange="document.getElementById('prepend-big-btn').value = this.value;" />
                                                                    </div>
                                                                    <button onClick={clickAddService} href="#!" className="mt-15 btn waves-effect waves-light pd-setting btn-info">Submit</button>
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
                <div style={{ marginTop: '7rem' }}></div>
                <div className="add-clients-footer"><Footer /></div>
            </main>

        </>
    )
}

export default AddServiceContent;
