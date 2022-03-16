import React from "react";
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import ImageCard from "../components/ImageCard";
import CarouselCard from '../components/CarouselCard'





function UnitHomeContent (){
    return(
        <>
            <main className="ms-sm-auto  px-md-4">

                

                <div className="unites_divider_line"></div>

                <div className="units-dashboard-image-wrapper">
                     <ImageCard image="./images/Module1.png"/>
                </div>

                <CarouselCard />

                <div className="units-dashboard-footer-wrapper">
                     <FooterSection />
                 </div>

            </main>
        </>
    )                   
}

export default UnitHomeContent;