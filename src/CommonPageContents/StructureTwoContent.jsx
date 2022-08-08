import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderSection from '../unitsDashboard/components/HeaderSection'
import AdminHeaderSection from "../AdminDashboard/components/AdminHeaderSection";
import FooterSection from '../unitsDashboard/components/FooterSection'
import ImageCard from "../unitsDashboard/components/ImageCard";
import CarouselCard from '../unitsDashboard/components/CarouselCard'
import '../ClientsDashboard/App.css'
import axios from 'axios'
import { API } from "../config"

function StructureTwoContent(props){
    var head = props.show;
    const location = useLocation();
    const unitContent = location.state;

    const [unitsData, setUnitsData] = useState([]);
    useEffect(() => {
        axios.get(`${API}/unit/unitsdata/${unitContent.id}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
      }, []);

      const submitUnitContent = (unitDataInfo) => {
        axios.put(`${API}/unit/unit/${unitContent.id}`, unitDataInfo)
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
                } else Promise.reject();
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
                {/*-- Modal =====*/}
                <div className="modal fade" id="del" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Delete units content</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p style={{color:"gray"}}>Are you sure you want to permanently delete this units content?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                                <button type="submit" name="delete_service" className="btn btn-info" onClick={deleteUnitContent}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Unit-Dashboard-wrapper">
                {head == "admin" ?
                    <AdminHeaderSection edit="editstructuretwo" prev="/cyberspace" destination="Leçon 2 - Cyberspace" id={unitContent.id} content={unitContent.content} index={unitContent.index} header_title={unitContent.content.page_title}/>
                    :
                    <HeaderSection prev="/cyberspace" destination="Leçon 2 - Cyberspace" header_title="Une diversité d'équipements et de technologies" />
                }
                </div>
                <div className="unites_divider_line"></div>
                <div className="">
                     <ImageCard image={unitContent.content.section_image} />
                </div>
               <div className="carousel-wrapper">
                    <CarouselCard image_one={unitContent.content.carousel_one_image} image_two={unitContent.content.carousel_two_image} image_three={unitContent.content.carousel_three_image} carousel_text_one={unitContent.content.carousel_one_text} carousel_text_two={unitContent.content.carousel_two_text} carousel_text_three={unitContent.content.carousel_three_text} />
                        {/* <CarouselCard image_one="" image_two="" image_three=""  /> */}
               </div>
                 <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Units content" />
                 </div>
            </div>
        </>
    )
}

export default StructureTwoContent;