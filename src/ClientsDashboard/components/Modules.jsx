import React from 'react';
import { FaStar, FaRegClock, FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { API } from '../../config'

function Modules(props){
    return(
        <>
             <div className="card" data-aos="zoom-in-down" data-aos-offset="50" style={{marginBottom:"1rem"}}>
                 <img className="card_image" src={`/api/v1/images/${props.image}`} />
                 <div className="card_body">
                     <h3 className="card_module">{props.module_name}</h3>
                     <h2 className="card_title">{props.title}</h2>
                     <div>{props.name}</div>
                     <div style={{marginTop: "1rem"}} className="card_info">
                         <div className="time">
                             <FaRegClock size='.9rem' style={{marginTop: ".2rem"}} color='#0b426a'/>
                             <div><p className='time_passed'>Temps passé: {props.timePassed}</p></div>
                         </div>
                         <div className='score'>
                             <FaStar style={{paddingTop: ".2rem"}} size='1rem' color='#0b426a'/>
                             <div className='score1'><p className='rating'>Score: {props.score}%</p></div>
                         </div>
                    </div>

                    <Link  to='/unitsclients' state={props} style={{textDecoration: "none"}}>
                        <div className='module_units_button' style={{ marginTop: "1rem", marginBottom: '-1.3rem' }}>
                            <FaChevronCircleRight size='1rem' style={{ marginTop: '.5rem', marginLeft:".3rem" }} />
                            <p style={{ paddingLeft: ".2rem", paddingTop: ".25rem", fontSize: '.8rem' }}>Unités</p>
                        </div>
                    </Link>

                   
                 </div>
             </div>
        </>
    );
}

export default Modules;