import React from "react";
import UnitsCard from '../components/UnitsCard';
import Footer from '../components/Footer';
import "../App.css";
import { Link } from 'react-router-dom';

function Module2Content (){
    return(
        <>
            <main className="ms-sm-auto px-md-4">
                <div style={{marginTop: '1.3rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="heading" >Module 2 : Sécurité de l’authentification</h1>
                </div>

                <div style={{marginBottom: "-3.4rem"}} className="Home_navigation">
                     <p><Link style={{textDecoration: 'none'}} to='/'><span className="home">Home /</span></Link> <span>Module 2</span></p>
                </div>


                <div className="wrapper">
                     <UnitsCard image="./images/Module2_Unit1.png" module_name="UNITÉ 1" title="Principes de l’authentification" module_page="/module1"/>
                     <UnitsCard image="./images/Module2_Unit2.png" module_name="UNITÉ 2" title="Attaques sur les mots de passe" module_page="/module2"/>
                     <UnitsCard image="./images/Module2_Unit3.png" module_name="UNITÉ 3" title="Sécuriser ses mots de passe" module_page="/module3"/>
                     <UnitsCard image="./images/Module2_Unit4.png" module_name="UNITÉ 4" title="Gérer ses mots de passe" module_page="/module4"/>
                     <UnitsCard image="./images/Module2_Unit5.png" module_name="UNITÉ 5" title="Notions de cryptographie" module_page="/module4"/>
                </div>

                <Footer />

            </main>
        </>
    )
}

export default Module2Content;