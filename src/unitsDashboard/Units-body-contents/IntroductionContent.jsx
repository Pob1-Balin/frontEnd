import React from "react";
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import ImageCard from '../components/ImageCard'
import '../../ClientsDashboard/App.css'
import PlayerExample from "../components/VideoCard";

function IntroductionContent(){
    return(
        <>
            <div className="">

            <div className="Unit-Dashboard-wrapper">
                     <HeaderSection  prev="/" destination='Leçon 1 - Bienvenue' header_title='Introduction' />
                </div>

                <PlayerExample/>

                <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Visionnez la vidéo pour continuer" />
                 </div>

            </div>
        </>
    )
}

export default IntroductionContent;