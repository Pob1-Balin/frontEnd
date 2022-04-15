import React from "react";
import "../admin.css";
import Footer from '../components/Footer'

function AddClientsContent(){
    return(
        <>
            <main className="px-md-4 wrapper2">
                    <div class="single-pro-review-area mt-t-30 mg-b-15 add-clients-page">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{fontSize:'1.3rem', color:'gray', fontStyle:'bold', fontWeight:'550'}}>Add Clients</p></div>
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
                
               <div className="add-clients-footer"><Footer/></div>
            </main>

        </>
    )
}

export default AddClientsContent;