import React from 'react';
import { FaStar, FaRegClock, FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Modules(props){
    return(
        <>
           <div className="card" data-aos="zoom-in-down" data-aos-offset="400">
                 <img className="card_image" src={props.image}/>
                 <div className="card_body">
                     <h3 className="card_module">{props.module_name}</h3>
                     <h2 className="card_title">{props.title}</h2>
                     <div style={{marginTop: "1rem"}} className="card_info">
                         <div className="time">
                             <FaRegClock size='.9rem' style={{marginTop: ".2rem"}} color='#0b426a'/>
                             <div><p className='time_passed'>Temps passé :{props.timePassed}</p></div>
                         </div>
                         <div style={{marginTop: "-.7rem"}} className='score'>
                             <FaStar style={{paddingTop: ".2rem"}} size='1rem' color='#0b426a'/>
                             <div className='score1'><p className='rating'>Score : {props.score}%</p></div>
                         </div>
                     </div>
{/* to={props.module_page} */}
                     <Link  to='/unitsclient' style={{textDecoration: "none"}} state={props.id}>
                        <div className='module_units_button' style={{marginTop: "1.8rem", marginBottom: '-1.5rem'}}>
                             <FaChevronCircleRight size='1.1rem' style={{marginTop: '4.5px'}} />
                             <p style={{paddingLeft: ".7rem", paddingTop: ".1rem", fontSize: '.7rem'}}>View Units</p>
                        </div>
                     </Link>
                 </div>
           </div>
        </>
    );
}


export default Modules;