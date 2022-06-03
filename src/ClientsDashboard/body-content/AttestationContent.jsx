import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function AttestationContent (){
    return(
        <>
            <main className=" px-md-4">
                <div style={{marginTop: '-.5rem'}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <h1 className="heading" style={{color: '#0d3360'}}>Attestation page</h1>
                </div>
                <div className="Home_navigation">
                     <p><Link className="return-home" style={{textDecoration: 'none'}} to='/'><span className="home">Home /</span></Link> <span>Attestation</span></p>
                </div>
                <div className="profile_wrapper">
                    <div className="card profile_card attestation_card" style={{padding: "3rem"}}>
                        <div className="attestation_card"><b><p style={{fontSize: '.9rem', paddingLeft: '.6rem'}}>To obtain a certificate of achievement, you must <span style={{color: "#66b5ff"}}>follow all of the modules and obtain a score of over 80% in the assessments</span> of each of the units.</p></b></div>
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
                         <div className="attestation_card"><b><p style={{color: "#f4777c", marginBottom: '3rem', fontSize: '.9rem', paddingLeft: '.6rem'}}>You do not meet the criteria required to edit your certificate. You have not followed 100% of the courses. You have not validated 80% of correct answers to all the assessments.</p></b></div>
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