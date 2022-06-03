import React from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import "../admin.css";
import { Link } from 'react-router-dom';

function AddModuleContent() {

    return (
        <>
            <main className="px-md-4 wrapper2">
                <div style={{ marginTop: '-6rem' }} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <h4 style={{ marginTop: '2rem' }}><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Modules</span></p></h4>
                </div>

                <div className="single-pro-review-area mt-t-30 mg-b-15 mt-40">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-payment-inner-st">
                                    <div><p className="mt-3 mb-4" style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Module</p></div>
                                    <div id="myTabContent" class="tab-content custom-product-edit">
                                        <div class="product-tab-list">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="review-content-section">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="devit-card-custom">

                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control" placeholder="Enter module moduleID" name="moduleID"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input  type="text" className="form-control" placeholder="Enter module name" name="name"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input  type="text" className="form-control" placeholder="title" name="title"  />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input  type="number" className="form-control" placeholder="timePassed" name="timePassed"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input  type="number" className="form-control" placeholder="score" name="score"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input  type="text" className="form-control" placeholder="Country" name="country"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input  type="text" className="form-control" placeholder="image" name="image"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input type="file" className="form-control" onchange="document.getElementById('prepend-big-btn').value = this.value;" />
                                                                    </div>
                                                                    <button style={{ background: '#4ab2cc', color: 'white' }} href="#!" className="btn waves-effect waves-light">Submit</button>
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

export default AddModuleContent;