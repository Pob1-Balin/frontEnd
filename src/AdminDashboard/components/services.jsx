import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { API } from '../../config'

function Services(props) {
    const navigate = useNavigate();
    const [lgShow, setLgShow] = useState(false); 
    const [blockShow, setblockShow] = useState(false); 
     const id = props.service_id;
     const deleteService = () => {
        axios
            .delete(`/service/${id}/remove`)
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => {
            });
    }
    const moveto = () => {
        localStorage.setItem("servId", JSON.stringify(props.service_id));
        localStorage.setItem('redirectserv', true);
        navigate("/adminmodulepage", {state:{props, service_id: props.service_id}});
    }

    return (
        <>
            <div className="services_card" data-aos="zoom-in-down" data-aos-offset="50">
                <div style={{margin:"1.3rem"}}><img className="services_card_image" src={`/images/${props.image}`} /></div>
                <div className="card_body" style={{marginLeft:"1.3rem"}}>
                    <h2 className="card_title services_card_title" style={{marginTop:"-.5rem", fontSize:"1.1rem"}}>{props.service_name}</h2>
   
                    <div style={{marginLeft:"-.2rem"}}>
                        <div className="courses-alaltic" style={{ paddingLeft: ".3rem", fontSize: '1rem', color:"black"}}>
                            <span className="course_price" style={{fontWeight:"900"}}>{props.service_amount} <span className="course-icon">xaf</span></span>
                        </div>
                        <div className="course-des" style={{ paddingLeft: ".3rem" }}>
                            <p><b className='card_info' style={{marginTop:"-.3rem"}}>{props.short_description}</b></p>
                        </div>
                        <Modal size="md" show={lgShow} onHide={() => setLgShow(false)}>
                            <Modal.Header>
                                <h5 className="modal-title" id="exampleModalLabel">Supprimer le cours</h5>
                            </Modal.Header>
                            <Modal.Body>
                                <div style={{margin:"-1rem"}} className="modal-body">
                                    <p style={{color: "gray"}}>Êtes-vous sûr de vouloir supprimer définitivement ce cours ?</p>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div style={{margin:"-1rem"}} className='modal-footer'>
                                    <button type="button" class="btn btn-danger mr-1" onClick={() => setLgShow(false)} >Fermé</button>
                                    <button type="submit" class="btn" style={{backgroundColor: "#3363ad", color:"white"}} onClick={deleteService}>Oui</button>
                                </div>
                               
                            </Modal.Footer>
                        </Modal>

                        <Modal size="md" show={blockShow} onHide={() => setLgShow(false)}>
                            <Modal.Header>
                                <h5 className="modal-title" id="exampleModalLabel">Désactiver ce cours</h5>
                            </Modal.Header>
                            <Modal.Body>
                                <div style={{margin:"-1rem"}} className='modal-body'>
                                    <p style={{color: "gray"}}>Êtes-vous sûr de vouloir désactiver ce cours ?</p>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div style={{margin:"-1rem"}} className='modal-footer'>
                                    <button type="button" class="btn btn-danger mr-1" onClick={() => setblockShow(false)} >Fermé</button>
                                    <button type="submit" class="btn" style={{backgroundColor: "#3363ad", color:"white"}}>Oui</button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div className="product-buttons">
                         <button onClick={() => moveto()} type="button" className="button-default cart-btn mr-1 mt-1 btn-info">Modules</button>
                         <Link to='/editservice' style={{ textDecoration: 'none' }} state={props}><button type="button" className="button-default cart-btn mr-1 mt-1 btn-success">Éditer</button></Link>
                         <button type="button" className="button-default cart-btn mr-1 mt-1 block" style={{outline:"none", border:"none", boxShadow:"none"}} onClick={() => setblockShow(true)}>Bloquer</button>
                         <button type="button" style={{outline:"none", border:"none", boxShadow:"none"}} className="button-default cart-btn btn-danger mt-1" onClick={() => setLgShow(true)}>Effacer</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;








