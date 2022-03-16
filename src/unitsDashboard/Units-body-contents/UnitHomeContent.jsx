import React from "react";
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import '../../App.css'



function UnitHomeContent (){
    return(
        <>
            <main className="ms-sm-auto  px-md-4">

                <div className="Unit-Dashboard-wrapper">
                     <HeaderSection destination='Home' header_title='Bienvenue' />
                </div>

                <div className="units-dashboard-footer-wrapper">
                     <FooterSection />
                 </div>

            </main>
        </>
    )                   
}

export default UnitHomeContent;