import React, { useEffect, useState} from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import HeaderSection from '../unitsDashboard/components/HeaderSection'
import AdminHeaderSection from '../AdminDashboard/components/AdminHeaderSection'
import FooterSection from '../unitsDashboard/components/FooterSection'
import SecondUnitFooter from "../unitsDashboard/components/SecondUnitFooter";
import axios from 'axios'
import { API } from "../config"
import Bg from './bg.png'
import ThirdFooter from "../unitsDashboard/components/ThirdFooter";
import Modal from 'react-bootstrap/Modal';
function StructureThreeContent(props){
    const navigate = useNavigate();
    var head = props.show;
    const location = useLocation();
    const unitContent = location.state;
    const [unitsData, setUnitsData] = useState([]);
    const [lgShow, setLgShow] = useState(false); 
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${API}/unit/unitsdata/${unitContent.id}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
      }, []);

      var unitContent2  = []
      var title = ""
      var image = ""
      unitsData.map((item)=>{
        unitContent2 = item.unit_content;
        title = item.title;
        image = item.image;
      })

//--------------------------------------------- calculate time spent on this page ----------------------------------------

const submitUnit = (unitInfo) => {
    axios.put(`${API}/unit/unit/${unitContent.id}`, unitInfo)
        .then(res => {
        })
        .catch(err => {
        })
}

let timeSpentScrolling = 0;

let isHalted = false;
let haltedStartTime, haltedEndTime;
let totalHaltedTime = 0;

const update_halt_state = () => {
    if (isHalted) {
        isHalted = false;
        haltedEndTime = new Date().getTime()
        totalHaltedTime += (haltedEndTime - haltedStartTime)
    } else {
        isHalted = true;
        haltedStartTime = new Date().getTime()
    }
}

// Listen for scroll events
window.addEventListener('scroll', () => {
    timeSpentScrolling += 1.8;
    update_halt_state()
});

document.addEventListener("DOMContentLoaded", () => {
    const start = new Date().getTime();

    // AVERAGE SCROLLING INTERVAL - 39 seconds
    setInterval(() => {
        if (new Date().getTime() - start > 39000) {
            update_halt_state()
        }
    }, 39000)

    window.addEventListener("beforeunload", () => {
        const end = new Date().getTime();
        update_halt_state()

        const totalTime = (end - start) - (timeSpentScrolling) - totalHaltedTime;

        var units = {};
            unitsData.map((item) => {
                units = item
        });

        const time_spent = Math.round(parseInt(totalTime) + parseInt(units.time_spent));
        // submitUnit({
        //     time_spent,
        // });

    });

});

//------------------------------------------------------------------------------------------------------------------------------------------





const submitUnitContent = (unitDataInfo) => {
    axios.put(`${API}/unit/unit/${unitContent.id}`, unitDataInfo)
        .then(res => {
            setLgShow(true);
            navigate('/adminunitcontent', {state: {id:unitContent.id, content:unitContent2, title:title, image:image, module_title:unitContent.module_title, module_name:unitContent.module_name}})
        })
        .catch(err => {
        })
}

const deleteUnitContent = () => {
    var unit_content = [{}];
    {unitsData.map((item) => {
        item.unit_content.splice(unitContent.index,1);
        unit_content = item.unit_content;
    })}

    submitUnitContent({
        unit_content,
    });
}

    return(
        <>
            <div className="">
                <Modal size="md" show={lgShow} onHide={() => setLgShow(false)}>
                    <Modal.Header>
                        <h5 className="modal-title" id="exampleModalLabel">Delete units content</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{margin:"-1rem"}} className="modal-body">
                            <p style={{color: "gray"}}>Are you sure you want to permanently delete this units content?</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div style={{margin:"-1rem"}} className='modal-footer'>
                            <button type="button" class="btn btn-danger mr-1" onClick={() => setLgShow(false)} >Fermé</button>
                            <button type="submit" class="btn" style={{backgroundColor: "#3363ad", color:"white"}} onClick={deleteUnitContent}>Oui</button>
                        </div>
                        
                    </Modal.Footer>
                </Modal>
                <div className="Unit-Dashboard-wrapper">
                {head == "admin" ?
                    <AdminHeaderSection edit="editstructurethree" prev="/cyberspace" module_title={unitContent.module_title} module_name={unitContent.module_name} destination="Leçon 2 - Cyberspace" index={unitContent.index} id={unitContent.id} content={unitContent2} image={image} title={title} header_title={unitContent.pageTitle} setLgShow={setLgShow} show={head}/>
                    :
                    <HeaderSection prev="/cyberspace" destination="Leçon 2 - Cyberspace" header_title={unitContent.content.page_title}/>
                }
                </div>
                <div className="" style={{marginTop:"-1.5rem", background:"white"}}>

                {location.state.content.map((item, index)=>
                    <>
                        
                        {item.structure == "secondHeading" ?
                            <div className="heading-image">
                                <div className="heading-image-text"><p>{item.text}</p></div>
                                <div className="image-div"><img src={`${API}/images/${item.image1}`}/></div>
                            </div>
                            :""
                        }
                      
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
                            <div className="text-after-heading-image structure-images" style={{paddingBottom:"2rem"}}>
                                <img src={`${API}/images/${item.image}`} style={{width:"100%"}} className="img-fluid" alt="screen capture codes"/>
                            </div>
                            :""
                        }
                    </>
                )}
      
            </div>

            {/* <SecondUnitFooter direction="fkladn andka ajndakj dksa"/> */}
            <ThirdFooter destination="fkladn andka ajndakj dksa" />
            {/* <div className="units-dashboard-footer-wrapper">
                    <FooterSection footer_text="Units content" />
                </div> */}
            </div>
        </>
    )
}

export default StructureThreeContent;

           