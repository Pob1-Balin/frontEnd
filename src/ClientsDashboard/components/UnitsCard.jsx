import React from 'react';
import { FaStar, FaRegClock, FaChevronCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from '../../config'

function UnitsCard(props){
  const navigate = useNavigate();

  const hours = Math.floor((props.timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((props.timePassed % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((props.timePassed % (1000 * 60)) / 1000);
  const moveto = () => {
    localStorage.setItem('redirectunit', true);
    navigate("/test", {state:{...props}});
  }
  return(
    <>
       <div className="card">
           <img className="card_image" src={`${API}/images/${props.image}`} />
           <div className="card_body">
               <h3 className="card_module">{props.unit_name}</h3>
               <h2 className="card_title">{props.title}</h2>

                <div style={{marginTop: "1rem"}} className="card_info">
                  <div className="time">
                      <FaRegClock size='.9rem' style={{marginTop: ".2rem"}} color='#0b426a'/>
                      <div><p className='time_passed'>Temps passé: {hours + "h " + minutes + "m " + seconds + "s"}</p></div>
                  </div>
                  <div className='score'>
                      <FaStar style={{paddingTop: ".2rem"}} size='1rem' color='#0b426a'/>
                      <div className='score1'><p className='rating'>Score: {props.score}%</p></div>
                  </div>
                </div>
                <div class="product-buttons" style={{marginTop:'1.5rem', marginBottom:"-.5rem"}}>
                    <Link to='/unitcontent' style={{textDecoration:'none'}} state={{id:props.id, serviceId:props.serviceID, moduleId:props.modulesID, currentUserUnits:props.currentUserUnits}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info">To start</button></Link>
                    <a onClick={moveto} href="#" style={{textDecoration: "none"}}><button style={{backgroundColor: '#4ab2cc'}} type="button" class="button-default cart-btn mt-1 mr-1">Assess yourself</button></a>
                </div>
           </div>
       </div>
    </>
  );
}


export default UnitsCard;








