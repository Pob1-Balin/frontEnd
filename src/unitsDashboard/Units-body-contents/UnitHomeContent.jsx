import React from "react";
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import '../../App.css'
import PlayerExample from "../components/VideoCard";



function UnitHomeContent (){
    return(
        <>
            <div className="ms-sm-auto  Header_Section ml-2">
                <div className="Unit-Dashboard-wrapper">
                     <HeaderSection  prev="#" destination="Leçon 2 - Introduction" header_title="Une diversité d'équipements et de technologies" />
                </div>

                <div className="unites_divider_line"></div>
                <PlayerExample/>

                <div className="units-dashboard-footer-wrapper">
                     <FooterSection />
                 </div>

            </div>
        </>
    )                   
}

export default UnitHomeContent;