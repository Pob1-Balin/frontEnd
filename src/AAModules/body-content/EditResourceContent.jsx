import React from "react";
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../config'
import { useState } from 'react';
import axios from 'axios';

function EditResourceContent() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        description: '',
        title: '',
        image: '',
    })


    // Destructing so as to be able to send to the backend

    const { description, title, image } = values;

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const submitRes = (resInfo) => {


        axios.post(`${API}/modul`, resInfo)
            .then(res => {
                if (res.status === 200)
                    alert('Module successfully created')
                else
                    Promise.reject()
            })
            .catch(err => {
                alert('Something went wrong')
                console.log(err)
            })

    }

    const clickSubmit = (event) => {
        event.preventDefault();
        submitRes({
            description: description,
            title: title,
            image: image
        })
        // navigate('/adminmodulepage');
    }
    return (
        <>
            <main className="px-md-4 wrapper2">
                <div style={{ marginTop: '-5rem' }} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4 style={{ marginTop: '2rem' }}><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Edit Resource Content</span></p></h4>
                </div>

                <div class="single-pro-review-area mt-t-30 mg-b-15 mt-40">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-payment-inner-st">
                                    <div><p className="mt-3 mb-4" style={{ fontSize: '1.3rem', fontStyle: 'bold', fontWeight: '550' }}>Edit Resource Content</p></div>
                                    <div id="myTabContent" class="tab-content custom-product-edit">
                                        <div class="product-tab-list">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="review-content-section">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div class="devit-card-custom">
                                                                    <div class="form-group">
                                                                        <input onChange={handleChange} type="text" class="form-control" placeholder="Edit resources title" name="title" value={values.title}/>
                                                                    </div><div class="form-group">
                                                                        <input onChange={handleChange} type="text" class="form-control" placeholder="Edit describtion" name="description" value={values.description}/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="image" name="image" value={values.image} />
                                                                    </div>
                                                                    <button onClick={clickSubmit} style={{ background: '#4ab2cc', color: 'white' }} href="#!" className="btn waves-effect waves-light">Submit</button>
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

                <div style={{ marginTop: '3.9rem' }}></div>
                <Footer />
            </main>

        </>
    )
}

export default EditResourceContent;