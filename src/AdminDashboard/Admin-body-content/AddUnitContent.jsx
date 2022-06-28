import React from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import "../admin.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { API } from '../../config'
import { useState } from 'react';
import axios from 'axios';

function AddUnitContent() {
    const location = useLocation();
    const modID  = location.state
    console.log('hellloooo')
    console.log(location.state)

    const navigate = useNavigate();
    const [units, setUnits] = useState({
        unitID: '',
        moduleID: modID,
        name: '',
        title: '',
        timePassed: '',
        score: '',
        image: '',
    })

    const { unitID, moduleID, name, title, timePassed, score, image } = units;

    const handleChange = event => {
        setUnits(
            {
                ...units,
                [event.target.name]: event.target.value
            }
        )
    }

    const submitUnit = (unitInfo) => {
        axios.post(`${API}/saveunit`, unitInfo).then(
            res=>{
                if(res.status === 200){
                    alert('unit Added successfull');
                }else{
                    Promise.reject()
                }
            }
        ).catch(
            err =>{
                alert('Failed to add unit');
                console.log(err)
            }
        )
    }

    const clickSubmit = (event)=>{
        event.preventDefault();
        submitUnit({
            unitID: unitID,
            moduleID: moduleID,
            name: name,
            title: title,
            timePassed:timePassed,
            score:score,
            image:image
        })
        navigate('/units');
    }

    return (
        <>
            <main className="px-md-4 wrapper2">
                <div style={{ marginTop: '-6rem' }} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4 style={{ marginTop: '2rem' }}><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/units'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Unites</span></p></h4>
                </div>
                <form encType="multipart/form-data">
                    <div class="single-pro-review-area mt-t-30 mg-b-15 mt-40">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Unites</p></div>
                                        <div id="myTabContent" class="tab-content custom-product-edit">
                                            <div class="product-tab-list">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="review-content-section">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div class="devit-card-custom">

                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="unitId" name="unitID" value={units.unitID} />
                                                                    </div>
                                                                    {/* <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="Enter module moduleID" name="moduleID" value={units.moduleID} />
                                                                    </div> */}
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="Enter module name" name="name" value={units.name} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="title" name="title" value={units.title} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="number" className="form-control" placeholder="timePassed" name="timePassed" value={units.timePassed} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input onChange={handleChange} type="number" className="form-control" placeholder="score" name="score" value={units.score} />
                                                                    </div>
                                                                        <div class="form-group">
                                                                             <input type="file" class="form-control" onchange="document.getElementById('prepend-big-btn').value = this.value;"/>
                                                                        </div>
                                                                    <button onClick={clickSubmit} style={{ background: '#4ab2cc', color: 'white' }} href="#!" className="btn waves-effect waves-light">Submit</button>
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

                </form>

                {JSON.stringify(units)}
                <div style={{ marginTop: '3.9rem' }}></div>
                <Footer destination="admin" />
            </main>

        </>
    )
}

export default AddUnitContent;