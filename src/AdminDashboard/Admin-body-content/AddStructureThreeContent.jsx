import React, { useState, useEffect } from "react";
import Footer from '../../unitsDashboard/components/FooterSection';
import Header from "../../unitsDashboard/components/Header";
import "../admin.css";
import "../components/styey.css"
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";
import { API } from "../../config";
import { ClearRounded } from '@mui/icons-material';
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
        image: [], image1: [], img: [], img1: [],
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
        setFile({
            ...file, img: [...file.img, newUnitContent.length]
        })
        setNewUnitContent([...newUnitContent, image]);
        event.target.reset()
    }
    const imageTitle = (event) => {
        event.preventDefault()
        setUpdate(0)
        setFile({
            ...file, img1: [...file.img1, newUnitContent.length]
        })
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

    const removeItem = (event) => {
        if(newUnitContent[event].structure == "image"){
            const index = file.img.indexOf(event)
            file.image.splice(index, 1)
            file.img.splice(index, 1)
        }
        if(newUnitContent[event].structure == "secondHeading"){
            const index = file.img1.indexOf(event)
            file.image1.splice(index, 1)
            file.img1.splice(index, 1)
        }
        newUnitContent.splice(event, 1)
        setNewUnitContent([...newUnitContent])
    }

    const clearList = (e) => {
        setNewUnitContent([])
    }

    return (
        <>
            <main className="px-md-4" >
                <Header unit_content={unit_content} id={unitContent.id} title={unitContent.title} image={unitContent.image}  module_name={unitId.module_name} module_title={unitId.module_title} header_title="Créer du contenu" />
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
                                                                <div class="devit-card-custom">                                  <div className="row">
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
                                                                            <div className="input-group-append" style={{display:"flex", justifyContent:"center"}}>
                                                                                <button onClick={handleSubmit} type="submit" style={{fontWeight:"550", background:'#4ab2cc', color:'white', maxWidth:"7rem", marginRight:".5rem"}} className="btn correct-input ansers">Envoyer</button>
                                                                                <div onClick={clearList} className="btn clear-btn answer_list">Effacer la liste</div>
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

                {newUnitContent.length == 0 ?
                  <center style={{paddingTop:"2rem", paddingBottom:"1.5rem", paddingLeft:"2rem", paddingRight:"2rem"}}><div><p style={{fontSize:"1.1rem"}} className="content">vous n'avez pas encore ajouté de contenu. Cliquez sur les structures ci-dessus pour ajouter du contenu!</p></div></center>
                  :
                   
                  <span>

                 {newUnitContent.map((item, index)=>
                    <>
                        {item.structure == "secondHeading" &&
                            <>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <div></div>
                                    <ClearRounded onClick={()=> removeItem(index)} style={{color:"red", fontSize:"1.3rem", fontWeight:"900", marginTop:".7rem", marginRight:".5rem"}} className="delete-answer-btn"/>
                                </div>
                                <div className="heading-image">
                                    <div className="heading-image-text"><p>{item.text}</p></div>
                                    <p>L'image que vous avez sélectionnée apparaîtra ici</p>
                                </div>
                            </>
                        }
                      
                        {item.structure == "heading" &&  
                            <div className="heading-text">
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <div></div>
                                    <ClearRounded onClick={()=> removeItem(index)} style={{color:"red", fontSize:"1.3rem", fontWeight:"900", marginTop:".7rem", marginRight:".5rem"}} className="delete-answer-btn"/>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        }
                        
                        {item.structure == "paragraph" &&
                            <div className="text-after-heading-image">
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <div></div>
                                    <ClearRounded onClick={()=> removeItem(index)} style={{color:"red", fontSize:"1.3rem", fontWeight:"900", marginTop:".7rem", marginRight:".5rem"}} className="delete-answer-btn"/>
                                </div>
                                {item.text.map((item2) => 
                                    <p>{item2}</p>
                                )}
                            </div>
                        }
                       
                        {item.structure == "image" && 
                            <div className="text-after-heading-image structure-images" style={{paddingBottom:"3rem"}}>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <div></div>
                                    <ClearRounded onClick={()=> removeItem(index)} style={{color:"red", fontSize:"1.3rem", fontWeight:"900", marginTop:".7rem", marginRight:".5rem"}} className="delete-answer-btn"/>
                                </div>
                                <p>L'image que vous avez sélectionnée apparaîtra ici</p>
                            </div>
                        }
                        
                    </>
                )}
                </span>
                }           
                </div>

                <div style={{marginLeft:"-2rem", marginRight:"-2rem", marginTop:"1rem"}}>
                    <Footer footer_text="Units content" destination="admin" />
                </div>
            </main>
        </>
    )
}

export default AddStructureThreeContent;



















