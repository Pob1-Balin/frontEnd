import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom'
import Footer from '../../ClientsDashboard/components/Footer';

function LegalnoticePage() {
  return (
    <>
      <Sidebar/>
      <main>
        <div className="ms-sm-auto px-md-4 ml-3 mr-1">
          <div className="border-bottom headerTitle">
            <h1><p>Mentions légales : Cyberzone-sec.com</p></h1>
          </div>
          <div className="Home_navigation">
            <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem", paddingLeft:"0rem" }} to='/home'><span className="home">Accueil /</span></Link> <span style={{color: '#0d3360'}}>Mentions légales</span></p>
          </div>
          <div className="legalnotice_wrapper" style={{marginTop:"-3.5rem"}}>
              <div className=" legalnotice_card" style={{padding: "3rem", paddingBottom: ""}}>
                  <div className="legal-heading"><b><p>Informations légales :</p></b></div>
                  <div className="legal-heading-text"><b><p style={{color: "#f4777c"}}>National Agency for Information Systems Security (ANSSI) 51 boulevard de la Tour-Maubourg 75700 Paris 07 SP France </p></b></div>
                  <ul>
                        <li><p>Tel: 01.71.75.84.05 or 01.71.75.84.06</p></li>
                        <li><p>Email: secnumacademie@ssi.gouv.fr</p></li>
                  </ul>
              </div>
          </div>
          <div style={{marginBottom: "-8rem", marginTop: "19rem"}}>
                <Footer destination="/legal"/>
          </div>
        </div>
      </main>
    </>
  );
}

export default LegalnoticePage;
