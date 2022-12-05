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

    const [image, setImage] = useState('')
    const handleImage = (event)=>{
        var img = event.target.files[0]
        setImage(img)
        setInputs({...inputs, 'section_image': img.name})
    }

    const [image1, setImage1] = useState('')
    const handleImage1 = (event)=>{
        var img1 = event.target.files[0]
        setImage1(img1)
        setInputs({...inputs, 'carousel_one_image': img1.name})
    }


    const [image2, setImage2] = useState('')
    const handleImage2 = (event)=>{
        var img2 = event.target.files[0]
        setImage2(img2)
        setInputs({...inputs, 'carousel_two_image': img2.name})
    }


    const [image3, setImage3] = useState('')
    const handleImage3 = (event)=>{
        var img3 = event.target.files[0]
        setImage3(img3)
        setInputs({...inputs, 'carousel_three_image': img3.name})
    }


    const submitUnitData = (unitDataInfo) => {

        /// sending post request to upload file
        const formData = new FormData()
        formData.append('myFile', image)
        axios.post(`${API}/upload`, formData, {
            headers:{
                "content-tupe": "multipart/form-data"
            }
        }).then(res=>{
        }).catch(err=>{
        })

        const formData1 = new FormData()
        formData1.append('myFile', image1)
        axios.post(`${API}/upload`, formData1, {
            headers:{
                "content-tupe": "multipart/form-data"
            }
        }).then(res=>{
        }).catch(err=>{
        })

        const formData2 = new FormData()
        formData2.append('myFile', image2)
        axios.post(`${API}/upload`, formData2, {
            headers:{
                "content-tupe": "multipart/form-data"
            }
        }).then(res=>{
        }).catch(err=>{
        })

        const formData3 = new FormData()
        formData3.append('myFile', image3)
        axios.post(`${API}/upload`, formData3, {
            headers:{
                "content-tupe": "multipart/form-data"
            }
        }).then(res=>{
        }).catch(err=>{
        })

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
                                                                            <input value={inputs.sidebar_name} onChange={handleChange} type="text" className={`form-control input ${formErrors.page_name? "border-color": ""}`} placeholder="Enter page name" name="sidebar_name"/>
                                                                            <p style={errorMessage}>{formErrors.page_name}</p>
                                                                        </div>
                                                                       <div style={{marginTop:"1rem"}} className="form-group">
                                                                            <label htmlFor="page_title" style={{marginBottom: "-10px"}} className="FormLable"><p>Page Title</p></label>
                                                                            <input value={inputs.page_title} onChange={handleChange} type="text" className={`form-control input ${formErrors.page_title? "border-color": ""}`} placeholder="Enter page title" name="page_title"/>
                                                                            <p style={errorMessage}>{formErrors.page_title}</p>
                                                                        </div>
                                                                        <div style={{marginTop:"1rem"}} className="form-group">
                                                                            <label htmlFor="section_image" style={{marginBottom: "-10px"}} className="FormLable"><p>Select section Image</p></label>
                                                                            <input type="file" className="form-control"  placeholder="Select section image" name="section_image"  onChange={handleImage} accept=".png, .jpg, .jpeg"/>
                                                                            <p style={errorMessage}>{formErrors.section_image}</p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="carousel_one_text" style={{marginBottom: "-10px"}} className="FormLable"><p>Carousel one</p></label>
                                                                            <textarea value={inputs.carousel_one_text} onChange={handleChange} type="text" className={`form-control input ${formErrors.carousel_one_text? "border-color": ""}`} placeholder="Enter carousel text" name="carousel_one_text"></textarea>
                                                                            <p style={errorMessage}>{formErrors.carousel_one_text}</p>
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <input type="file" className="form-control"  placeholder="carousel_one_image" name="image"  onChange={handleImage1} accept=".png, .jpg, .jpeg"/>
                                                                            <p style={errorMessage}>{formErrors.carousel_one_image}</p>
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label htmlFor="carousel_two_text" style={{marginBottom: "-10px"}} className="FormLable"><p>Carousel two</p></label>
                                                                            <textarea value={inputs.carousel_two_text} onChange={handleChange} type="text" className={`form-control input ${formErrors.carousel_two_text? "border-color": ""}`} placeholder="Enter carousel text" name="carousel_two_text"></textarea>
                                                                            <p style={errorMessage}>{formErrors.carousel_two_text}</p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="file" className="form-control"  placeholder="carousel_two_image" name="image"  onChange={handleImage2} accept=".png, .jpg, .jpeg"/>
                                                                            <p style={errorMessage}>{formErrors.carousel_two_image}</p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="carousel_three_text" style={{marginBottom: "-10px"}} className="FormLable"><p>Carousel three</p></label>
                                                                            <textarea value={inputs.carousel_three_text} onChange={handleChange} type="text" className={`form-control input ${formErrors.carousel_three_text? "border-color": ""}`} placeholder="Enter carousel text" name="carousel_three_text"></textarea>
                                                                            <p style={errorMessage}>{formErrors.carousel_three_text}</p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="file" className="form-control"  placeholder="carousel_three_image" name="image"  onChange={handleImage3} accept=".png, .jpg, .jpeg"/>
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