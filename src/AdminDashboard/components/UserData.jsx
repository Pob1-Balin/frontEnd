import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import {API} from '../../config'
function Modules(props){
    const deleteUser = ()=>{
        axios.delete(`${API}/users/${props.id}/delete`).then(()=>{
            window.location.reload()
        })
    }
    return(
        <>
             {/*-- Modal =====*/}
             <div className="modal fade" id="del" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                     <div className="modal-content">
                     <div className="modal-header">
                         <h5 className="modal-title" id="exampleModalLabel">Delete Client</h5>
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                         </button>
                    </div>
                    <div className="modal-body">
                         <p>Are you sure you want to permanently delete this client?</p>
                    </div>
                    <div className="modal-footer">
                        <form>
                             <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>"/>
                             <button type="button" className="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                             <button type="submit" name="delete_user" className="btn btn-info">Yes</button>
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
                         <h5 className="modal-title" id="exampleModalLabel">Block Client</h5>
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                         </button>
                    </div>
                    <div className="modal-body">
                         <p>Are you sure you want to block this client?</p>
                    </div>
                    <div className="modal-footer">
                        <form action="php-code.php" method="POST">
                             <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>"/>
                             <button type="button" className="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                             <button type="submit" name="delete_service" className="btn btn-info">Yes</button>
                        </form>
                    </div>
                    </div>
                </div>
             </div>

            <tr>
                 <td>{props.firstName} {props.lastName}</td>
                 <td>{props.gender}</td>
                 <td>{props.country}</td>
                 <td>{props.phone}</td>
                 <td>{props.email}</td>
                 <td><button className="b pd-setting btn-info" disabled="true">Active</button></td>
                 <td><Link to='/specificclient' style={{textDecoration:'none'}}><button className="b pd-setting btn-info">View</button></Link></td>
                 <td>
                     <Link to='/editclient' state={props}><button className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                     <button className="pd-setting-ed" data-toggle="modal" data-target="#bl"><i className="fa fa-stop-circle-o" aria-hidden="true"></i></button>
                     <button onClick={deleteUser} className="pd-setting-ed" data-toggle="modal" data-target="#del"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                 </td>
            </tr>
        </>
    );
}

export default Modules;