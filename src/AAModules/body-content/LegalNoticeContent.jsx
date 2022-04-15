import React from "react";
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link } from 'react-router-dom';

function LegalNoticeContent (){
    return(
        <>
            <main className="m-4">
                <div style={{marginTop: '-.5rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="heading" style={{color: '#0d3360', fontSize:'1.5rem'}} >Mentions légales : Cyberzone-sec.com</h5>
                    <Link className="return-home" style={{textDecoration: 'none'}} to='/legalnoticeedit'>
                     <div>
                         <button style={{width:'9rem'}} className="add-buttons">Edit Legal Notice</button>
                     </div>
                </Link>
                </div>
                
                <div className="Home_navigation">
                     <p><Link style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home /</span></Link> <span>Legal Notice</span></p>
                </div>






















                <div className="legalnotice_wrapper">
                     <div className=" legalnotice_card" style={{padding: "3rem", paddingBottom: ""}}>
                         <div className="legal-heading"><b><p>Informations légales :</p></b></div>
                         <div className="legal-heading-text"><b><p style={{color: "#f4777c"}}>National Agency for Information Systems Security (ANSSI) 51 boulevard de la Tour-Maubourg 75700 Paris 07 SP France</p></b></div>
                         <ul>
                             <li><p>Tel: 01.71.75.84.05 or 01.71.75.84.06</p></li>
                             <li><p>Email: secnumacademie@ssi.gouv.fr</p></li>
                         </ul>
                     </div>
                </div>

                <div style={{marginBottom: "-8rem", marginTop: "9rem"}}>
                     <Footer />
                </div>

                
            </main>

        </>
    )
}

export default LegalNoticeContent;