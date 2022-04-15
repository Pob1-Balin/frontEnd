import React from "react";
import UnitsCard from '../components/UnitsCard';
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link } from 'react-router-dom';

function Module1Content (){
    return(
        <>
            <main className="px-md-4 wrapper2">
            <div style={{marginTop: '-5rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 style={{marginTop:'2rem'}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Module1</span></p></h4>
                <Link className="return-home" style={{textDecoration: 'none'}} to='/addmodule'>
                     <div>
                         <button className="add-buttons">Add Unites</button>
                     </div>
                </Link>
                </div>

                <div className="wrapper">
                     <UnitsCard image="./images/Module1_Unit1.png" module_name="UNITÉ 1" title="Un monde numérique hyper-connecté" module_page="/module1"/>
                     <UnitsCard image="./images/Module1_Unit2.png" module_name="UNITÉ 2" title="Un monde à hauts risques" module_page="/module2"/>
                     <UnitsCard image="./images/Module1_Unit3.png" module_name="UNITÉ 3" title="Les acteurs de la cybersécurité" module_page="/module3"/>
                     <UnitsCard image="./images/Module1_Unit4.png" module_name="UNITÉ 4" title="Protéger le cyberespace" module_page="/module4"/>
                     <UnitsCard image="./images/Module1_Unit5.png" module_name="UNITÉ 5" title="Les règles d’or de la sécurité" module_page="/module4"/>
                </div>

                <Footer />
            </main>
        </>
    )
}

export default Module1Content;