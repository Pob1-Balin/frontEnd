import React from 'react';
import { FaStar, FaRegClock, FaChevronCircleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API } from '../../config'
import '../admin.css'

function Modules(props) {
  const id = props.id;
  const title = props.title;
  const new_title = '#'+title;
  const deleteService = () => {
    axios
        .delete(`${API}/module/${id}`)
        .then((res) => {
            if (res.status === 200) {
                //  alert("Student successfully deleted");
                 window.location.reload();
                //  console.log(`${API}/service/${id}`)
            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
}
  return (
    <>
      <div className="card">
        <img className="card_image" src={`${API}/images/${props.image}`} />
        <div className="card_body">
          <h3 className="card_module">{props.module_name}</h3>
          <h2 className="card_title">{props.title}</h2>

          {/*-- Modal =====*/}
          <div class="modal fade" id={title} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Delete Module</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                   <p style={{color:"gray"}}>Are you sure you want to permanently delete this module?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                    <button type="submit" name="delete_service" class="btn btn-info" onClick={deleteService}>Yes</button>
                </div>
              </div>
            </div>
          </div>

          {/*-- Modal =====*/}
          <div class="modal fade" id="bl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Disable Module</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Are you sure you want to disable this module?
                </div>
                <div class="modal-footer">
                  <form action="php-code.php" method="POST">
                    <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>" />
                    <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                    <button type="submit" name="delete_service" class="btn btn-info">Yes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="product-buttons" style={{ marginTop: '1.5rem', marginBottom: "-.5rem" }}>
            <Link to='/editmodule' style={{ textDecoration: 'none' }} state={props}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-success">Edit</button></Link>
            <button type="button" class="button-default cart-btn mr-1 mt-1 block" data-toggle="modal" data-target="#bl">Disable</button>
            <button type="button" class="button-default cart-btn btn-danger mt-1" data-toggle="modal" data-target={new_title}  >Delete</button>
          </div>
          <Link to="/units" style={{ textDecoration: "none" }} state={props}>
            <div className='module_units_button' style={{ marginTop: "1.8rem", marginBottom: '-1.5rem' }}>
              <FaChevronCircleRight size='1.1rem' style={{ marginTop: '4.5px' }} />
              <p style={{ paddingLeft: ".7rem", paddingTop: ".1rem", fontSize: '.7rem' }}>View Units</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}


export default Modules;