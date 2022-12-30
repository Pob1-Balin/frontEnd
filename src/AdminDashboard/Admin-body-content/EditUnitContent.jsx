import React, { useState, useEffect } from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import "../admin.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { API } from '../../config'
import { moduleaddFormValidations } from "../../utils/inputValidations"
import { useFormik } from 'formik';

function EditUnitContent(){
    window.addEventListener("beforeunload", (event) => {
        localStorage.setItem('redirecteditserv', false);
    });
    const location = useLocation();
    const { user } = useSelector((state) => state.auth)
    var unitOldInfo = location.state
    const id = unitOldInfo.id;
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

        const submitUnit = (unitInfo) => {
            if(image != ''){
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
    
                axios.put(`${API}/unit/unit/${id}`, unitInfo)
                    .then(res => {
                    })
                    .catch(err => {
                    })
            }else{
                axios.put(`${API}/unit/unit/${id}`, unitInfo)
                    .then(res => {
                    })
                    .catch(err => {
                    })
                }
        }
        
        const image = imageName;
        const { title } = values;
            if(image != ''){
                submitUnit({
                    title,
                    image,
                });
            }else{
                submitUnit({
                    title,
                });
            }

        localStorage.setItem('refreshunit', JSON.stringify("true"));
        localStorage.setItem('redirectmod', true);
        navigate('/units', {state:{id:unitOldInfo.module_id, title:unitOldInfo.module_title, module_name:unitOldInfo.module_name}});     
    };


    const { values, handleChange, handleBlur, touched, errors, handleSubmit} = useFormik({
        initialValues: {
         title: unitOldInfo.title,
        },
        validationSchema: moduleaddFormValidations,
        onSubmit,
    })

    return(
        <>
            <main className="px-md-4 wrapper2">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom" style={{marginTop:"-4rem"}}>
                        <h4 style={{marginTop:'2rem', color: '#0d3360'}}>
                            <div className="returnHome2">
                                <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem"}} to='/units' state={{ id:unitOldInfo.module_id, title:unitOldInfo.module_title, module_name:unitOldInfo.module_name }}><span className="home">Accueil</span></Link> <span className="stroke_color">/</span> <span className="add-modulee" style={{fontStyle: 'bold', fontWeight: '550' }}>Modifier l'unité</span></p>
                            </div>
                        </h4>
                    </div>
                    <div class="single-pro-review-area mt-t-30 mg-b-15 mt-25">
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
                                                                    <div><p className="mt-4 mb-4" style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550', margin:"1rem"}}>Modifier l'unité</p></div>
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

                <div style={{marginTop: '9rem'}}></div>
                <div style={{marginTop:"14rem"}} className="space-creater"></div>
                <Footer destination="admin" />
            </main>

        </>
    )
}

export default EditUnitContent;