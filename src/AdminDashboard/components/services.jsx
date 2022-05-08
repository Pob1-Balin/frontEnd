import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {API} from '../../config'
import { useState, useEffect } from "react";

function Services(props){
    const id = props.id
    let navigate = useNavigate();
    const deleteService = () => {
    
        axios
          .delete(`${API}/service/${id}`)
          .then((res) => {
            if (res.status === 200) {
              alert("Student successfully deleted");
              // window.location.reload();
              console.log(`${API}/service/${id}`)
              navigate('/services')
            } else Promise.reject();
          })
          .catch((err) => alert("Something went wrong"));
      }

    return(
        <>

                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12" >
                            <div class="courses-inner mg-t-30">
                                <div class="courses-title">
                                    <a href="#"><img src="./images/Cature.png" alt=""/></a>
                                    <h2>{props.service_name}</h2>
                                </div>
                                <div class="courses-alaltic" style={{paddingLeft:".3rem", fontSize:'1rem'}}>
                                    <span class="cr-ic-r"><span class="course-icon">XAF</span> {props.service_amount}</span>
                                </div>
                                <div class="course-des" style={{paddingLeft:".3rem"}}>
                                    <p><span></span> <b>Number of subscribers:</b> {props.number_of_subscribers}+</p>
                                    <p><span></span> <b>Short description:</b>{props.short_description}</p>
                                </div>

                                {/*-- Modal =====*/}
                                <div class="modal fade" id="del" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Delete Service</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                         Are you sure you want to permanently delete this service?
                                      </div>
                                      <div class="modal-footer">
                                        <form action="php-code.php" method="POST">
                                            <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>"/>
                                             <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                                             <button type="submit" name="delete_service" class="btn btn-info">Yes</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/*-- Modal =====*/}
                                <div class="modal fade" id="bl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Block Service</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                         Are you sure you want to block this service?
                                      </div>
                                      <div class="modal-footer">
                                        <form action="php-code.php" method="POST">
                                            <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>"/>
                                             <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                                             <button type="submit" name="delete_service" class="btn btn-info">Yes</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>



                                <div class="product-buttons"> 
                                     <Link to='/adminmodulepage' style={{textDecoration:'none'}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info">Dashboard</button></Link>
                                     <Link to='/editservice' style={{textDecoration:'none'}} state={props}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-success">Edit</button></Link>
                                    <button type="button" class="button-default cart-btn mr-1 mt-1 block" data-toggle="modal" data-target="#bl">Block</button>
                                    <button type="button" class="button-default cart-btn btn-danger mt-1" data-toggle="modal" data-target="#del" onClick={deleteService}>Delete</button>
                                </div>
                            </div>
                        </div>
           
        </>
    );
}


export default Services;








