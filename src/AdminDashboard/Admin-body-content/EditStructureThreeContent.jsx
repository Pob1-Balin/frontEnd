import React, { useState } from "react";
import Footer from '../../unitsDashboard/components/FooterSection';
import Header from "../../unitsDashboard/components/Header";
import "../admin.css";
import axios from 'axios'
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
import {validateRegistration} from '../../utils/inputValidations'
function EditStructureThreeContent() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({page_name:"", page_title:"", text_heading:"", section_text:""})
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = event => {
        setInputs(inputs=>{return{...inputs, [event.target.name]: event.target.value}})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setFormErrors(validateRegistration(inputs));
        setIsSubmit(true);
    }

    return (
        <>
            <main className="px-md-4" >
                <Header header_title="Edit structure three" />
                <div class="edit-structures single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-payment-inner-st">
                                    <div><p className="mt-3 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Edit Form</p></div>
                                    <div id="myTabContent" class="tab-content custom-product-edit">
                                        <div class="product-tab-list">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="review-content-section">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div class="devit-card-custom">
                                                                <form onSubmit={handleSubmit}>
                                                                    <div className="form-group">
                                                                        <label htmlFor="page_name" style={{marginBottom: "-10px"}} className="FormLable"><p>Page Name</p></label>
                                                                        <input value={inputs.page_name} onChange={handleChange} type="text" className={`form-control input ${formErrors.page_name? "border-color": ""}`} placeholder="Enter page name" name="page_name"/>
                                                                        <p style={errorMessage}>{formErrors.page_name}</p>
                                                                    </div>
                                                                    <div style={{marginTop:"1rem"}} className="form-group">
                                                                        <label htmlFor="page_title" style={{marginBottom: "-10px"}} className="FormLable"><p>Page Title</p></label>
                                                                        <input value={inputs.page_title} onChange={handleChange} type="text" className={`form-control input ${formErrors.page_title? "border-color": ""}`} placeholder="Enter page title" name="page_title"/>
                                                                        <p style={errorMessage}>{formErrors.page_title}</p>
                                                                    </div>
                                                                    <div style={{marginTop:"1rem"}} className="form-group">
                                                                        <label htmlFor="text_heading" style={{marginBottom: "-10px"}} className="FormLable"><p>Text Heading</p></label>
                                                                        <input value={inputs.text_heading} onChange={handleChange} type="text" className={`form-control input ${formErrors.text_heading? "border-color": ""}`} placeholder="Enter text heading" name="text_heading"/>
                                                                        <p style={errorMessage}>{formErrors.text_heading}</p>
                                                                    </div>
                                                                    <div style={{marginTop:"1rem"}} className="form-group">
                                                                        <label htmlFor="section_text" style={{marginBottom: "-10px"}} className="FormLable"><p>Text</p></label>
                                                                        <textarea value={inputs.section_text} onChange={handleChange} type="text" className={`form-control input ${formErrors.section_text? "border-color": ""}`} placeholder="Enter page title" name="section_text"></textarea>
                                                                        <p style={errorMessage}>{formErrors.section_text}</p>
                                                                    </div>
                                                                    <button type="submit" style={{ background: '#4ab2cc', color: 'white', border:"none", marginTop:".4rem"}} className="add-service save-unit btn waves-effect waves-light">Save content</button>
                                                                </form>
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

                <div style={{marginLeft:"-2rem", marginRight:"-2rem"}}><Footer footer_text="Units content" destination="admin" /></div>
            </main>

        </>
    )
}

export default EditStructureThreeContent;
const errorMessage = {
    color:"red",
    fontSize:".8rem",
    marginTop:".5rem"
};


