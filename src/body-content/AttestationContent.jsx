import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import { Form, Row, Col} from "react-bootstrap";
import { FaLine } from "react-icons/fa";

function AttestationContent (){
    return(
        <>
            <main className=" ms-sm-auto px-md-5 ml-4 mt-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Attestation page</h1>
                    
                </div>

                <div className="profile_navigation">
                     <p><Link style={{textDecoration: 'none'}} to='/'><span style={{color: "#f2a654"}} className="home">Home</span></Link> <span style={{color: "#f2a654"}}>/</span> <span>My certificate</span></p>
                </div>

            
                <div className="profile_wrapper">
                     <div className="card profile_card attestation_card" style={{padding: "3rem", paddingBottom: ""}}>
                         <div className="attestation_card"><b><p>To obtain a certificate of achievement, you must <span style={{color: "#66b5ff"}}>follow all of the modules and obtain a score of over 80% in the assessments</span> of each of the units.</p></b></div>
                         
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
                         
                         <div className="attestation_card"><b><p style={{color: "#f4777c"}}>You do not meet the criteria required to edit your certificate. You have not followed 100% of the courses. You have not validated 80% of correct answers to all the assessments.</p></b></div>
                     </div>
                </div>

                <div className="footer" style={{backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", height: "3.4rem", marginLeft: "-2rem", marginRight: "-2rem", padding: "2rem", paddingTop: "1.1rem"}}>
                     <p style={{color: "#808181"}}><b>&copy; 2022 Cyberzone</b></p>
                     <p style={{color: "#4b86c6"}}><b>Mentions legales</b></p> 
                </div>

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

