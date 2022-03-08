import React from "react";
import UnitsCard from '../components/UnitsCard';
import "../App.css";
import { Link } from 'react-router-dom';
import {FaAngleLeft } from "react-icons/fa";

function Module2Content (){
    return(
        <>
            <main className="ms-sm-auto px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2" style={{color: "#36474f"}}><b>Module 2 : Sécurité de l’authentification</b></h1>
                </div>

                <Link to='/'>
                     <div style={{marginTop: "2.5rem", marginBottom: "-6rem", marginLeft: "2rem"}}>
                          <button className="card_btn_home"><FaAngleLeft size='1.3rem' style={{marginBottom: '.1rem'}} />Home</button>
                     </div>
                </Link>


                <div className="wrapper">
                     <UnitsCard image="./images/Module2_Unit1.png" module_name="UNITÉ 1" title="Principes de l’authentification" module_page="/module1"/>
                     <UnitsCard image="./images/Module2_Unit2.png" module_name="UNITÉ 2" title="Attaques sur les mots de passe" module_page="/module2"/>
                     <UnitsCard image="./images/Module2_Unit3.png" module_name="UNITÉ 3" title="Sécuriser ses mots de passe" module_page="/module3"/>
                     <UnitsCard image="./images/Module2_Unit4.png" module_name="UNITÉ 4" title="Gérer ses mots de passe" module_page="/module4"/>
                     <UnitsCard image="./images/Module2_Unit5.png" module_name="UNITÉ 5" title="Notions de cryptographie" module_page="/module4"/>
                </div>

                <div className="footer" style={{backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", height: "3.4rem", marginLeft: "-2rem", marginRight: "-2rem", padding: "2rem", paddingTop: "1.1rem"}}>
                     <p style={{color: "#808181"}}><b>&copy; 2022 Cyberzone</b></p>
                     <p><b>Mentions legales</b></p>
                </div>

            </main>
        </>
    )
}

export default Module2Content;