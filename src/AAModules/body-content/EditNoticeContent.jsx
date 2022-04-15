import React from "react";
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link } from 'react-router-dom';

function EditNoticeContent(){
    return(
        <>
            <main className="px-md-4 wrapper2">
                <div style={{marginTop: '-5rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 style={{marginTop:'2rem'}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Edit Legal Notice</span></p></h4>
                </div>

                    <div class="single-pro-review-area mt-t-30 mg-b-15 mt-40">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{fontSize:'1.3rem', fontStyle:'bold', fontWeight:'550'}}>Edit Legal Notice</p></div>
                                        <div id="myTabContent" class="tab-content custom-product-edit">
                                            <div class="product-tab-list">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="review-content-section">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div class="devit-card-custom">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" placeholder="Edit informations légales"/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input type="number" class="form-control" placeholder="Edit telephone number"/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input type="password" class="form-control" placeholder="Edit email"/>
                                                                        </div>
                                                                        <a style={{background:'#4ab2cc', color:'white'}} href="#!" class="btn waves-effect waves-light">Submit</a>
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
                <Footer />
            </main>

        </>
    )
}

export default EditNoticeContent;