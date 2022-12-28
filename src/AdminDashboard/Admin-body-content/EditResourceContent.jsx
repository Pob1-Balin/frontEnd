import React, { useEffect, useState } from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import "../admin.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { API } from '../../config'
import { editcourseResourceFormValidations } from "../../utils/inputValidations"
import { useFormik } from 'formik';
import axios from 'axios';

function EditResourceContent() {
    const location = useLocation();
    const navigate = useNavigate();
    const service = location.state;
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const [fileNames, setFileNames] = useState({
        resource_image: '', resource_file: '',
    })
    const [file, setFile] = useState({
        resource_image: '', resource_file: '',
    })

    const handleFile = event => {
        var fil = event.target.files[0]
        setFile({
            ...file, [event.target.name]: fil
        })
        setFileNames({
            ...fileNames, [event.target.name]: fil.name
        })
    }

    const onSubmit = (values, actions) => {

        const submitService = (serviceInfo) => {
            // sending post request to upload file
            const formData = new FormData()
            formData.append('myFile', file.resource_image)
            axios.post(`${API}/upload`, formData, {
                headers:{
                    "content-tupe": "multipart/form-data"
                }
            }).then(res=>{
            }).catch(err=>{
            })

            const formData2 = new FormData()
            formData2.append('myFile', file.resource_file)
            axios.post(`${API}/upload`, formData2, {
                headers:{
                    "content-tupe": "multipart/form-data"
                }
            }).then(res=>{
            }).catch(err=>{
            })

            ///////////
            axios.put(`${API}/service/update/${service.service_id}`, serviceInfo)
            .then(res => {
            })
            .catch(err => {
            })
        }

        const resourceDescription = (serviceInfo) => {
            axios.put(`${API}/service/update/${service.service_id}`, serviceInfo)
            .then(res => {
            })
            .catch(err => {
            })
        }

        const resourceImage = (serviceInfo) => {
            // sending post request to upload file
            const formData = new FormData()
            formData.append('myFile', file.resource_image)
            axios.post(`${API}/upload`, formData, {
                headers:{
                    "content-tupe": "multipart/form-data"
                }
            }).then(res=>{
            }).catch(err=>{
            })

            ///////////
            axios.put(`${API}/service/update/${service.service_id}`, serviceInfo)
            .then(res => {
            })
            .catch(err => {
            })
        }

        const resourceFile = (serviceInfo) => {
            // sending post request to upload file
            const formData = new FormData()
            formData.append('myFile', file.resource_file)
            axios.post(`${API}/upload`, formData, {
                headers:{
                    "content-tupe": "multipart/form-data"
                }
            }).then(res=>{
            }).catch(err=>{
            })

            ///////////
            axios.put(`${API}/service/update/${service.service_id}`, serviceInfo)
            .then(res => {
            })
            .catch(err => {
            })
        }
        
        const { resource_description } = values;
        const resource_image = fileNames.resource_image;
        const resource_file = fileNames.resource_file;

        if(resource_image != '' && resource_file != ''){
            submitService({
                resource_description,
                resource_image,
                resource_file,
            });
        }else{
            if(resource_image == '' && resource_file == ''){
                resourceDescription({
                    resource_description,
                });
            }
            if(resource_image == '' && resource_file != ''){
                resourceFile({
                    resource_description,
                    resource_file,
                });
            }
            if(resource_image != '' && resource_file == ''){
                resourceImage({
                    resource_description,
                    resource_image,
                });
            }
        }

        localStorage.removeItem("refreshresource")
        localStorage.setItem('refreshresource', JSON.stringify("true"));
        navigate('/adminresource');
    };


    const { values, handleChange, handleBlur, touched, errors, handleSubmit} = useFormik({
        initialValues: {
            resource_description: service.description,
        },
        validationSchema: editcourseResourceFormValidations,
        onSubmit,
      })
    return (
        <>
            <main className="px-md-4 wrapper2">
                <div style={{ marginTop: '-6rem' }} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4 style={{ marginTop: '2rem', color:"#0d3360"}}>
                        <div className="returnHome2">
                            <p><Link className="return-home" style={{ textDecoration: 'none', marginLeft:"0rem"}} to='/adminresource'><span className="home">Accueil</span></Link> <span className="stroke_color">/</span> <span style={{ fontSize: '1.3rem', fontStyle: 'bold', fontWeight: '550' }}>Modifier la ressource de service</span></p>
                        </div>
                    </h4>
                </div>
                <div class="single-pro-review-area mt-t-30 mg-b-15 mt-40">
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
                                                                    <div><p className="mt-3 mb-4" style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550', margin:"1rem"}}>Modifier la ressource de service</p></div>
                                                                    <form onSubmit={handleSubmit} style={{margin:"1rem"}}>
                                                                        <div className="form-group">
                                                                            <label htmlFor='resource_description' style={{marginBottom: "-7px"}} className="FormLable"><p>Description de la ressource *</p></label>
                                                                            <input type="text" className={`form-control input ${errors.resource_description && touched.resource_description && 'form-control2 border-color'}`} placeholder="Entrez la description de la ressource de cours" name="resource_description" value={values.resource_description} onChange={handleChange} onBlur={handleBlur}/>
                                                                            <span className='error' style={{fontSize:"1rem"}}>{errors.resource_description && touched.resource_description ? errors.resource_description : ''}</span>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='resource_image' style={{marginBottom: "-7px"}} className="FormLable"><p>Image de la ressource *</p></label>
                                                                            <input type="file" className={`form-control`} name="resource_image" onChange={handleFile} accept=".png, .jpg, .jpeg"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='resource_file' style={{marginBottom: "-7px"}} className="FormLable"><p>Ressource pdf ou fichier .zip *</p></label>
                                                                            <input type="file" className={`form-control`} name="resource_file" onChange={handleFile} accept=".pdf, .zip"/>
                                                                        </div>

                                                                        <button type="submit" style={{ background: '#4ab2cc', color: 'white'}} className="add-service btn waves-effect waves-light">Envoyer</button>
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

                <div style={{ marginTop: '3.9rem' }}></div>
                <Footer destination="admin" />
            </main>

        </>
    )
}

export default EditResourceContent;