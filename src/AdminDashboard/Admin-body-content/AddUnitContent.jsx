import React, { useEffect, useState} from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import "../admin.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config'

function AddUnitContent() {
    const location = useLocation()
    const moduleInfo = location.state

    const title = moduleInfo.title
    const module_name = moduleInfo.module_name
    const navigate = useNavigate();
    const [values, setValues] = useState({
       module_id: moduleInfo.id,
       title: '',
       image: '',
       questions_time: 'false'
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

    const submitModule = (unitInfo) => {

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

          ///////////
        axios.post(`${API}/unit/unit`, unitInfo)
            .then(res => {
            })
            .catch(err => {
                //  alert('Something went wrong, course could not be added')
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { module_id, unit_name, title, image, questions_time } = values;

        console.log("auhau auhau", unit_name)
        submitModule({
            module_id,
            title,
            image,
            questions_time
        });
        navigate('/units', {state:{id:module_id, title: moduleInfo.title, module_name: moduleInfo.module_name}});
    }


    return (
        <>
            <main className="px-md-4 wrapper2">
                <div className="add-module d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <h4><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="add-modulee" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Unit</span></p></h4>
                </div>

                <div className="single-pro-review-area mt-t-30 mg-b-15 mt-25">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-payment-inner-st">
                                    <div><p className="mt-3 mb-4" style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Unit</p></div>
                                    <div id="myTabContent" class="tab-content custom-product-edit">
                                        <div class="product-tab-list">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="review-content-section">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="devit-card-custom">
                                                                     <form onSubmit={handleSubmit}>
                                                                        {/* <input type="hiden" className="form-control" placeholder="Enter module name" name="name" value={number_of_modules} onChange={handleChange} /> */}
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
                <div style={{ marginTop: '3.9rem' }}></div>
                <div style={{marginTop:"14rem"}} className="space-creater"></div>
                <Footer destination="admin" />
            </main>

        </>
    )
}

export default AddUnitContent;