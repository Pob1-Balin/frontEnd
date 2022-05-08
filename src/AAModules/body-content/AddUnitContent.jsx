import React, { useState } from "react";
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link } from 'react-router-dom';

function AddUnitContent(){

    return(
        <>
            <main className="px-md-4 wrapper2">
                <div style={{marginTop: '-5rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 style={{marginTop:'2rem'}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Add Unites</span></p></h4>
                </div>
                <form encType="multipart/form-data">
                    <div class="single-pro-review-area mt-t-30 mg-b-15 mt-40">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{fontSize:'1.3rem', fontStyle:'bold', fontWeight:'550'}}>Add Unites</p></div>
                                        <div id="myTabContent" class="tab-content custom-product-edit">
                                            <div class="product-tab-list">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="review-content-section">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div class="devit-card-custom">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" placeholder="Enter unite name"/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" placeholder="Enter unite title"/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                             <input type="file" fileName="" class="form-control" onchange="document.getElementById('prepend-big-btn').value = this.value;" />
                                                                        </div>
                                                                        <button class="btn waves-effect waves-light pd-setting btn-info">Submit</button>
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

                <div style={{marginTop: '3.9rem'}}></div>
                <Footer />
            </main>

        </>
    )
}

export default AddUnitContent;