import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {API} from '../../config'
import Modal from 'react-bootstrap/Modal';
function Modules(props){
    const [lgShow, setLgShow] = useState(false); 
    const deleteUser = ()=>{
        axios.delete(`/users/${props.id}/delete`).then(()=>{
            window.location.reload()
        })
    }
   const userData = props.userData;
    return(
        <>
            <Modal size="md" show={lgShow} onHide={() => setLgShow(false)}>
                <Modal.Header>
                    <h5 className="modal-title" id="exampleModalLabel">Supprimer le client</h5>
                </Modal.Header>
                <Modal.Body>
                    <div style={{margin:"-1rem"}} className="modal-body">
                        <p style={{color: "gray"}}>Êtes-vous sûr de vouloir supprimer définitivement ce client ?</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div style={{margin:"-1rem"}} className='modal-footer'>
                        <button type="button" class="btn btn-danger mr-1" onClick={() => setLgShow(false)} >Fermé</button>
                        <button type="submit" class="btn" style={{backgroundColor: "#3363ad", color:"white"}} onClick={deleteUser}>Oui</button>
                    </div>
                    
                </Modal.Footer>
            </Modal>

             {/*-- Modal =====*/}
             <div className="modal fade" id="bl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                         <h5 className="modal-title" id="exampleModalLabel">Désactiver le client</h5>
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                         </button>
                    </div>
                    <div className="modal-body">
                         <p style={{color:"gray"}}>Voulez-vous vraiment désactiver ce client ?</p>
                    </div>
                    <div className="modal-footer">
                        <form action="php-code.php" method="POST">
                             <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>"/>
                             <button type="button" className="btn btn-danger mr-1" data-dismiss="modal">Fermé</button>
                             <button type="submit" name="delete_service" className="btn btn-info" style={{backgroundColor: "#3363ad", color:"white"}}>Oui</button>
                        </form>
                    </div>
                    </div>
                </div>
             </div>

            <tr>
                 <td style={{fontSize:".9rem"}}>{props.firstName} {props.lastName}</td>
                 <td style={{fontSize:".9rem"}}>{props.gender}</td>
                 <td style={{fontSize:".9rem"}}>{props.country}</td>
                 <td style={{fontSize:".9rem"}}>{props.phone}</td>
                 <td style={{fontSize:".9rem"}}>{props.email}</td>
                 <td style={{fontSize:".9rem"}}>{props.last_seen}</td> 
                 <td style={{fontSize:".9rem"}}><Link to='/specificclient' style={{textDecoration:'none'}} state={userData}><button style={{border:"none", outline:"none", boxShadow:"none"}} className="b pd-setting btn-info">Afficher le client</button></Link></td>
                 <td>
                     {/* <Link to='/editclient' state={props}><button className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link> */}
                     <button style={{outline:"none"}} className="pd-setting-ed" data-toggle="modal" data-target="#bl"><i className="fa fa-stop-circle-o" aria-hidden="true"></i></button>
                     <button style={{outline:"none"}} onClick={() => setLgShow(true)} className="pd-setting-ed" data-toggle="modal" data-target="#del"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                 </td>
            </tr>
        </>
    );
}

export default Modules;