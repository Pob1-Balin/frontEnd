import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddModel.css'
function UnitImageCardSelect(props){
  const navigate = useNavigate();
  const link = props.link;
  const unitID = props.unitID;
  const handleClick = (event) => {
    navigate(link, {state:{id:unitID}});
  }
  return(
    <>
       <div className="card-image-container">
           {/* <a href={props.link}><img width="345" className="select-card_image" src={props.image} /></a> */}
           {/* <Link to={props.link} state={props} ><img width="345" className="select-card_image" src={props.image} /></Link> */}
           <div onClick={handleClick} data-dismiss="modal"  ><img width="345" className="select-card_image" src={props.image} /></div>
       </div>
    </>
  );
}

export default UnitImageCardSelect;








