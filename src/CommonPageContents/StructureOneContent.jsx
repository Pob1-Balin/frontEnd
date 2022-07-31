import React from "react";
import { useLocation } from "react-router-dom";
import HeaderSection from '../unitsDashboard/components/HeaderSection'
import AdminHeaderSection from "../AdminDashboard/components/AdminHeaderSection";
import FooterSection from '../unitsDashboard/components/FooterSection'
import '../ClientsDashboard/App.css'
import PlayerExample from "../unitsDashboard/components/VideoCard";
import IdleTimerContainer from "../unitsDashboard/components/IdleTimerContainer";

function StructureOneContent(props){
    var head = props.show;
    const location = useLocation();
    const unitContent = location.state;
    return(
        <>
            <div className="">
                <IdleTimerContainer />
                <div className="Unit-Dashboard-wrapper">
                {head == "admin" ?
                    <AdminHeaderSection prev='#' edit="editstructureone" destination="Accueil" header_title={unitContent.content.page_title}/>
                    :
                    <HeaderSection prev='#' destination="Accueil" header_title="Bienvenue" />
                }
                </div>
                <div className="unites_divider_line"></div>
                <PlayerExample/>
                <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Units content"/>
                 </div>

            </div>
        </>
    )
}

export default StructureOneContent;