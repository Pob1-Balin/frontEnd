import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return(
        <>
            <div className="footer" style={{backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", height: "3.4rem", marginLeft: "-3rem", marginRight: "-2rem", padding: "2rem", paddingTop: "1.1rem"}}>
                 <p className='copy-right' style={{color: "#686868"}}><b>&copy; 2022 Cyberzone Academy</b></p>
                 <p style={{color: "#686868"}}><b><Link className="Mentions-footer" style={{textDecoration: 'none'}} to={props.destination}>Mentions légales</Link></b></p> 
            </div>
        </>
    );
}


export default Footer;