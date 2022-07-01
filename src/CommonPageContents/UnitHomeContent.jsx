import React from "react";
import HeaderSection from '../unitsDashboard/components/HeaderSection'
import AdminHeaderSection from '../AdminDashboard/components/AdminHeaderSection'
import FooterSection from '../unitsDashboard/components/FooterSection'
import '../ClientsDashboard/App.css'
import PlayerExample from "../unitsDashboard/components/VideoCard";
import EmptyPageContent from "./EmptyPageContent";

function UnitHomeContent(props){
    var head = props.show;
    var body = "";
    return(
        <>
            <div className="">
                <div className="Unit-Dashboard-wrapper">
                    {head == "admin" ?
                      <AdminHeaderSection show={body} prev='#' destination="Accueil" header_title="Bienvenue"/>
                      :
                      <HeaderSection prev='#' destination="Accueil" header_title="Bienvenue" />
                    }
                </div>
                <div className="unites_divider_line"></div>
                {body == "" ? <EmptyPageContent/> : <PlayerExample/>}
                <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Visionnez la vidéo pour continuer" />
                 </div>

            </div>
        </>
    )
}

export default UnitHomeContent;