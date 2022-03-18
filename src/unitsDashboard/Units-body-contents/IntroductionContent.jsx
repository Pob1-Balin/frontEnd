import React from "react";
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import ImageCard from '../components/ImageCard'
import '../../App.css'
import PlayerExample from "../components/VideoCard";

function IntroductionContent(){
    return(
        <>
            <div className="ms-sm-auto Header_Section ml-2">

            <div className="Unit-Dashboard-wrapper">
                     <HeaderSection  prev="/" destination='Leçon 1 - Bienvenue' header_title='Introduction' />
                </div>

                <PlayerExample/>

                <div className="units-dashboard-footer-wrapper">
                     <FooterSection />
                 </div>

            </div>
        </>
    )
}

export default IntroductionContent;