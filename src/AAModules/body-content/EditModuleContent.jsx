import React from "react";
import Footer from '../components/Footer';
import "../AdminApp.css";
import {API} from '../../config'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function EditModuleContent(){
    const location = useLocation()
    var modOldInfo = location.state
    console.log(modOldInfo)
    const navigate = useNavigate();

    const [values, setValues] = useState({
        
        moduleID: modOldInfo.modulID,
        name: modOldInfo.module_name,
        title: modOldInfo.title,
        timePassed: modOldInfo.timePassed,
        score: modOldInfo.score,
        country: modOldInfo.country,
        image: modOldInfo.image,
    })


    // Destructing so as to be able to send to the backend


    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const id = modOldInfo.id;
    const submitModule = (moduleInfo) => {
            axios.put(`${API}/modulupdate/${id}`, moduleInfo)
            .then(res => {
                alert(res)
                // if (res.status === 200)
                // alert('service successfully added')
                // else
                // Promise.reject()
            })
            .catch(err => {
                alert('Something went wrong')
                console.log(err)
            })

        }

    const clickSubmit = (event)=>{
        event.preventDefault();
        const {moduleID, name, title, timePassed, score,country, image} = values;
        submitModule({
            moduleID,
            name,
            title,
            timePassed,
            score,
            country,
            image,
        });
        sessionStorage.setItem('name', 'success');
        navigate('/adminmodulepage');
    }

  

    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages ml-3">
                 <div class="breadcome-area clients-breadcome-area servicee">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="breadcome-list single-page-breadcome">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="breadcome-heading">
                                                <form role="search" class="sr-input-func">
                                                <input type="text" placeholder="Search..." class="search-int col-xs-12 form-control mobile-menu-search"/>
                                                    <a href="#"><i class="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul class="breadcome-menu">
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span class="bread-blod">Edit Services</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                    <div class="single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{fontSize:'1.3rem', color:'gray', fontStyle:'bold', fontWeight:'550'}}>Edit Module Data</p></div>
                                        <div id="myTabContent" class="tab-content custom-product-edit">
                                            <div class="product-tab-list">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="review-content-section">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div class="devit-card-custom">
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
                <div style={{marginTop: '7rem'}}></div>
                
               <div className="add-clients-footer"><Footer/></div>
            </main>

        </>
    )
}

export default EditModuleContent;