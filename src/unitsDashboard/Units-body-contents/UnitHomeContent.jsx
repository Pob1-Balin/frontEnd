import React from "react";
import HeaderSection from '../components/HeaderSection'
import AdminHeaderSection from '../components/AdminHeaderSection'
import FooterSection from '../components/FooterSection'
import '../../ClientsDashboard/App.css'
import PlayerExample from "../components/VideoCard";
import EmptyPageContent from "../components/EmptyPageContent";

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