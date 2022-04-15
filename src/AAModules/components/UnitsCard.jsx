import React from 'react';
import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';

function UnitsCard(props){
    return(
        <>
           <div className="card">
                 <img className="card_image" src={props.image} />
                 <div className="card_body">
                     <h3 className="card_module">{props.module_name}</h3>
                     <h2 className="card_title">{props.title}</h2>
                     
                     <div className='units_buttons' style={{marginTop: "1rem"}}>
                            <Link to={'/unite'} style={{textDecoration: "none", marginRight: ".3rem"}}>
                                 <Button style={{fontSize: ".7rem", backgroundColor: '#4ab2cc'}}>To start</Button>{' '}
                            </Link>
                            <Link to={'/unite'} style={{textDecoration: "none", marginRight: ".3rem"}}>
                                 <Button style={{fontSize: ".7rem", backgroundColor: '#4ab2cc'}}>Edit</Button>{' '}
                            </Link>
                            <Link to={props.module_page} style={{textDecoration: "none"}}>
                                 <Button style={{fontSize: ".7rem", backgroundColor: 'red', boder:'none'}}>Delete</Button>{' '}
                            </Link>
                            <Link to={props.module_page} style={{textDecoration: "none"}}>
                                 <Button style={{fontSize: ".7rem", backgroundColor: '#4ab2cc'}}>Disable</Button>{' '}
                            </Link>
                            <Link to={props.module_page} style={{textDecoration: "none"}}>
                                 <Button style={{fontSize: ".7rem", backgroundColor: '#4ab2cc'}}>Assess yourself</Button>{' '}
                            </Link>
                         </div>
                 </div>
           </div>
        </>
    );
}


export default UnitsCard;








