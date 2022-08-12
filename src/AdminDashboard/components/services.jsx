import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from '../../config'

function Services(props) {
     const id = props.id;
     const service_name = props.service_name;
     const service = '#'+service_name;
     const deleteService = () => {
         alert("Are you sure you want to delete this service????")
        axios
            .delete(`${API}/service/${id}/remove`)
            .then((res) => {
                if (res.status === 200) {
                     window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    }


    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" >
                 <div className="courses-inner mg-t-30">
                     <div className="courses-title">
                         <a href="#"><img src={`${API}/images/${props.image}`} style={{height: "12rem", width:"20rem"}} alt="Service image" /></a>
                         <h2>{props.service_name}</h2>
                     </div>
                     <div className="courses-alaltic" style={{ paddingLeft: ".3rem", fontSize: '1rem', color:"black"}}>
                         <span className="cr-ic-r"><span className="course-icon">XAF</span> {props.service_amount}</span>
                     </div>
                     <div className="course-des" style={{ paddingLeft: ".3rem" }}>
                         <p><span></span> <b>Number of subscribers:</b> {props.number_of_subscribers}+</p>
                         <p><span></span> <b>Short description:</b>{props.short_description}</p>
                     </div>

                    {/*-- Modal =====*/}
                    <div className="modal fade" id={service_name} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Service</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                         <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                     <p style={{color: "gray"}}>Are you sure you want to permanently delete this service?</p>
                                </div>
                                <div className="modal-footer">
                                    <form>
                                         <input type="hidden" name="service_id" value={props.id} />
                                         <button type="button" className="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                                         <button type="submit" name="delete_service" className="btn btn-info" >Yes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-- Modal =====*/}
                    <div className="modal fade" id="bl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Block Service</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                         <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                     <p>Are you sure you want to block this service?</p>
                                </div>
                                <div className="modal-footer">
                                    <form action="php-code.php" method="POST">
                                         <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>" />
                                         <button type="button" className="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                                         <button type="submit" name="delete_service" className="btn btn-info">Yes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-buttons">
                         <Link to='/adminmodulepage' style={{ textDecoration: 'none' }} state={props}><button type="button" className="button-default cart-btn mr-1 mt-1 btn-info">Dashboard</button></Link>
                         <Link to='/editservice' style={{ textDecoration: 'none' }} state={props}><button type="button" className="button-default cart-btn mr-1 mt-1 btn-success">Edit</button></Link>
                         <button type="button" className="button-default cart-btn mr-1 mt-1 block" data-toggle="modal" data-target="#bl">Block</button>
                         <button type="button" className="button-default cart-btn btn-danger mt-1" data-toggle="modal" data-target={service} >Delete</button>
                    </div>
                 </div>
            </div>
        </>
    );
}

export default Services;








