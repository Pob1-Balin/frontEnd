import React, { useState, useEffect } from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { API } from '../../config'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddServiceContent() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
       name: "",
       description: '',
       amount: '',
       image: '',
    })

    // Destructing so as to be able to send to the backend
    const handleChange = event => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }

    const [image, setImage] = useState('')
    const handleImage = (event)=>{
        var img = event.target.files[0]
        setImage(img)
        setValues({...values, 'image': img.name})
    }

    const submitService = (serviceInfo) => {
         /// sending post request to upload file
         const formData = new FormData()
         formData.append('myFile', image)
         axios.post(`${API}/upload`, formData, {
             headers:{
                 "content-tupe": "multipart/form-data"
             }
         }).then(res=>{
             console.log(res)
         }).catch(err=>{
             console.log(err)
         })

         ///////////
        axios.post(`${API}/service/create`, serviceInfo)
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
               } else Promise.reject();
            })
            .catch(err => {
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, description, amount, image } = values;
        submitService({
            name,
            description,
            amount,
            image,
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
                                                <li><a style={{color: '#4ab2cc' }} href="admindashboard">Dashboard /</a></li>
                                                <li style={{color: 'gray' }}><span className="bread-blod">Add Services</span></li>
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
                                    <div><p className="mt-3 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Service</p></div>
                                    <div id="myTabContent" className="tab-content custom-product-edit">
                                        <div className="product-tab-list">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="review-content-section">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="devit-card-custom">
                                                                    <form method="post" onSubmit={handleSubmit}>
                                                                        <div className="form-group">
                                                                            <label htmlFor='name' style={{marginBottom: "-12px"}} className="FormLable"><p>Name</p></label>
                                                                            <input type="text" className="form-control input" placeholder="Enter service name" name="name" value={values.name} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='description' style={{marginBottom: "-12px"}} className="FormLable"><p>Description</p></label>
                                                                            <input type="text" className="form-control input" placeholder="Enter short description for service" name="description" value={values.description} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='amount' style={{marginBottom: "-12px"}} className="FormLable"><p>Amount</p></label>
                                                                            <input type="number" className="form-control input" placeholder="Enter service amount" name="amount" value={values.amount} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='image' style={{marginBottom: "-12px"}} className="FormLable"><p>Image</p></label>
                                                                            <input type="file" className="form-control"  placeholder="Select module image" name="image"  onChange={handleImage} accept=".png, .jpg, .jpeg"/>
                                                                        </div>
                                                                        <button type="submit" style={{ background: '#4ab2cc', color: 'white' }} href="#!" className="add-service btn waves-effect waves-light">Submit</button>
                                                                    </form>
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

                <div style={{ marginTop: '7rem' }}></div>
                <div className="add-clients-footer"><Footer /></div>
            </main>

        </>
    )
}

export default AddServiceContent;
