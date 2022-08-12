import React, { useState, useEffect } from "react";
import Footer from '../../unitsDashboard/components/FooterSection';
import Header from "../../unitsDashboard/components/Header";
import "../admin.css";
import axios from 'axios'
import { API } from "../../config";
import { useNavigate, useLocation } from "react-router-dom";
import {validateRegistration} from '../../utils/inputValidations'
function EditStructureOneContent() {
    const navigate = useNavigate();

    const location = useLocation();
    const units_content = location.state;

    const [unitsData, setUnitsData] = useState([]);
    useEffect(() => {
        axios.get(`${API}/unit/unitsdata/${units_content.id}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
      }, []);

      var old_video = "";
      {unitsData.map((item) => {
             old_video = item.unit_content[units_content.index].video;
         }
      )}

    const [inputs, setInputs] = useState({
        sidebar_name: units_content.content.sidebar_name,
        page_title: units_content.content.page_title,
        video: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const handleChange = event => {
        setInputs(inputs=>{return{...inputs, [event.target.name]: event.target.value}})
    }

    const [video, setVideo] = useState('')
    const handleVideo = (event)=>{
        var vid = event.target.files[0];
        setVideo(vid);
        setInputs({...inputs, 'video': vid.name});
    }


    const submitUnitData = (unitDataInfo) => {
        /// sending post request to upload file
        const formData = new FormData()
        formData.append('myFile', video)

        axios.post(`${API}/uploadVideo`, formData, {
            headers:{
                "content-tupe": "multipart/form-data"
            }
        }).then(res=>{
        }).catch(err=>{
        })

        //////////
        axios.put(`${API}/unit/unit/${units_content.id}`, unitDataInfo)
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
        const route = "one";
        const structure_name = "one"
        inputs.route = route;
        inputs.structure_name = structure_name;
        if(inputs.video == ""){
            inputs.video = old_video;
        }
        unitsDataContent[units_content.index] = inputs;
        const unit_content = unitsDataContent;
        console.log("tfety", unitsDataContent[units_content.index].video)
        submitUnitData({
            unit_content,
        });
        navigate('/adminunitcontent', {state: {id:units_content.id}});
    }


    return (
        <>
            <main className="px-md-4" >
                <Header header_title="Edit structure One" />
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
                                                                        <input value={inputs.sidebar_name} onChange={handleChange} type="text" className={`form-control input ${formErrors.page_name? "border-color": ""}`} placeholder="Enter page name" name="sidebar_name"/>
                                                                        <p style={errorMessage}>{formErrors.page_name}</p>
                                                                    </div>
                                                                    <div style={{marginTop:"1rem"}} className="form-group">
                                                                        <label htmlFor="page_title" style={{marginBottom: "-10px"}} className="FormLable"><p>Page Title</p></label>
                                                                        <input value={inputs.page_title} onChange={handleChange} type="text" className={`form-control input ${formErrors.page_title? "border-color": ""}`} placeholder="Enter page title" name="page_title"/>
                                                                        <p style={errorMessage}>{formErrors.page_title}</p>
                                                                    </div>
                                                                    <div style={{marginTop:"1rem"}} className="form-group">
                                                                        <label htmlFor="video_file" style={{marginBottom: "-10px"}} className="FormLable"><p>Upload Video</p></label>
                                                                        <input type="file" className="form-control"  placeholder="Select video" name="video"  onChange={handleVideo} accept=".mp4, .m4v"/>
                                                                        <p style={errorMessage}>{formErrors.video_file}</p>
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

export default EditStructureOneContent;

const errorMessage = {
    color:"red",
    fontSize:".8rem",
    marginTop:".5rem"
    };
    