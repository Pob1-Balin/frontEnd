import React, { useEffect } from "react";
import Footer from '../ClientsDashboard/components/Footer';
import "../AdminDashboard/admin.css";
import { Link } from 'react-router-dom';

function LegalNoticePageContent(props){
    const head =  props.display;
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return(
        <>
            <main className="legal_background px-md-4 wrapper2">
                {head=="admin" ?
                <>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom" style={{marginTop:"-4rem"}}>
                       <h4 style={{marginTop:'2rem', color:"#0d3360"}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Accueil</span></Link> <span className="stroke_color">/</span> <span>Mentions légales : Cyberzone-sec.com</span></p></h4>
                        {/* <Link className="return-home" style={{textDecoration: 'none'}} to='/addunite'>
                            <div>
                                 <button className="add-buttons" style={{width:"16rem"}}>Modifier les mentions légales</button>
                            </div>
                        </Link> */}
                    </div>
                    <div className="legalnotice_wrapper" style={{marginTop:"-3.5rem"}}>
                        <div className=" legalnotice_card" style={{padding: "3rem", paddingBottom: ""}}>
                            <div className="legal-heading"><b><p>Informations légales :</p></b></div>
                            <div className="legal-heading-text"><b><p style={{color: "#f4777c"}}>National Agency for Information Systems Security (ANSSI) 51 boulevard de la Tour-Maubourg 75700 Paris 07 SP France</p></b></div>
                            <ul>
                                 <li><p>Tel: 01.71.75.84.05 or 01.71.75.84.06</p></li>
                                 <li><p>Email: secnumacademie@ssi.gouv.fr</p></li>
                            </ul>
                        </div>
                    </div>

                    <div style={{marginTop:"20rem"}}></div>
                    <Footer destination="/adminlegal" style={{marginBottom:"0rem"}}/>
                </>
                :
                <>
                  <div className="ml-4 mr-4 mt-4">
                        <div className="border-bottom headerTitle" style={{marginTop:"-2rem"}}>
                            <h1><p>Mentions légales : Cyberzone-sec.com</p></h1>
                        </div>
                        <div className="Home_navigation">
                            <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem", paddingLeft:"0rem" }} to='/clientservicedashboard'><span className="home">Accueil /</span></Link> <span style={{color: '#0d3360'}}>Mentions légales</span></p>
                        </div>
                        <div className="legalnotice_wrapper" style={{marginTop:"-3.5rem"}}>
                            <div className=" legalnotice_card" style={{padding: "3rem", paddingBottom: ""}}>
                                <div className="legal-heading"><b><p>Informations légales :</p></b></div>
                                <div className="legal-heading-text"><b><p style={{color: "#f4777c"}}>National Agency for Information Systems Security (ANSSI) 51 boulevard de la Tour-Maubourg 75700 Paris 07 SP France</p></b></div>
                                <ul>
                                    <li><p>Tel: 01.71.75.84.05 or 01.71.75.84.06</p></li>
                                    <li><p>Email: secnumacademie@ssi.gouv.fr</p></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{marginTop: "19rem"}}>
                            <Footer destination="/legalnotice" />
                        </div>
                  </div>
                </>
                }

            </main>

        </>
    )
}

export default LegalNoticePageContent;