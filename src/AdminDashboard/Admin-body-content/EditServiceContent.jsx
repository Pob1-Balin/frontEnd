import React, { useEffect } from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { API } from '../../config'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { courseFormValidations } from "../../utils/inputValidations"
import { useFormik } from 'formik';
import axios from 'axios';
import SearchBar from "../components/SearchBar";

function AddServiceContent() {
    const location = useLocation()
    const navigate = useNavigate();
    window.addEventListener("beforeunload", (event) => {
        localStorage.setItem('redirecteditserv', false);
    });
    var servOldInfo = location.state
    const id = servOldInfo.service_id;
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const [imageName, setImageName] = useState('')
    const [image, setImage] = useState('')
    const handleImage = (event)=>{
        var img = event.target.files[0]
        setImage(img)
        setImageName(img.name)
    }

    const onSubmit = (values, actions) => {
        const { name, description, amount } = values;

        const updateServiceWitImg = (serviceInfo) => {
             // sending post request to upload file
             const formData = new FormData()
             formData.append('myFile', image)
             axios.post(`${API}/upload`, formData, {
                 headers:{
                     "content-tupe": "multipart/form-data"
                 }
             }).then(res=>{
             }).catch(err=>{
             })

            axios.put(`${API}/service/update/${id}`, serviceInfo)
                .then(res => {
                })
                .catch(err => {
                })
        }

        const updateServiceWitOImg = (serviceInfo) => {
            axios.put(`${API}/service/update/${id}`, serviceInfo)
                .then(res => {
                })
                .catch(err => {
                })
        }
        
        
        const image = imageName;
        if(imageName === ''){
            updateServiceWitOImg({
                name,
                description,
                amount,
            });
        }else{
            updateServiceWitImg({
                name,
                description,
                amount,
                image,
            });
        }
        navigate('/services');
    };
    
    const { values, handleChange, handleBlur, touched, errors, handleSubmit} = useFormik({
        initialValues: {
            name: servOldInfo.service_name, description: servOldInfo.short_description, amount: servOldInfo.service_amount,
        },
        validationSchema: courseFormValidations,
        onSubmit,
      })

    return (
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
               <SearchBar location="Modifier les cours"/>
                <div className="single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-payment-inner-st">
                                    <div id="myTabContent" className="tab-content custom-product-edit">
                                        <div className="product-tab-list">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="review-content-section">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="devit-card-custom">
                                                                    <div><p className="mt-4 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550', margin:"1rem"}}>Modifier les cours</p></div>
                                                                    <form onSubmit={handleSubmit} style={{margin:"1rem"}}>
                                                                        <div className="form-group">
                                                                            <label htmlFor='name' style={{marginBottom: "-7px"}} className="FormLable"><p>Nom *</p></label>
                                                                            <input type="text" className={`form-control input ${errors.name && touched.name && 'form-control2 border-color'}`} placeholder="Entrez le nom du cours" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                                                            <span className='error' style={{fontSize:"1rem"}}>{errors.name && touched.name ? errors.name : ''}</span>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='description' style={{marginBottom: "-7px"}} className="FormLable"><p>La description *</p></label>
                                                                            <input type="text" className={`form-control input ${errors.description && touched.description && 'form-control2 border-color'}`} placeholder="Entrez une courte description pour le cours" name="description" value={values.description} onChange={handleChange} onBlur={handleBlur}/>
                                                                            <span className='error' style={{fontSize:"1rem"}}>{errors.description && touched.description ? errors.description : ''}</span>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='amount' style={{marginBottom: "-7px"}} className="FormLable"><p>Montant *</p></label>
                                                                            <input type="number" className={`form-control input ${errors.amount && touched.amount && 'form-control2 border-color'}`} placeholder="Entrez le montant du cours" name="amount" value={values.amount} onChange={handleChange} onBlur={handleBlur} />
                                                                            <span className='error' style={{fontSize:"1rem"}}>{errors.amount && touched.amount ? errors.amount : ''}</span>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='image' style={{marginBottom: "-7px"}} className="FormLable"><p>Image *</p></label>
                                                                            <input type="file" className={`form-control`} name="image" onChange={handleImage} accept=".png, .jpg, .jpeg"/>
                                                                        </div>
                                                                        <button type="submit" style={{ background: '#4ab2cc', color: 'white'}} href="#!" className="add-service btn waves-effect waves-light">Envoyer</button>
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
