import React, { useEffect } from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import "../admin.css";
import { API } from '../../config'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { moduleaddFormValidations } from "../../utils/inputValidations"
import { useFormik } from 'formik';

function EditModuleContent() {
    const location = useLocation()
    var modOldInfo = location.state
    const id = modOldInfo.id;
    const service_id = modOldInfo.service_id;
    const serv_id = JSON.parse(localStorage.getItem("servId"));
    const navigate = useNavigate();
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
        const submitModule = (moduleInfo) => {
            if(imageName != ''){
                /// sending post request to upload file
                const formData = new FormData()
                formData.append('myFile', image)
                axios.post(`${API}/upload`, formData, {
                    headers:{
                        "content-tupe": "multipart/form-data"
                    }
                }).then(res=>{
                }).catch(err=>{
                })
    
                //////////////////////////
                axios.put(`${API}/module/module/${id}`, moduleInfo)
                    .then(res => {
                    })
                    .catch(err => {
                    })
            }else {
                axios.put(`${API}/module/module/${id}`, moduleInfo)
                    .then(res => {
                    })
                    .catch(err => {
                    })
            }
    
        }
      
        const image = imageName;
        const { title } = values;
        if(image != ''){
            submitModule({
                title,
                image,
            });
        }else{
            submitModule({
                title,
            });
        }

        localStorage.setItem('redirectserv', true);
        navigate('/adminmodulepage', {state:{service_id :service_id}});
    };

    const { values, handleChange, handleBlur, touched, errors, handleSubmit} = useFormik({
        initialValues: {
            title: modOldInfo.title,
        },
        validationSchema: moduleaddFormValidations,
        onSubmit,
    })

    return (
        <>
            <main className="px-md-4 wrapper2 dashboard-pages ml-3">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom" style={{marginTop:"-2rem"}}>
                    <h4 style={{color: '#0d3360'}}>
                        <div className="returnHome2">
                            <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem"}} to='/adminmodulepage' state={{service_id: serv_id}}><span className="home">Accueil</span></Link> <span className="stroke_color">/</span> <span className="add-modulee" style={{fontStyle: 'bold', fontWeight: '550' }}>Modifier le module</span></p>
                        </div>
                    </h4>
                </div>
                <div class="single-pro-review-area mt-t-30 mg-b-15 module-forms">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-payment-inner-st">
                                    <div id="myTabContent" class="tab-content custom-product-edit">
                                        <div class="product-tab-list">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="review-content-section">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div class="devit-card-custom">
                                                                    <div><p className="mt-4 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550', margin:"1rem" }}>Modifier le module</p></div>
                                                                    <form onSubmit={handleSubmit} style={{margin:"1rem"}}>
                                                                        <div className="form-group">
                                                                            <label htmlFor='title' style={{ marginBottom: "-12px" }} className="FormLable"><p>Titre</p></label>
                                                                            <input type="text" className={`form-control input ${errors.title && touched.title && 'form-control2 border-color'}`} placeholder="Entrez le titre du module" name="title" value={values.title} onChange={handleChange} onBlur={handleBlur}/>
                                                                            <span className='error' style={{fontSize:"1rem"}}>{errors.title && touched.title ? errors.title : ''}</span>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='image' style={{ marginBottom: "-12px" }} className="FormLable"><p>Image</p></label>
                                                                            <input type="file" className="form-control"  placeholder="Select module image" name="image"  onChange={handleImage} accept=".png, .jpg, .jpeg"/>
                                                                        </div>
                                                                        <button type="submit" style={{ background: '#4ab2cc', color: 'white' }} href="#!" className="add-service btn waves-effect waves-light">Envoyer</button>
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

                <div style={{ marginTop: '11rem' }}></div>
                <div style={{marginTop:"17rem"}} className="space-creater"></div>
                <div className="add-clients-footer"><Footer destination="admin" /></div>
            </main>

        </>
    )
}

export default EditModuleContent;