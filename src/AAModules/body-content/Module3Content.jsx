import React from "react";
import UnitsCard from '../components/UnitsCard';
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link } from 'react-router-dom';

function Module3Content (){
    return(
        <>
            <main className="wrapper2 px-md-4">
                <div style={{marginTop: '-5rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 style={{marginTop:'2rem'}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Module 3: Sécurité sur Internet</span></p></h4>
                <Link className="return-home" style={{textDecoration: 'none'}} to='/addunite'>
                     <div>
                         <button className="add-buttons">Add Unites</button>
                     </div>
                </Link>
                </div>

                <div className="wrapper">
                     <UnitsCard image="./images/Module3_Unit1.png" module_name="UNITÉ 1" title="Internet : de quoi s’agit-il ?" module_page="/module1"/>
                     <UnitsCard image="./images/Module3_Unit2.png" module_name="UNITÉ 2" title="Les fichiers en provenance d’Internet" module_page="/module2"/>
                     <UnitsCard image="./images/Module3_Unit3.png" module_name="UNITÉ 3" title="La navigation web" module_page="/module3"/>
                     <UnitsCard image="./images/Module3_Unit4.png" module_name="UNITÉ 4" title="La messagerie électronique" module_page="/module4"/>
                     <UnitsCard image="./images/Module3_Unit5.png" module_name="UNITÉ 5" title="L’envers du décor d’une connexion Web" module_page="/module4"/>
                </div>

                <Footer />
            </main>
        </>
    )
}
export default Module3Content;