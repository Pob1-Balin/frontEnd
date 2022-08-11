import React, { useEffect } from 'react';
import './styey.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import file from "./file-regular.svg"

function EmptyPageContent(props){
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <>
             <div data-aos="zoom-out-right" data-aos-offset="100" style={{height:"15rem", marginTop:"-2.5rem", marginBottom:"16rem"}}>
                <div className="empty-card" style={{textAlign:"center", marginTop:"2rem",padding:"5rem", boxShadow:"none"}}>
                   <div style={{marginBottom: "2.8rem"}}>
                         <img src={file} height="30" width="30" />
                   </div>
                    <div>
                        <p style={{color:"gray", fontSize:"1.5rem", boxShadow:"none"}}>{props.text}</p>
                    </div>
                    <div>
                        <p style={{color:"gray", fontSize:"1rem"}}>{props.directives}</p>
                    </div>
                </div>
             </div>
        </>
    );
}


export default EmptyPageContent;

