import React from "react";
import HeaderSection from '../components/HeaderSection'
import ContentCard from '../components/ContentCard'
import SecondUnitFooter from '../components/SecondUnitFooter'
import ImageCard from "../components/ImageCard";
import CarouselCard2 from '../components/CarouselCard2'
import CarouselCard3 from '../components/CarouselCard3'
import '../../App.css'


function Module1Unit2ThreatsContent(){
    return(
        <>
            <div className="ms-sm-auto Header_Section ml-2">

                <div className="Unit-Dashboard-wrapper">
                     <HeaderSection prev='/cyberspace' destination="1 - Introduction" header_title="Qui me menace et comment ?" />
                </div>

                <div className="unites_threats_divider"></div>

                <div className="units-dashboard-image-wrapper">
                     <ImageCard image="./images/ldmaiXs1xwOn6xQl_x-g9I_1VYKHxcg81-_NOPROCESS_bandeau.png" style={{backgroundColor: '#e0edfa'}} />
                </div>

               <div className="Unit-Dashboard-wrapper">
                     <ContentCard destination="Leçon 4 - Le cyberespace, nouvel espace de vie" header_title="Un espace de non-droit" />
                </div>
                 <div className="units-dashboard-footer-wrapper">
                     <SecondUnitFooter direction='CONTINUER' />
                 </div>

            </div>
        </>
    )
}

export default Module1Unit2ThreatsContent;