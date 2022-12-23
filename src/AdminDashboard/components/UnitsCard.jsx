import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from '../../config'

function UnitsCard(props){
  const navigate = useNavigate();
  const id = props.id;
  const title = props.title;
  const new_title = '#'+title;
  const deleteService = () => {
    axios
        .delete(`/unit/unit/${id}`)
        .then((res) => {
            if (res.status === 200) {
                //  alert("Student successfully deleted");
                 window.location.reload();
                //  console.log(`${API}/service/${id}`)
            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
}

const moveto = () => {
  localStorage.setItem('redirectunit', true);
  navigate("/admintest", {state:{id: id, moduleId: props.module_id, moduleName: props.module_name, moduleTitle: props.module_title}});
}
  return(
    <>
      <div className="card">
         <img className="card_image" src={`/api/v1/images/${props.image}`} />
         <div className="card_body">
           <h3 className="card_module">{props.unit_name}</h3>
           <h2 className="card_title">{props.title}</h2>

             {/*-- Modal =====*/}
             <div class="modal fade" id={title} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Supprimer Unir</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                      <p style={{color:"gray"}}>Êtes-vous sûr de vouloir supprimer définitivement cette unité ?</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Fermé</button>
                    <button type="submit" name="delete_service" class="btn" style={{backgroundColor: "#3363ad", color:"white"}} onClick={deleteService}>Oui</button>
                  </div>
                </div>
              </div>
             </div>

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
               <Link to='/adminunitcontent' style={{textDecoration:'none'}} state={{id: id}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info">Commencer</button></Link>
               <Link to='/editunit' style={{textDecoration:'none'}} state={props}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-success">Éditer</button></Link>
               <button type="button" class="button-default cart-btn mr-1 mt-1 block" data-toggle="modal" data-target="#bl" style={{outline:"none", border:"none", boxShadow:"none"}}>Désactiver</button>
               <button type="button" class="button-default cart-btn btn-danger mt-1 mr-1" data-toggle="modal" data-target={new_title} style={{outline:"none", border:"none", boxShadow:"none"}} >Effacer</button>
               <a onClick={() => moveto()} href='#' style={{textDecoration: "none"}}><button style={{backgroundColor: '#4ab2cc'}} type="button" class="button-default cart-btn mt-1 mr-1">Des questions</button></a>
            </div>
         </div>
      </div>
    </>
  );
}

export default UnitsCard;








