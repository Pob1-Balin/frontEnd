import React from 'react';
import { FaStar, FaRegClock, FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Modules(props){
    return(
        <>
           <div className="card">
                 <img className="card_image" src={props.image}/>
                 <div className="card_body">
                     <h3 className="card_module">{props.module_name}</h3>
                     <h2 className="card_title">{props.title}</h2>
                         <div className='units_buttons' style={{marginTop: "2rem"}}>
                            <Link to={'/editmodule1'} style={{textDecoration: "none", marginRight: ".3rem"}}>
                                 <Button style={{fontSize: ".7rem", backgroundColor: '#4ab2cc'}}>Edit</Button>{' '}
                            </Link>
                            <Link to={props.module_page} style={{textDecoration: "none"}}>
                                 <Button style={{fontSize: ".7rem", backgroundColor: 'red', boder:'none'}}>Delete</Button>{' '}
                            </Link>
                            <Link to={props.module_page} style={{textDecoration: "none"}}>
                                 <Button style={{fontSize: ".7rem", backgroundColor: '#4ab2cc'}}>Disable</Button>{' '}
                            </Link>
                         </div>

                     <Link to={props.module_page} style={{textDecoration: "none"}}>
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