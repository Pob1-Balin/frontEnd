import React from "react";
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import '../../App.css'
import { NavLink } from "react-router-dom";

function FindingsContent(){
    return(
        <>
            <div className="ms-sm-auto Header_Section ml-2">

                <div className="Unit-Dashboard-wrapper">
                     <HeaderSection destination='Leçon 1 - Findings' header_title='To know more' />
                </div>
                <div className="bg-black" style={{height:'3px', marginTop:'-2.3%', marginLeft:'-2%'}}></div>
                

                <div className='bg-white' style={{paddingLeft:'15%', marginLeft:'-2%'}}>
                    <div  style={{paddingLeft:'20%', marginTop:'0%', paddingRight:'0%'}}>
                        <img src="./images/find.png" alt="" width='60%'/>
                        
                    </div>

                    <div style={{marginRight:'15%'}}>
                        <div className="mt-3">
                                <NavLink to={'/'} style={{marginLeft:'0%', color:'black', fontSize:'1rem'}}>Contact Line</NavLink>
                        </div>
                        <hr />

                        <div>
                            <h4 className="fw-bold fs-5">Adoption de la directive Network and Information Security (NIS) : L'ANSSI, pilote de la transposition en France</h4>
                            <img src="./images/text.png" alt="" />
                        </div>

                        <div className="mt-3">
                                <NavLink to={'/'} style={{marginLeft:'0%', color:'black', fontSize:'1rem'}}>Contact Line</NavLink>
                        </div>
                        <hr />
                        
                        <div>
                            <h4 className="fw-bold fs-5">Règlement européen sur la protection des données : ce qui change pour les professionnels</h4>
                            <div style={{textAlign:'center'}}>
                                <img src="./images/findinglast.png" alt="" />
                            </div>
                        </div>

                        <div className="mt-" style={{marginTop:'5%'}}>
                            <NavLink to={'/'} style={{marginLeft:'0%', color:'black', fontSize:'1rem'}}>Contact Line</NavLink>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-5">
                                <p style={{lineHeight:'20px'}}>Vous avez terminé l'unité 1, <br /><br />
                                    vous pouvez à présent vous évaluer !<br /><br />

                                    Cliquez sur le bouton QUITTER en haut à droite de <br /><br />cette page.</p>
                            </div>

                            <div className="col-md-6">
                                <img src="./images/findPic.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>
        </>
    )
}

export default FindingsContent;