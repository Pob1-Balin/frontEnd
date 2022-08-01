import React from 'react';
import { FaStar, FaRegClock, FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function UnitsCard(props){
  return(
    <>
       <div className="card">
           <img className="card_image" src={props.image} />
           <div className="card_body">
               <h3 className="card_module">{props.module_name}</h3>
               <h2 className="card_title">{props.title}</h2>
                <div style={{marginTop: "1rem"}} className="card_info">
                  <div className="time">
                      <FaRegClock size='.9rem' style={{marginTop: ".2rem"}} color='#0b426a'/>
                      <div><p className='time_passed'>Temps passé :{props.timePassed}</p></div>
                  </div>
                  <div className='score'>
                      <FaStar style={{paddingTop: ".2rem"}} size='1rem' color='#0b426a'/>
                      <div className='score1'><p className='rating'>Score : {props.score}%</p></div>
                  </div>
                </div>
                <div class="product-buttons" style={{marginTop:'1.5rem', marginBottom:"-.5rem"}}>
                    <Link to='/unitcontent' style={{textDecoration:'none'}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info">To start</button></Link>
                    <Link to='/test' style={{textDecoration: "none"}} state={props}><button style={{backgroundColor: '#4ab2cc'}} type="button" class="button-default cart-btn mt-1 mr-1">Assess yourself</button></Link>
                </div>
           </div>
       </div>
    </>
  );
}


export default UnitsCard;








