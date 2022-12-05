import React from 'react';
import '../../AdminDashboard/admin.css'
function SiteFooter(){
    return(
        <>
            <div className="site-footer" style={{backgroundColor: "#3363ad", color:'white', textAlign:'center', height: "4rem",  padding: "2rem", paddingTop: "1.1rem"}}>
                 <p style={{fontStyle:'bold', fontWeight:'550'}}>Footer content here</p>
            </div>
        </>
    );
}

export default SiteFooter;