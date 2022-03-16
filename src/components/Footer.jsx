import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <>
            <div className="footer" style={{backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", height: "3.4rem", marginLeft: "-2rem", marginRight: "-2rem", padding: "2rem", paddingTop: "1.1rem"}}>
                 <p style={{color: "#808181"}}><b>&copy; 2022 Cyberzone</b></p>
                 <p className="Mentions" style={{color: "#4b86c6"}}><b><Link style={{textDecoration: 'none'}} to='/legalnotice'>Mentions legales</Link></b></p> 
            </div>
        </>
    );
}


export default Footer;