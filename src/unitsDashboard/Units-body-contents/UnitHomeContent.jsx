import React from "react";
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import '../../App.css'
import PlayerExample from "../components/VideoCard";



function UnitHomeContent (){
    return(
        <>
            <div className="mr-n2 Header_Section">
                <div className="Unit-Dashboard-wrapper">
                     <HeaderSection prev='#' destination="Accueil" header_title="Bienvenue" />
                </div>

                <div className="unites_divider_line"></div>
                <PlayerExample/>

                <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Visionnez la vidéo pour continuer" />
                 </div>

            </div>
        </>
    )
}

export default UnitHomeContent;