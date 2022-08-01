import React, { useState, useEffect } from "react";
import Footer from '../../unitsDashboard/components/FooterSection';
import Header from "../../unitsDashboard/components/Header";
import "../admin.css";
import axios from 'axios'
import { API } from "../../config";
import { useNavigate, useLocation } from "react-router-dom";
import {validateRegistration} from '../../utils/inputValidations'

function AddStructureTwoContent() {
    const navigate = useNavigate();

    const location = useLocation();
    const unitId = location.state;

    const unitID = unitId.id;

    const [unitsData, setUnitsData] = useState([]);
    useEffect(() => {
        axios.get(`${API}/unit/unitsdata/${unitID}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
      }, []);

    const [inputs, setInputs] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const handleChange = event => {
        setInputs(inputs=>{return{...inputs, [event.target.name]: event.target.value}})
    }

    const submitUnitData = (unitDataInfo) => {
        axios.put(`${API}/unit/unit/${unitID}`, unitDataInfo)
            .then(res => {
                alert(res)
            })
            .catch(err => {
            })
    }

   var unitsDataContent = [{}]

    const handleSubmit = e =>{
        e.preventDefault();
        // setFormErrors(validateRegistration(inputs))

        {unitsData.map((item) => {
            unitsDataContent = item.unit_content;
          }
        )}

        console.log("xghgjks",unitsDataContent);

        const route = "two";
        const structure_name = "two"
        inputs.route = route;
        inputs.structure_name = structure_name;
        const unit_content = [...unitsDataContent, inputs];

        submitUnitData({
             unit_content,
        });
        navigate('/adminunitcontent', {state: {id:unitID}});
    }

    return (
        <>
            <main className="px-md-4" >
                <Header header_title="Add structure two" />
                <div class="edit-structures single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-payment-inner-st">
                                    <div><p className="mt-3 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Form</p></div>
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
                                                                            <label htmlFor="section_image" style={{marginBottom: "-10px"}} className="FormLable"><p>Select section Image</p></label>
                                                                            <input type="file" name="section_image" value={inputs.section_image} onChange={handleChange} className={`form-control ${formErrors.video_file ? "border-color": ""}`} onchange="document.getElementById('prepend-big-btn').value = this.value;" />
                                                                            <p style={errorMessage}>{formErrors.section_image}</p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="carousel_one_text" style={{marginBottom: "-10px"}} className="FormLable"><p>Carousel one</p></label>
                                                                            <textarea value={inputs.carousel_one_text} onChange={handleChange} type="text" className={`form-control input ${formErrors.carousel_one_text? "border-color": ""}`} placeholder="Enter carousel text" name="carousel_one_text"></textarea>
                                                                            <p style={errorMessage}>{formErrors.carousel_one_text}</p>
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label htmlFor="carousel_two_text" style={{marginBottom: "-10px"}} className="FormLable"><p>Carousel two</p></label>
                                                                            <textarea value={inputs.carousel_two_text} onChange={handleChange} type="text" className={`form-control input ${formErrors.carousel_two_text? "border-color": ""}`} placeholder="Enter carousel text" name="carousel_two_text"></textarea>
                                                                            <p style={errorMessage}>{formErrors.carousel_two_text}</p>
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <input type="file" name="video_file" value={inputs.carousel_one_image} onChange={handleChange} className={`form-control ${formErrors.carousel_one_image ? "border-color": ""}`} onchange="document.getElementById('prepend-big-btn').value = this.value;" />
                                                                            <p style={errorMessage}>{formErrors.carousel_one_image}</p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="carousel_two_text" style={{marginBottom: "-10px"}} className="FormLable"><p>Carousel two</p></label>
                                                                            <textarea value={inputs.carousel_two_text} onChange={handleChange} type="text" className={`form-control input ${formErrors.carousel_two_text? "border-color": ""}`} placeholder="Enter carousel text" name="carousel_two_text"></textarea>
                                                                            <p style={errorMessage}>{formErrors.carousel_two_text}</p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="file" name="carousel_two_image" value={inputs.carousel_two_image} onChange={handleChange} className={`form-control ${formErrors.carousel_two_image ? "border-color": ""}`} onchange="document.getElementById('prepend-big-btn').value = this.value;" />
                                                                            <p style={errorMessage}>{formErrors.carousel_two_image}</p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="carousel_three_text" style={{marginBottom: "-10px"}} className="FormLable"><p>Carousel three</p></label>
                                                                            <textarea value={inputs.carousel_three_text} onChange={handleChange} type="text" className={`form-control input ${formErrors.carousel_three_text? "border-color": ""}`} placeholder="Enter carousel text" name="carousel_three_text"></textarea>
                                                                            <p style={errorMessage}>{formErrors.carousel_three_text}</p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="file" name="carousel_three_image" value={inputs.carousel_three_image} onChange={handleChange} className={`form-control ${formErrors.carousel_three_image ? "border-color": ""}`} onchange="document.getElementById('prepend-big-btn').value = this.value;" />
                                                                            <p style={errorMessage}>{formErrors.carousel_three_image}</p>
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

export default AddStructureTwoContent;
const errorMessage = {
    color:"red",
    fontSize:".8rem",
    marginTop:".5rem"
    };