import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from '../../config'
import Modal from 'react-bootstrap/Modal';

function UnitsCard({ id, unit_id, image, title, unit_name, timePassed, score, module_id, module_title, module_name, refresh, setRefresh, unit_content }){
  const props = {};
  props.id = id; props.unit_id = unit_id; props.image = image; props.title = title; props.unit_name = unit_name; props.timePassed = timePassed; props.score = score; props.module_id = module_id; props.module_title = module_title; props.module_name = module_name;
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(false); 
  const deleteService = () => {
    axios
        .delete(`${API}/unit/unit/${id}`)
        .then((res) => {
            if (res.status === 200) {
              setLgShow(false)
              setRefresh(refresh + 1)
            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
}

const moveto = () => {
  localStorage.setItem('redirectunit', true);
  navigate("/admintest", {state:{id: id, moduleId: props.module_id, moduleName: props.module_name, moduleTitle: props.module_title}});
}

const moveEdit = () => {
  localStorage.setItem('redirecteditserv', true);
  navigate("/editunit", {state:{...props}});
}
  return(
    <>
      <div className="card">
         <img className="card_image" src={`${API}/images/${props.image}`} />
         <div className="card_body">
           <h3 className="card_module">{props.unit_name}</h3>
           <h2 className="card_title">{props.title}</h2>

             {/*-- Modal =====*/}
             <Modal size="md" show={lgShow} onHide={() => setLgShow(false)}>
              <Modal.Header>
                  <h5 className="modal-title" id="exampleModalLabel">Supprimer l'unité</h5>
              </Modal.Header>
              <Modal.Body>
                  <div style={{margin:"-1rem"}} className="modal-body">
                      <p style={{color: "gray"}}>Êtes-vous sûr de vouloir supprimer définitivement cette unité ?</p>
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
                      <h5 class="modal-title" id="exampleModalLabel">Désactiver l'unité</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button> 
                    </div>
                    <div class="modal-body">
                        <p style={{color:"gray"}}>Êtes-vous sûr de vouloir désactiver cette unité ?</p>
                    </div>
                    <div class="modal-footer">
                      <form action="php-code.php" method="POST">
                          <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>"/>
                            <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Fermé</button>
                            <button type="submit" name="delete_service" class="btn" style={{backgroundColor: "#3363ad", color:"white"}} >Oui</button>
                      </form>
                    </div>
                  </div>
                </div>
             </div>

            <div class="product-buttons" style={{marginTop:'1.5rem', marginBottom:"-.5rem"}}>
               <Link to='/adminunitcontent' style={{textDecoration:'none'}} state={{id: id, title: props.title, content:unit_content, image:props.image}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info">Commencer</button></Link>
               <a href='#' onClick={moveEdit} style={{textDecoration:'none'}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-success">Éditer</button></a>
               <button type="button" class="button-default cart-btn mr-1 mt-1 block" data-toggle="modal" data-target="#bl" style={{outline:"none", border:"none", boxShadow:"none"}}>Désactiver</button>
               <button type="button" class="button-default cart-btn btn-danger mt-1 mr-1" style={{outline:"none", border:"none", boxShadow:"none"}} onClick={() => setLgShow(true)} >Effacer</button>
               <a onClick={() => moveto()} href='#' style={{textDecoration: "none"}}><button style={{backgroundColor: '#4ab2cc'}} type="button" class="button-default cart-btn mt-1 mr-1">Des questions</button></a>
            </div>
         </div>
      </div>
    </>
  );
}

export default UnitsCard;








