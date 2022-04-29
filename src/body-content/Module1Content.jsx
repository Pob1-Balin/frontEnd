import React, { useEffect } from "react";
import UnitsCard from '../components/UnitsCard';
import Footer from '../components/Footer';
import "../App.css";
import { Link } from 'react-router-dom';
import unitsData from './modules.json'
import Aos from 'aos';
import 'aos/dist/aos.css';
// import "animate.css/animate.min.css";
// import { AnimationOnScroll } from 'react-animation-on-scroll';


function Module1Content (){

      useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
    
    return(
        <>
            
            <main className="px-md-4 wrapper2">
                <div style={{marginTop: '-5rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="heading" style={{color: '#0d3360'}}>Module 1 : Panorama de la SSI</h1>
                </div>

                <div style={{marginBottom: "-3.4rem"}} className="Home_navigation">
                     <p><Link className="return-home" style={{textDecoration: 'none'}} to='/'><span className="home">Home /</span></Link> <span>Module 1</span></p>
                </div>

                <div className="wrapper">

                    {/* {
                        unitsData.forEach(element => element.unitInfo.forEach(info=>{
                            var me = []
                           me =  me.push(info);
                            console.log(me)
                            
                        }))
                    } */}
                {/* {
                    unitsData.map((module) =>{
                        var me = []
                        // module.unitInfo.forEach(element => {
                        //     me.push(element);
                        //     console.log(me)
                            
                        // });
                        // if(module.id == 1)
                            return <UnitsCard image="./images/Module1_Unit1.png" module_name={module.unitInfo[0]?.uniteName} title="Un monde numérique hyper-connecté" module_page="/module1"/>
                    }    
                  
                )} */}

                    
                     <UnitsCard aoss="zoom-in-left" image="./images/Module1_Unit1.png" module_name="UNITÉ 1" title="Un monde numérique hyper-connecté" module_page="/module1"/>
        
                     <UnitsCard aoss="zoom-in-left" image="./images/Module1_Unit2.png" module_name="UNITÉ 2" title="Un monde à hauts risques" module_page="/module2"/>
                     <UnitsCard aoss="zoom-in-up" image="./images/Module1_Unit3.png" module_name="UNITÉ 3" title="Les acteurs de la cybersécurité" module_page="/module3"/>
                     <UnitsCard aoss="zoom-in-down" image="./images/Module1_Unit4.png" module_name="UNITÉ 4" title="Protéger le cyberespace" module_page="/module4"/>
                     <UnitsCard aoss="zoom-out-down" image="./images/Module1_Unit5.png" module_name="UNITÉ 5" title="Les règles d’or de la sécurité" module_page="/module4"/>
                </div>

                <Footer />
            </main>
        </>
    )
}

export default Module1Content;