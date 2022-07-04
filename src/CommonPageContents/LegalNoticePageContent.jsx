import React from "react";
import Footer from '../ClientsDashboard/components/Footer';
import "../AdminDashboard/admin.css";
import { Link } from 'react-router-dom';

function LegalNoticePageContent(props){
    const head =  props.display;
    return(
        <>
            <main className="m-4">
                {head=="admin" ?
                <>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom legalnotice">
                        <h4 style={{marginTop:'2rem'}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Mentions légales : Cyberzone-sec.com</span></p></h4>
                        <Link className="return-home" style={{textDecoration: 'none'}} to='/addunite'>
                            <div>
                                 <button className="add-buttons" style={{width:"9rem"}}>Edit Legal Notice</button>
                            </div>
                        </Link>
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

                    <div style={{marginBottom: "-8rem", marginTop: "13rem"}}>
                         <Footer destination="/adminlegal" />
                    </div>
                </>
                :
                <>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom legalnotice">
                         <h3 className="heading" style={{color: '#0d3360'}} >Mentions légales : Cyberzone-sec.com</h3>
                    </div>
                    
                    <div className="Home_navigation">
                         <p><Link style={{textDecoration: 'none'}} to='/'><span className="home">Home /</span></Link> <span>Legal Notice</span></p>
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

                    <div style={{marginBottom: "-8rem", marginTop: "10rem"}}>
                         <Footer destination="/legalnotice" />
                    </div>

                </>
                }

            </main>

        </>
    )
}

export default LegalNoticePageContent;