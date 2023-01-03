import React, { useState, useEffect } from 'react';
import { FaStar, FaRegClock, FaChevronCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { API } from '../../config'
import axios from 'axios';

function Modules(props){
    const navigate = useNavigate();
    const module_id = props.id;
    var timeSpent = 0;
    var moduleScore = 0;
    var units = [];
    props.currentUserUnits.map((item) => {
        if(item.module_id === module_id){
            units = [...units, item]
        }
    });

    units.map((item) => {
        timeSpent += parseInt(item.unit_time_spent);
        moduleScore += parseInt(item.unit_score);
    })
    if(parseInt(units.length) != 0){
        moduleScore = moduleScore / parseInt(units.length);
    }

    const hours = Math.floor((timeSpent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeSpent % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeSpent % (1000 * 60)) / 1000);

    const moveto = () => {
        localStorage.setItem('redirectmod', true);
        navigate("/unitsclients", {state:{...props}});
    }
    return(
        <>
             <div className="card" data-aos="zoom-in-down" data-aos-offset="50" style={{marginBottom:"1rem"}}>
                 <img className="card_image" src={`${API}/images/${props.image}`} />
                 <div className="card_body">
                     <h3 className="card_module">{props.module_name}</h3>
                     <h2 className="card_title">{props.title}</h2>
                     <div>{props.name}</div>
                     <div style={{marginTop: "1rem"}} className="card_info">
                         <div className="time">
                             <FaRegClock size='.9rem' style={{marginTop: ".2rem"}} color='#0b426a'/>
                             <div><p className='time_passed'>Temps passé: {hours + "h " + minutes + "m " + seconds + "s"}</p></div>
                         </div>
                         <div className='score'>
                             <FaStar style={{paddingTop: ".2rem"}} size='1rem' color='#0b426a'/>
                             <div className='score1'><p className='rating'>Score: {moduleScore}%</p></div>
                         </div>
                    </div>

                    <a onClick={moveto} style={{textDecoration: "none"}}>
                        <div className='module_units_button' style={{ marginTop: "1rem", marginBottom: '-1.3rem' }}>
                            <FaChevronCircleRight size='1rem' style={{ marginTop: '.5rem', marginLeft:".3rem" }} />
                            <p style={{ paddingLeft: ".2rem", paddingTop: ".25rem", fontSize: '.8rem' }}>Unités</p>
                        </div>
                    </a>
                 </div>
             </div>
        </>
    );
}

export default Modules;