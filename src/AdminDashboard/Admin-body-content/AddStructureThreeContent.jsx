import React, { useState, useEffect } from "react";
import Footer from '../../unitsDashboard/components/FooterSection';
import Header from "../../unitsDashboard/components/Header";
import "../admin.css";
import "../components/styey.css"
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";
import { API } from "../../config";
function AddStructureThreeContent() {
    const navigate = useNavigate();
    const location = useLocation();
    const unitId = location.state;
    const unitID = unitId.id;
    const [unitsData, setUnitsData] = useState([]);
    const [newUnitContent, setNewUnitContent] = useState([]);
    const [error, setError] = useState("");
    const [update, setUpdate] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${API}/unit/unitsdata/${unitID}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
      }, []);

    var unit_content = [];
    var unitContent = {}
    unitsData.map((item)=>{
        unit_content = item.unit_content;
        unitContent.title = item.title;
        unitContent.image = item.image;
        unitContent.id = item._id;
    })  

    console.log("[newUnitContent:", newUnitContent);

    const [heading, setHeading] = useState({
        structure: "heading",
        text: ""
    });
    const [secondHeading, setSecondHeading] = useState({
        structure: "secondHeading",
        text: "",
        image1: ""
    });

    const [parag, setParag] = useState("");

    const [pageTitle, setPageTitle] = useState('');

    const [image, setImage] = useState({
        structure: "image",
        image: ""
    });

    const [file, setFile] = useState({
        image: [], image1: [],
    })
    const handleFile = event => {
        var fil = event.target.files[0]
       if(event.target.name == 'image1'){
            setFile({
                ...file, [event.target.name]: [...file.image1, fil]
            })
            setSecondHeading({
                ...secondHeading, [event.target.name]: fil.name}
            )
       }else{
            setFile({
                ...file, [event.target.name]: [...file.image, fil]
            })
            setImage({
                ...image, [event.target.name]: fil.name}
            )
       }


    }

    const handleHeading = event => {
        setHeading({
            ...heading, [event.target.name]: event.target.value
        })
    }

    const handleParagraph = event => {
        setParag(event.target.value)
    }

    const handlePageTitle = event => {
        setPageTitle(event.target.value)
        setError("");
    }

    const handleSecondHeading = event => {
        setSecondHeading({
            ...secondHeading, [event.target.name]: event.target.value}
        )
    }

    const paragraph2 = (event) => {
        event.preventDefault()
        if(update == 0){
            const paragraph = { structure: "paragraph", text: [parag] }
            setNewUnitContent([...newUnitContent, paragraph]);
        }else{
            const structure_details = newUnitContent[newUnitContent.length - 1];
            structure_details.text = [...structure_details.text, parag];
            var new_unit_arr = [];
            for (let i = 0; i < newUnitContent.length - 1; i++) {
                new_unit_arr = [...new_unit_arr, newUnitContent[i]]
              }
            new_unit_arr = [...new_unit_arr, structure_details]
            setNewUnitContent([...new_unit_arr]);
        }
        setUpdate(1)
        event.target.reset()
    }
    const title = (event) => {
        event.preventDefault()
        setUpdate(0)
        setNewUnitContent([...newUnitContent, heading]);
        event.target.reset()
    }
    const images = (event) => {
        event.preventDefault()
        setUpdate(0)
        setNewUnitContent([...newUnitContent, image]);
        event.target.reset()
    }
    const imageTitle = (event) => {
        event.preventDefault()
        setUpdate(0)
        setNewUnitContent([...newUnitContent, secondHeading]);
        event.target.reset()
    }


    const submitUnitData = (unitDataInfo) => {

        if(file.image.length != 0){
            file.image.map((item) => {
                const formData = new FormData()
                formData.append('myFile', item)
                axios.post(`${API}/upload`, formData, {
                    headers:{
                        "content-tupe": "multipart/form-data"
                    }
                }).then(res=>{
                }).catch(err=>{
                })
            });
        }

        if(file.image1.length != 0){
            file.image.map((item) => {
                const formData = new FormData()
                formData.append('myFile', item)
                axios.post(`${API}/upload`, formData, {
                    headers:{
                        "content-tupe": "multipart/form-data"
                    }
                }).then(res=>{
                }).catch(err=>{
                })
            });
        }

        axios.put(`${API}/unit/unit/${unitID}`, unitDataInfo)
            .then(res => {
            })
            .catch(err => {
            })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(pageTitle != ""){
            const route = "three";
            const structure_name = "three"
            const structure_info = {};
            structure_info.route = route;
            structure_info.structure_name = structure_name;
            structure_info.pageTitle = pageTitle;
    
            const new_content = [...unit_content, [...newUnitContent, structure_info]];
    
            submitUnitData({
                 unit_content: new_content,
            });
            navigate('/adminunitcontent', {state: {id:unitID, title: unitContent.title, content:new_content, image:unitContent.image, module_name:unitId.module_name, module_title:unitId.module_title }});
        }else{
            setError("Erreur: Vous n'avez pas ajouté le titre de la page");
        }
        
    }

    return (
        <>
            <main className="px-md-4" >
                <Header unit_content={unit_content} id={unitContent.id} title={unitContent.title} image={unitContent.image} header_title="Créer du contenu" />
                <div class="edit-structures single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService" style={{marginTop:"2rem"}}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-payment-inner-st">
                                    {/* <div><p className="mt-3 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Form</p></div> */}
                                    <div id="myTabContent" class="tab-content custom-product-edit">
                                        <div class="product-tab-list">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="review-content-section">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div class="devit-card-custom">
                                                                    {/* <form onSubmit={handleSubmit}>
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
                                                                    </form> */}
                                                                                                                                  <div className="row">
                                                                       <div className="add-structure-headings"><p className="main-heading">Ajouter des structures</p></div>
                                                                            <div className="col-lg-6 col-md-12">
                                                                                <form id="title" onSubmit={title} style={{margin:"0rem"}}>
                                                                                    <div className="add-structure-headings"><p>Titre</p></div>
                                                                                    <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                                                                                        <input type="text" className="form-control correct-input input" placeholder="Ajouter des réponses" onChange={handleHeading} name="text" style={{color:"#4ab2cc"}} required/>
                                                                                        <div className="input-group-append">
                                                                                            <button type="submit" style={{fontWeight:"550", background:'#4ab2cc', color:'white', width:"100%"}} className="btn correct-input ansers">Ajouter</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-12">
                                                                                <div className="add-structure-headings"><p>Paragraphe</p></div>
                                                                                <form onSubmit={paragraph2} style={{margin:"0rem"}}>
                                                                                    <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                                                                                        <input type="text" className="form-control correct-input input" placeholder="Ajouter des réponses" name="text" onChange={handleParagraph} style={{color:"#4ab2cc"}} required/>
                                                                                        <div className="input-group-append">
                                                                                            <button type="submit" style={{fontWeight:"550", background:'#4ab2cc', color:'white', width:"100%"}} className="btn correct-input ansers">Ajouter</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>

                                                                            <div className="col-lg-6 col-md-12">
                                                                                <div className="add-structure-headings" style={{marginTop:"-.7rem"}}><p>Image</p></div>
                                                                                <form onSubmit={images} style={{margin:"0rem"}}>
                                                                                    <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                                                                                        <input type="file" className="form-control correct-input input" placeholder="Ajouter des réponses" style={{color:"#4ab2cc"}} name="image" onChange={handleFile} accept=".png, .jpg, .jpeg" required/>
                                                                                        <div className="input-group-append">
                                                                                            <button type="submit" style={{fontWeight:"550", background:'#4ab2cc', color:'white', width:"100%"}} className="btn correct-input ansers">Ajouter</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            
                                                                            <div className="col-lg-6 col-md-12">
                                                                                <div className="add-structure-headings" style={{marginTop:"-.7rem"}}><p>Titre de la page</p></div>
                                                                                <form style={{margin:"0rem"}}>
                                                                                    <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                                                                                        <input type="text" className="form-control correct-input input" placeholder="Ajouter des réponses" style={{color:"#4ab2cc"}} name="pageTitle" onChange={handlePageTitle}  required/>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            
                                                                            <div className="col-12">
                                                                                <form onSubmit={imageTitle} style={{margin:"0rem"}}>
                                                                                    <div className="row">
                                                                                        <div className="add-structure-headings" style={{marginBottom:"-1.2rem", marginTop:"-.7rem"}}><p>Titre avec une image</p></div>
                                                                                        <div className="col-lg-6 col-md-12">
                                                                                            <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                                                                                                <input type="text" className="form-control correct-input input" placeholder="Ajouter des réponses" name="text" onChange={handleSecondHeading} style={{color:"#4ab2cc"}} required/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-12">
                                                                                            <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                                                                                                <input type="file" className="form-control correct-input input" placeholder="Ajouter des réponses" name="image1" onChange={handleFile} style={{color:"#4ab2cc"}} accept=".png, .jpg, .jpeg" required/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="input-group-append" style={{maxWidth:"8rem", marginTop:"-.8rem"}}>
                                                                                            <button type="submit" style={{fontWeight:"550", background:'#4ab2cc', color:'white', width:"100%"}} className="btn correct-input ansers">Ajouter</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            <div className="add-structure-headings error"><p style={{color:"red", paddingTop:"1rem"}}>{error}</p></div>
                                                                            <center>
                                                                                <div className="input-group-append" style={{maxWidth:"7rem"}}>
                                                                                    <button onClick={handleSubmit} type="submit" style={{fontWeight:"550", background:'#4ab2cc', color:'white', width:"100%"}} className="btn correct-input ansers">Envoyer</button>
                                                                                </div>
                                                                            </center>
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
                </div>

                <div className="" style={{marginTop:"-1.5rem", background:"white", marginLeft:"-1rem", marginRight:"-1rem"}}>

                {newUnitContent.length == 0?
                  <p>No data added</p>
                  :
                   
                  <span>

                 {newUnitContent.map((item, index)=>
                    <>
                        <span>
                            {item.structure == "secondHeading" ?
                                <div className="heading-image">
                                    <div className="heading-image-text"><p>{item.text}</p></div>
                                    <p>L'image que vous avez sélectionnée apparaîtra ici</p>
                                </div>
                                :""
                            }
                        </span>
                      
                        {item.structure == "heading" ?  
                            <div className="heading-text">
                                <p>{item.text}</p>
                            </div>
                            :""
                        }
                        
                        {item.structure == "paragraph" ?
                            <div className="text-after-heading-image">
                                {item.text.map((item2) => 
                                    <p>{item2}</p>
                                )}
                            </div>
                            :""
                        }
                       
                        {item.structure == "image" ? 
                            <div className="text-after-heading-image structure-images" style={{paddingBottom:"3rem"}}>
                                <p>L'image que vous avez sélectionnée apparaîtra ici</p>
                            </div>
                            :""
                        }
                        
                    </>
                )}
                </span>
                }                

                    {/* <div className="text-header">
                         <h4 className="fw-bold fs-5"><p>{unitContent.content.text_heading}</p></h4>
                    </div>
                    <div className="text-body">
                         <p>{unitContent.content.section_text}</p>
                    </div> */}
                </div>

                <div style={{marginLeft:"-2rem", marginRight:"-2rem", marginTop:"1rem"}}>
                    <Footer footer_text="Units content" destination="admin" />
                </div>
            </main>
        </>
    )
}

export default AddStructureThreeContent;



















