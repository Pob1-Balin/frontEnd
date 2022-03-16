import React from 'react';
import { FaStar, FaRegClock, FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Modules(props){
    return(
<<<<<<< HEAD
        <>
=======
        <>  
>>>>>>> fc6b51d9057e886cbcbf8ad6cc6ca53f984dd042
           <div className="card">
                 <img className="card_image" src={props.image}/>
                 <div className="card_body">
                     <h3 className="card_module">{props.module_name}</h3>
                     <h2 className="card_title">{props.title}</h2>
                     <div style={{marginTop: "1.3rem"}} className="card_info">
                         <div className="time">
                             <FaRegClock size='1rem' style={{marginTop: ".2rem"}} color='#0b426a'/>
                             <div><p className='time_passed'>Temps passé : 00:00:00</p></div>
                         </div>
<<<<<<< HEAD
                         <div style={{marginTop: "-.5rem"}} className='score'>
=======
                         <div style={{marginTop: "-.3rem"}} className='score'>
>>>>>>> fc6b51d9057e886cbcbf8ad6cc6ca53f984dd042
                             <FaStar style={{paddingTop: ".2rem"}} size='1.1rem' color='#0b426a'/>
                             <div className='score1'><p className='rating'>Score : 0%</p></div>
                         </div>
                     </div>

                     <Link to={props.module_page} style={{textDecoration: "none"}}>
<<<<<<< HEAD
                        <div className='module_units_button' style={{marginTop: "1.8rem", marginBottom: '-1.5rem'}}>
                             <FaChevronCircleRight size='1.1rem' style={{marginTop: '4.5px'}} />
=======
                        <div className='module_units_button' style={{marginTop: "3rem"}}>
                             <FaChevronCircleRight size='1.6rem' />
>>>>>>> fc6b51d9057e886cbcbf8ad6cc6ca53f984dd042
                             <p style={{paddingLeft: ".7rem", paddingTop: ".1rem"}}>View Units</p>
                        </div>
                     </Link>
                 </div>
           </div>
        </>
    );
}


export default Modules;