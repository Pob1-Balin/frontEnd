import React from 'react';
function Footer(){
    return(
        <>
            <div className="footer admin-footer" style={{backgroundColor: "#3363ad", color:'white', textAlign:'center', height: "4rem", marginLeft: "-2rem", marginRight: "-2rem", padding: "2rem", paddingTop: "1.1rem"}}>
                 <p style={{fontStyle:'bold', fontWeight:'550'}}>Droits d'auteur © {(new Date().getFullYear())}</p>
            </div>
        </>
    );
}

export default Footer;