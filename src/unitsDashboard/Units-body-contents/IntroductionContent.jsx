import React from "react";
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import ImageCard from '../components/ImageCard'
import '../../App.css'

function IntroductionContent(){
    return(
        <>
            <main className="ms-sm-auto  px-md-4">

                <HeaderSection/>
                <div className="units-dashboard-footer-wrapper">
                     <FooterSection />
                 </div>

            </main>
        </>
    )
}

export default IntroductionContent;