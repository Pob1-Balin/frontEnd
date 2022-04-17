import React from "react";
import "../admin.css";
import Footer from '../components/Footer'

function EditServiceContent(){
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
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
                                                <li style={{fontSize:'1rem', color:'gray'}}><span class="bread-blod">Add Clients</span></li>
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
                                        <div><p className="mt-3 mb-4" style={{fontSize:'1.3rem', color:'gray', fontStyle:'bold', fontWeight:'550'}}>Add Client</p></div>
                                        <div id="myTabContent" class="tab-content custom-product-edit">
                                            <div class="product-tab-list">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="review-content-section">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div class="devit-card-custom">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control"/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input type="number" class="form-control"/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input type="password" class="form-control"/>
                                                                        </div>
                                                                        <button class="mt-15 btn waves-effect waves-light pd-setting btn-info">Submit</button>
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

                <div style={{marginTop: '3rem'}}></div>
                
               <div className="add-clients-footer"><Footer/></div>
            </main>

        </>
    )
}

export default EditServiceContent;