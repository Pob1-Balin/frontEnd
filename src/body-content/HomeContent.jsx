import React from "react";
import Modules from '../components/Modules';
import Footer from '../components/Footer';
import "../App.css";
import modData from './modules.json'

function HomeContent (){
    return(
        <>
            <main className="px-md-4 wrapper2">
                <div style={{marginTop: '-5rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2" style={{color: '#0d3360'}}><b>MODULES</b></h1>
                    
                </div>

                <div style={{marginBottom: "-3rem"}}></div>

                <div className="wrapper">
                    {modData.map((module) => <Modules image={module.image} module_name={module.moduleName} title={module.title} module_page={module.module_page}/>)}
                </div>

                <Footer />
            </main>

        </>
    )
}

export default HomeContent;