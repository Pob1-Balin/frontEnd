import React, { useState } from 'react';
import { FaChevronCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from '../../config'
import '../admin.css'
import Modal from 'react-bootstrap/Modal';

function Modules({ id, image, title, module_name, timePassed, score, service_id, refresh, setRefresh }) {
  const props = {};
  props.id = id; props.image = image; props.title = title; props.module_name = module_name; props.timePassed = timePassed; props.score = score; props.service_id = service_id;
  const [lgShow, setLgShow] = useState(false); 
  const navigate = useNavigate();
  const deleteService = () => {
    axios
        .delete(`${API}/module/${id}`)
        .then((res) => {
            if (res.status === 200) {
              setLgShow(false)
              setRefresh(refresh + 1)
            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
}

const moveto = () => {
  localStorage.setItem('redirectmod', true);
  navigate("/units", {state:{...props}});
}
const moveEdit = () => {
  localStorage.setItem('redirecteditserv', true);
  navigate("/editmodule", {state:{...props}});
}
  return (
    <>
      <div className="card">
        <img className="card_image" src={`${API}/images/${props.image}`} />
        <div className="card_body">
          <h3 className="card_module">{props.module_name}</h3>
          <h2 className="card_title">{props.title}</h2>

          <Modal size="md" show={lgShow} onHide={() => setLgShow(false)}>
              <Modal.Header>
                  <h5 className="modal-title" id="exampleModalLabel">Supprimer le module</h5>
              </Modal.Header>
              <Modal.Body>
                  <div style={{margin:"-1rem"}} className="modal-body">
                      <p style={{color: "gray"}}>Êtes-vous sûr de vouloir supprimer définitivement ce module ?</p>
                  </div>
              </Modal.Body>
              <Modal.Footer>
                  <div style={{margin:"-1rem"}} className='modal-footer'>
                      <button type="button" class="btn btn-danger mr-1" onClick={() => setLgShow(false)} >Fermé</button>
                      <button type="submit" class="btn" style={{backgroundColor: "#3363ad", color:"white"}} onClick={deleteService}>Oui</button>
                  </div>
                  
              </Modal.Footer>
          </Modal>

          {/*-- Modal =====*/}
          <div class="modal fade" id="bl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Désactiver le module</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                   Êtes-vous sûr de vouloir désactiver ce module ?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Fermé</button>
                    <button type="submit" name="delete_service" class="btn" style={{backgroundColor: "#3363ad", color:"white"}}>Oui</button>
                </div>
              </div>
            </div>
          </div>

          <div class="product-buttons" style={{ marginTop: '1.3rem'}}>
            <a onClick={moveEdit} href="#" style={{ textDecoration: 'none' }}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-success">Éditer</button></a>
            <button type="button" class="button-default cart-btn mr-1 mt-1 block" data-toggle="modal" style={{outline:"none", border:"none", boxShadow:"none"}} data-target="#bl">Désactiver</button>
            <button type="button" class="button-default cart-btn btn-danger mt-1" data-toggle="modal" style={{outline:"none", border:"none", boxShadow:"none"}} onClick={() => setLgShow(true)} >Effacer</button>
          </div>
          <a onClick={() => moveto()} href="#" style={{ textDecoration: "none" }}>
            <div className='module_units_button' style={{ marginTop: "1.2rem", marginBottom: '-1.3rem' }}>
                <FaChevronCircleRight size='1rem' style={{ marginTop: '.5rem', marginLeft:".3rem" }} />
                <p style={{ paddingLeft: ".2rem", paddingTop: ".25rem", fontSize: '.9rem' }}>Unités</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}


export default Modules;