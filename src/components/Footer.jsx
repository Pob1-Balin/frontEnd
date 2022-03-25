import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <>
            <div className="footer" style={{backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", height: "3.4rem", marginLeft: "-2rem", marginRight: "-2rem", padding: "2rem", paddingTop: "1.1rem"}}>
                 <p style={{color: "#686868"}}><b>&copy; 2022 Cyberzone</b></p>
                 <p style={{color: "#686868"}}><b><Link className="Mentions-footer" style={{textDecoration: 'none'}} to='/legalnotice'>Mentions legales</Link></b></p> 
            </div>
        </>
    );
}


export default Footer;