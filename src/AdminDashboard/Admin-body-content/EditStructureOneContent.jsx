import React from "react";
import Footer from '../../unitsDashboard/components/FooterSection';
import Header from "../../unitsDashboard/components/Header";
import "../admin.css";
function EditStructureOneContent() {


    return (
        <>
            <main className="px-md-4" >
                <Header header_title="Edit structure One" />
                <div class="edit-structures single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-payment-inner-st">
                                    <div><p className="mt-3 mb-4" style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Edit Form</p></div>
                                    <div id="myTabContent" class="tab-content custom-product-edit">
                                        <div class="product-tab-list">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="review-content-section">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div class="devit-card-custom">
                                                                    <div className="form-group">
                                                                        <input  type="text" className="form-control" placeholder="Enter Title" name="title"/>
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

                <div style={{marginLeft:"-2rem", marginRight:"-2rem"}}><Footer destination="admin" /></div>
            </main>

        </>
    )
}

export default EditStructureOneContent;


