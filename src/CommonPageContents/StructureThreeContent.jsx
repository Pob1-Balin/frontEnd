import React from "react";
import { useLocation } from "react-router-dom";
import HeaderSection from '../unitsDashboard/components/HeaderSection'
import AdminHeaderSection from '../AdminDashboard/components/AdminHeaderSection'
import FooterSection from '../unitsDashboard/components/FooterSection'
import '../ClientsDashboard/App.css'

function StructureThreeContent(props){
    var head = props.show;
    const location = useLocation();
    const unitContent = location.state;
    return(
        <>
            <div className="">
                <div className="Unit-Dashboard-wrapper">
                {head == "admin" ?
                    <AdminHeaderSection edit="editstructurethree" prev="/cyberspace" destination="Leçon 2 - Cyberspace" header_title={unitContent.content.page_title}/>
                    :
                    <HeaderSection prev="/cyberspace" destination="Leçon 2 - Cyberspace" header_title="Une diversité d'équipements et de technologies"/>
                }
                </div>
                <div className="bg-black" style={{height:'3px', marginTop:'-2.3%', marginLeft:'-2%'}}></div>
                <div className="text-container">
                    <div className="text-header">
                         <h4 className="fw-bold fs-5"><p>{unitContent.content.text_heading}</p></h4>
                    </div>
                    <div className="text-body">
                         <p>{unitContent.content.section_text}</p>
                    </div>
                </div>
                <div style={{marginTop:"2rem"}}></div>
                <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Units content" />
                 </div>
            </div>
        </>
    )
}

export default StructureThreeContent;