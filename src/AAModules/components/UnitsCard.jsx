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

                       {/*-- Modal =====*/}
                       <div class="modal fade" id="del" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Delete Unite</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                         Are you sure you want to permanently delete this unite?
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
                                        <h5 class="modal-title" id="exampleModalLabel">Disable Unite</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                         Are you sure you want to disable this unite?
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

                     <div class="product-buttons" style={{marginTop:'1.5rem', marginBottom:"-.5rem"}}>
                         <Link to='/unite' style={{textDecoration:'none'}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info">To start</button></Link>
                         <Link to='/editunite' style={{textDecoration:'none'}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-success">Edit</button></Link>
                         <button type="button" class="button-default cart-btn mr-1 mt-1 block" data-toggle="modal" data-target="#bl">Disable</button>
                         <button type="button" class="button-default cart-btn btn-danger mt-1 mr-1" data-toggle="modal" data-target="#del">Delete</button>
                         <Link to='' style={{textDecoration: "none"}}><button style={{backgroundColor: '#4ab2cc'}} type="button" class="button-default cart-btn mt-1 mr-1">Assess yourself</button></Link>
                     </div>
                 </div>
           </div>
        </>
    );
}


export default UnitsCard;








