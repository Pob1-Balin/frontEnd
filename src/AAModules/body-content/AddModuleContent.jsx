import React from "react";
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link, useNavigate } from 'react-router-dom';
import {API} from '../../config'
import { useState } from 'react';
import axios from 'axios';

function AddModuleContent(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
        moduleID:'',
        name:'',
        title: '',
        timePassed: '',
        score: '',
        country: '',
        image:'',
        hashed_password:'', 
    })


    // Destructing so as to be able to send to the backend

    const {moduleID, name, title, timePassed, score, image} = values;

    const handleChange = event => { 
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const submitModule = (moduleInfo) => {
        

        axios.post(`${API}/modul`, moduleInfo)
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

    const clickSubmit = (event)=>{
        event.preventDefault();
        submitModule({
            moduleID:moduleID,
            name: name,
            title: title,
            timePassed: timePassed,
            score: score,
            image: image
        })
        navigate('/adminmodulepage');
    }
    return(
        <>
            <main className="px-md-4 wrapper2">
                <div style={{marginTop: '-5rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 style={{marginTop:'2rem'}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Add Modules</span></p></h4>
                </div>

                    <div className="single-pro-review-area mt-t-30 mg-b-15 mt-40">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{fontSize:'1.3rem', fontStyle:'bold', fontWeight:'550'}}>Add Module</p></div>
                                        <div id="myTabContent" class="tab-content custom-product-edit">
                                            <div class="product-tab-list">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="review-content-section">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="devit-card-custom">
                                                                        
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="Enter module moduleID" name="moduleID" value={values.moduleID}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="Enter module name" name="name" value={values.name}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="title" name="title" value={values.title}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="number" className="form-control" placeholder="timePassed" name="timePassed" value={values.timePassed}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="number" className="form-control" placeholder="score" name="score" value={values.score}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                                <input onChange={handleChange} type="text" className="form-control" placeholder="Country" name="country" value={values.country}/>
                                                                            </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="image" name="image" value={values.image}/>
                                                                        </div>
                                                                        <button onClick={clickSubmit} style={{background:'#4ab2cc', color:'white'}} href="#!" className="btn waves-effect waves-light">Submit</button>
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

                <div style={{marginTop: '3.9rem'}}></div>
                <Footer />
            </main>

        </>
    )
}

export default AddModuleContent;