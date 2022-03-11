import React from "react";
import Modules from '../components/Modules';
import Footer from '../components/Footer';
import "../App.css";

function HomeContent (){
    return(
        <>
            <main className="ms-sm-auto  px-md-4">
                <div style={{marginTop: '1.3rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2" style={{color: "#36474f"}}><b>MODULES</b></h1>
                    
                </div>

                <div style={{marginBottom: "-3rem"}}></div>

                <div className="wrapper">
                     <Modules image="./images/Module1.png" module_name="MODULE 1" title="Panorama de la SSI" module_page="/module1"/>
                     <Modules image="./images/Module2.png" module_name="MODULE 2" title="Sécurité de l’authentification" module_page="/module2"/>
                     <Modules image="./images/Module3.png" module_name="MODULE 3" title="Sécurité sur Internet" module_page="/module3"/>
                     <Modules image="./images/Module4.png" module_name="MODULE 4" title="Sécurité du poste de travail et nomadisme" module_page="/module4"/>
                </div>

                <Footer />
            </main>

        </>
    )
}

export default HomeContent;