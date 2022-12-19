import React, { useState, useEffect } from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { API } from '../../config'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { addcourseFormValidations } from "../../utils/inputValidations"
import { useFormik } from 'formik';
import SearchBar from "../components/SearchBar";

function AddServiceContent() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const navigate = useNavigate();
    // const [imageName, setImageName] = useState('')
    // const [image, setImage] = useState('')
    // const handleImage = (event)=>{
    //     var img = event.target.files[0]
    //     setImage(img)
    //     setImageName(img.name)
    // }


    const [fileNames, setFileNames] = useState({
        image: '', resource_image: '', resource_file: '',
    })
    const [file, setFile] = useState({
        image: '', resource_image: '', resource_file: '',
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
            formData.append('myFile', file.image)
            axios.post(`${API}/upload`, formData, {
                headers:{
                    "content-tupe": "multipart/form-data"
                }
            }).then(res=>{
            }).catch(err=>{
            })

            const formData2 = new FormData()
            formData2.append('myFile', file.resource_image)
            axios.post(`${API}/upload`, formData2, {
                headers:{
                    "content-tupe": "multipart/form-data"
                }
            }).then(res=>{
            }).catch(err=>{
            })

            const formData3 = new FormData()
            formData3.append('myFile', file.resource_file)
            axios.post(`${API}/upload`, formData3, {
                headers:{
                    "content-tupe": "multipart/form-data"
                }
            }).then(res=>{
            }).catch(err=>{
            })

   
            ///////////
           axios.post(`${API}/service/create`, serviceInfo)
               .then(res => {
               })
               .catch(err => {
               })
        }

        const { name, description, amount, resource_description} = values;
        const image = fileNames.image;
        const resource_image = fileNames.resource_image;
        const resource_file = fileNames.resource_file;

        submitService({
            name,
            description,
            amount,
            image,
            resource_description,
            resource_image,
            resource_file,
        });
        localStorage.setItem('refreshservice', JSON.stringify("true"));
        navigate('/services');
    };

    const { values, handleChange, handleBlur, touched, errors, handleSubmit} = useFormik({
        initialValues: {
            name: "", description: '', amount: '', resource_description: '',
        },
        validationSchema: addcourseFormValidations,
        onSubmit,
      })

        return (
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                <SearchBar location="Ajouter des cours"/>
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
                                                                        <div><p className="mt-4 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550', margin:"1rem"}}>Ajouter des cours</p></div>
                                                                        <form onSubmit={handleSubmit} style={{margin:"1rem"}}>
                                                                            <div className="addCourseInfo"><p>Informations sur les cours</p></div>
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
                                                                                <input type="file" className={`form-control`} name="image" onChange={handleFile} accept=".png, .jpg, .jpeg" required/>
                                                                            </div>

                                                                            <div className="addCourseInfo" style={{marginTop:"1.5rem"}}><p>Informations sur les ressources du cours</p></div>

                                                                            <div className="form-group">
                                                                                <label htmlFor='resource_description' style={{marginBottom: "-7px"}} className="FormLable"><p>Description de la ressource *</p></label>
                                                                                <input type="text" className={`form-control input ${errors.resource_description && touched.resource_description && 'form-control2 border-color'}`} placeholder="Entrez la description de la ressource de cours" name="resource_description" value={values.resource_description} onChange={handleChange} onBlur={handleBlur}/>
                                                                                <span className='error' style={{fontSize:"1rem"}}>{errors.resource_description && touched.resource_description ? errors.resource_description : ''}</span>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor='resource_image' style={{marginBottom: "-7px"}} className="FormLable"><p>Image de la ressource *</p></label>
                                                                                <input type="file" className={`form-control`} name="resource_image" onChange={handleFile} accept=".png, .jpg, .jpeg" required/>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor='resource_file' style={{marginBottom: "-7px"}} className="FormLable"><p>Ressource pdf ou fichier .zip *</p></label>
                                                                                <input type="file" className={`form-control`} name="resource_file" onChange={handleFile} accept=".pdf, .zip" required/>
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

                <div style={{ marginTop: '7rem' }}></div>
                <div className="add-clients-footer"><Footer /></div>
            </main>

        </>
    )
}

export default AddServiceContent;
