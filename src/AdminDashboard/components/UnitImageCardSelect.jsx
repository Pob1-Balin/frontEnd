import React from 'react';
import { Link } from 'react-router-dom';
import './AddModel.css'
function UnitImageCardSelect(props){
  return(
    <>
       <div className="card-image-container">
           {/* <a href={props.link}><img width="345" className="select-card_image" src={props.image} /></a> */}
           <Link to={props.link} state={props} ><img width="345" className="select-card_image" src={props.image} /></Link>
       </div>
    </>
  );
}

export default UnitImageCardSelect;








