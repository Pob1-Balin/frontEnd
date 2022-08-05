import React, { useState} from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import "../admin.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config'

function EditUnitContent(){
    const location = useLocation()
    var unitOldInfo = location.state
    console.log("ygyg",unitOldInfo)
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: unitOldInfo.title,
        image: "",
    })
    // Destructing so as to be able to send to the backend
    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const [image, setImage] = useState('')
    const handleImage = (event)=>{
        var img = event.target.files[0]
        setImage(img)
        setValues({...values, 'image': img.name})
    }

    const id = unitOldInfo.id;
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
            //   console.log(res)
            }).catch(err=>{
            //   console.log(err)
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const { title, image} = values;
        
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
        sessionStorage.setItem('name', 'success');
        navigate('/units', {state:{id:unitOldInfo.module_id, title:unitOldInfo.module_title, module_name:unitOldInfo.module_name}});
    }

    return(
        <>
            <main className="px-md-4 wrapper2">
                <div className="add-module d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 style={{marginTop:'2rem'}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/units'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="add-modulee" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Edit Unites</span></p></h4>
                </div>

                    <div class="single-pro-review-area mt-t-30 mg-b-15 mt-25">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Edit Unite</p></div>
                                        <div id="myTabContent" class="tab-content custom-product-edit">
                                            <div class="product-tab-list">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="review-content-section">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div class="devit-card-custom">
                                                                    <form onSubmit={handleSubmit}>
                                                                        <div className="form-group">
                                                                            <label htmlFor='title' style={{marginBottom: "-12px"}} className="FormLable"><p>Title</p></label>
                                                                            <input type="text" className="form-control input" placeholder="Enter module title" name="title" value={values.title} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='image' style={{marginBottom: "-12px"}} className="FormLable"><p>Image</p></label>
                                                                            <input type="file" className="form-control"  placeholder="Select module image" name="image"  onChange={handleImage} accept=".png, .jpg, .jpeg" />
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

                <div style={{marginTop: '3.9rem'}}></div>
                <div style={{marginTop:"14rem"}} className="space-creater"></div>
                <Footer destination="admin" />
            </main>

        </>
    )
}

export default EditUnitContent;