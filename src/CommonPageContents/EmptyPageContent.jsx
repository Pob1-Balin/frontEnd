import React, { useEffect } from 'react';
import './styey.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaFileAlt } from "react-icons/fa";

function EmptyPageContent(props){
    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <>
             <div data-aos="zoom-out-right" data-aos-offset="100" style={{height:"15rem", marginTop:"-1.4rem", marginBottom:"18rem"}}>
                <div className="empty-card" style={{textAlign:"center", marginTop:"2rem", boxShadow:"none"}}>
                   <div style={{marginBottom: "2.8rem"}}>
                         <FaFileAlt color="#0d3360" size="3rem"/>
                   </div>
                    <div>
                        <p className='p1' style={{color:"gray",boxShadow:"none"}}>{props.text}</p>
                    </div>
                    <div>
                        <p className='p2' style={{color:"gray"}}>{props.directives}</p>
                    </div>
                </div>
             </div>
        </>
    );
}

export default EmptyPageContent;

