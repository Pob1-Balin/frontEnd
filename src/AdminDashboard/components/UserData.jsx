import React from 'react';
import { Link } from 'react-router-dom'; 
function Modules(props){
    return(
        <>
             {/*-- Modal =====*/}
             <div class="modal fade" id="del" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                     <div class="modal-content">
                     <div class="modal-header">
                         <h5 class="modal-title" id="exampleModalLabel">Delete Client</h5>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                         </button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to permanently delete this client?
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
                        <h5 class="modal-title" id="exampleModalLabel">Block Client</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to block this client?
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
             <tr>
                 <td>{props.name}</td>
                 <td>{props.gender}</td>
                 <td>{props.country}</td>
                 <td>{props.phone}</td>
                 <td>{props.email}</td>
                 <td><button class="pd-setting btn-info" disabled="true">Active</button></td>
                <td><Link to='/specificclient' style={{textDecoration:'none'}}><button class="pd-setting btn-info">View</button></Link></td>
                <td>
                     <Link to='/editclient'><button class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                     <button class="pd-setting-ed" data-toggle="modal" data-target="#bl"><i class="fa fa-stop-circle-o" aria-hidden="true"></i></button>
                     <button class="pd-setting-ed" data-toggle="modal" data-target="#del"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </td>
            </tr>
        </>
    );
}


export default Modules;