import React, { useEffect } from 'react';
import './styey.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useLocation, Link} from 'react-router-dom'

function EmptyPageContent(props){
    const location = useLocation();
    var unitInfo = location.state
    const unit_id = unitInfo.id
    console.log(unit_id)
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <>
             <div data-aos="zoom-out-right" data-aos-offset="100" style={{height:"15rem", marginTop:"5rem", marginBottom:"5rem"}}>
                <div className="empty-card" style={{textAlign:"center", marginTop:"2rem", backgroundColor:"white", padding:"5rem"}}>
                    <div>
                        <p style={{color:"gray", fontSize:"1.2rem"}}>No content has been added for this page</p>
                    </div>
                    <div>
                        <Link to='#' state={{id:unit_id}}>
                            <button data-toggle="modal" data-target="#add" className="add-buttons">Add Content</button>
                            </Link>
                    </div>
                    {/* /unit-structures */}
                </div>
             </div>
        </>
    );
}


export default EmptyPageContent;

