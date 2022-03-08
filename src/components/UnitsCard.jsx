import React from 'react';
import { FaStar, FaRegClock } from "react-icons/fa";

function UnitsCard(props){
    return(
        <>
           <div className="card">
                 <img className="card_image" src={props.image} />
                 <div className="Divider_line"></div>
                 <div className="card_body">
                     <h3 className="card_module">{props.module_name}</h3>
                     <h2 className="card_title">{props.title}</h2>
                     <div className="card_info">
                         <div className="time">
                             <FaRegClock size='1.2rem' style={{marginTop: ".2rem"}} color='#0b426a'/>
                             <div><p className='time_passed'>Temps passé : 00:00:00</p></div>
                         </div>
                         <div className='score'>
                             <FaStar size='1.3rem' color='#0b426a'/>
                             <div><p className='rating'>Score : <span style={{color: "red"}}>0%</span></p></div>
                         </div>
                     </div>
                     <div className='unit_buttons'>
                         <button style={{marginRight: '1rem', minWidth: "10rem"}} className="card_btn unit_btn unit_btn1">Button</button>
                         <button style={{minWidth: "10rem"}} className="card_btn unit_btn unit_btn2">Button</button>
                     </div>
                 </div>
           </div>
        </>
    );
}


export default UnitsCard;