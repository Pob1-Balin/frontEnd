import React from "react";
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link } from 'react-router-dom';
import {API} from '../../config'
import { useState } from 'react';
import axios from 'axios';

function AddModuleContent(){
    const [values, setValues] = useState({
        userID:'',
        firstName:'',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        image:'',
        hashed_password:'',

        
    })


    // Destructing so as to be able to send to the backend

    const {userID, firstName, lastName, email, phone, country, image, hashed_password} = values;

    const handleChange = event => { 
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const submitModule = (moduleInfo) => {
        // console.log(name, title, serviceID, modID, moduleID)


        // fetch(`${API}/signup`, {
        //     method: "POST",
        //     Headers: {
        //         Accept: 'application/json',
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(moduleInfo)
        // })
        // .then(res=>res.json())
        
        // .catch( err => {
        //     console.log(err)
        // })

        axios.post(`${API}/signup`, moduleInfo)
            .then(res => {
                if (res.status === 200)
                alert('user successfully created')
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
            userID:userID,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            country: country,
            image: image,
            hashed_password: hashed_password,
        })
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
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="Enter module userID" name="userID" value={values.userID}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="Enter module firstName" name="firstName" value={values.firstName}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="lastName" name="lastName" value={values.lastName}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="number" className="form-control" placeholder="email" name="email" value={values.email}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="phone" name="phone" value={values.phone}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="country" name="country" value={values.country}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="image" name="image" value={values.image}/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input onChange={handleChange} type="text" className="form-control" placeholder="hashed_password" name="hashed_password" value={values.hashed_password}/>
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