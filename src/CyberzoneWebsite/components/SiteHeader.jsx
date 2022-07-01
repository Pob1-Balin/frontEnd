import React from 'react';
import '../../AdminDashboard/admin.css'
function SiteHeader(){
    return(
        <>
            <div className="site-header" style={{marginRight:"-3rem", backgroundColor: "#3363ad", color:'white', textAlign:'center', height: "5rem", padding: "2rem", paddingTop: "1.7rem", marginTop:"-.2rem", width:"cover"}}>
                 <p style={{fontStyle:'bold', fontWeight:'550'}}>Header content here</p>
            </div>
        </>
    );
}

export default SiteHeader;