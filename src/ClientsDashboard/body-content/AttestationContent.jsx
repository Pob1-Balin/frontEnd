import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function AttestationContent (){
    return(
        <>
            <main className="ms-sm-auto px-md-4 ml-3 mr-1">
                <div className="border-bottom headerTitle">
                    <h1><p>Page d'attestation</p></h1>
                </div>
                <div className="Home_navigation">
                    <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem", paddingLeft:"0rem" }} to='/clientservicedashboard'><span className="home">Accueil /</span></Link> <span style={{color: '#0d3360'}}>Attestation</span></p>
                </div>
                <div className="profile_wrapper">
                    <div className="card profile_card attestation_card" style={{padding: "3rem"}}>
                        <div className="attestation_card"><b><p style={{paddingLeft: '.6rem'}}>Pour obtenir une attestation de réussite, vous devez <span style={{color: "#66b5ff"}}>suivre tous les modules et obtenir une note de plus de 80% aux évaluations</span> de chacune des unités.</p></b></div>
                        <div className="attestation_card">
                            <table className="table table-borderless">
                                <thead >
                                    <tr>
                                         <th className="text-bold " scope="col" colspan="4" style={mystyle}>MODULES</th>
                                         <th className="text-bold" scope="col" style={mystyle}>PROGRESS</th>
                                         <th className="Attest_Head" scope="col" style={mystyle}>SCORE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                         <td colspan="4" style={mystyle}>PANORAMA OF THE ISS</td>
                                         <td className='text-danger' style={tdStyle}>0.0%</td>
                                         <td className='text-danger' style={tdStyle}>0.0%</td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" style={mystyle}>AUTHENTICATION SECURITY</td>
                                        <td className='text-danger' style={tdStyle}>0.0%</td>
                                        <td className='text-danger' style={tdStyle}>0.0%</td>
                                    </tr>
                                    <tr>
                                         <td colspan="4" style={mystyle}>INTERNET SECURITY</td>
                                         <td className='text-danger' style={tdStyle}>0.0%</td>
                                         <td className='text-danger' style={tdStyle}>0.0%</td>
                                    </tr>
                                    <tr>
                                         <td colspan="4" style={mystyle}>SECURITY OF THE WORKSTATION AND NOMADISM</td>
                                         <td className='text-danger' style={tdStyle}>0.0%</td>
                                         <td className='text-danger' style={tdStyle}>0.0%</td>
                                    </tr>
                                    <tr>
                                         <td colspan="5" style={mystyle}>PROGRESS:</td>
                                         <td className='' style={tdStyle}>0.0%</td>
                                    </tr>
                                    <tr>
                                         <td colspan="12"><div style={{height:'15px', background:'gray'}}></div></td>
                                    </tr>
                                    <tr>
                                         <td colspan="5" style={mystyle}>AVERAGE SCORE</td>
                                         <td className='' style={tdStyle}>0.0%</td>
                                    </tr>
                                    <tr>
                                         <td colspan="12"><div style={{height:'15px', background:'gray'}}></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                         <div className="attestation_card"><b><p style={{color: "#f4777c", paddingLeft: '.6rem'}}>Vous ne répondez pas aux critères requis pour obtenir votre certificat. Vous n'avez pas suivi 100% des cours. Vous n'avez pas validé 80% de bonnes réponses à toutes les évaluations.</p></b></div>
                         <div className="attestation_card"><b><p style={{color: "#08f26e", marginBottom: '3rem', paddingLeft: '.6rem'}}>Félicitations pour vos performances vous pouvez maintenant obtenir votre certificat de pentester certifié cyberzone</p></b></div>
                     </div>
                </div>

                <Footer destination="/legalnotice" />

            </main>
        </>
    );
}

export default AttestationContent;


const mystyle = {
    fontWeight: 'bold'
  };
const tdStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold'
}