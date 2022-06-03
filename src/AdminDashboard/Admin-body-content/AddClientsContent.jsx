import React from "react";
import "../admin.css";
import Footer from '../components/Footer'

function AddClientsContent(){
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                 <div className="breadcome-area clients-breadcome-area servicee">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="breadcome-list single-page-breadcome">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="breadcome-heading">
                                                <form role="search" className="sr-input-func">
                                                <input type="text" placeholder="Search..." className="search-int col-xs-12 form-control mobile-menu-search"/>
                                                    <a href="#"><i className="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul className="breadcome-menu">
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span className="bread-blod">Add Clients</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService">
                     <div className="container-fluid">
                             <div className="row">
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product-payment-inner-st">
                                        <div><p className="mt-3 mb-4" style={{fontSize:'1.3rem', color:'gray', fontStyle:'bold', fontWeight:'550'}}>Add Client</p></div>
                                        <div id="myTabContent" className="tab-content custom-product-edit">
                                            <div className="product-tab-list">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="review-content-section">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="devit-card-custom">
                                                                        <div className="form-group">
                                                                             <input type="text" className="form-control"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                             <input type="number" className="form-control"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                             <input type="" className="form-control"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                             <input type="number" className="form-control"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                             <input type="" className="form-control"/>
                                                                        </div>
                                                                        <button className="mt-15 btn waves-effect waves-light pd-setting btn-info">Submit</button>
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

export default AddClientsContent;