import React from "react";
import Footer from '../components/Footer';
import "../App.css";
import { Link } from 'react-router-dom';

function LegalNoticeContent (){
    return(
        <>
            <main className="ms-sm-auto  px-md-4">
                <div style={{marginTop: '1.3rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="heading" >Mentions légales : Cyberzone-sec.com</h1>
                </div>
                
                <div className="Home_navigation">
                     <p><Link style={{textDecoration: 'none'}} to='/'><span className="home">Home /</span></Link> <span>Legal Notice</span></p>
                </div>

                <div className="legalnotice_wrapper">
                     <div className=" legalnotice_card" style={{padding: "3rem", paddingBottom: ""}}>
                         <div className=""><b><p>Informations légales :</p></b></div>
                         <div className=""><b><p style={{color: "#f4777c"}}>You do not meet the criteria required to edit your certificate. You have not followed 100% of the courses. You have not validated 80% of correct answers to all the assessments.</p></b></div>
                     </div>
                </div>

                <Footer />
            </main>

        </>
    )
}

export default LegalNoticeContent;