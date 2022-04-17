import React from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'; 
function ClientsPageContent (){
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">

                <div class="breadcome-area clients-breadcome-area">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="breadcome-list single-page-breadcome">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="breadcome-heading">
                                                <form role="search" class="sr-input-func">
                                                <input type="text" placeholder="Search..." class="search-int col-xs-12 form-control mobile-menu-search"/>
                                                    <a href="#"><i class="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul class="breadcome-menu">
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span class="bread-blod">Clients</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-status mg-b-15 clients-product-status">
                     <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-status-wrap drp-lst">
                                    <div class="add-product">
                                         <h4 style={{color:'gray'}}>Clients List</h4>
                                         <a style={{background:'#4ab2cc'}} href="addclients">Add Clients</a>
                                     </div>
                                    <div class="asset-inner">
                                        <table>
                                            <tr>
                                                <th>Name</th>
                                                <th>Gender</th>
                                                <th>Country</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Status</th>
                                                <th>Visit</th>
                                                <th>Setting</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Computer</td>
                                                <td>
                                                    <button class="pd-setting">Active</button>
                                                </td>
                                                <td>John Alva</td>
                                                <td>admin@gmail.com</td>
                                                <td>
                                                     <button class="pd-setting btn-info" disabled="true">Active</button>
                                                </td>
                                                <td>
                                                     <Link to='/specificclient' style={{textDecoration:'none'}}><button class="pd-setting btn-info">View</button></Link>
                                                     
                                                </td>
                                                <td>

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
                                                 


                                                    <Link to='/editclient'><button class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                                                    <button class="pd-setting-ed" data-toggle="modal" data-target="#bl"><i class="fa fa-stop-circle-o" aria-hidden="true"></i></button>
                                                    <button class="pd-setting-ed" data-toggle="modal" data-target="#del"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Mechanical</td>
                                                <td>
                                                    <button class="ps-setting">Paused</button>
                                                </td>
                                                <td>John Alva</td>
                                                <td>admin@gmail.com</td>
                                                <td>
                                                     <button class="pd-setting btn-secondary" disabled="true">Not Active</button>
                                                </td>
                                                <td>
                                                     <button class="pd-setting btn-secondary">Active</button>
                                                </td>
                                                <td>
                                                    <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                                    <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Mechanical</td>
                                                <td>
                                                    <button class="ps-setting">Paused</button>
                                                </td>
                                                <td>John Alva</td>
                                                <td>admin@gmail.com</td>
                                                <td>
                                                     <button class="ds-setting" disabled="true">Blocked</button>
                                                </td>
                                                <td>
                                                     <button class="pd-setting">Active</button>
                                                </td>
                                                <td>
                                                    <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                                    <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="custom-pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>

                 <Footer/>
            </main>

        </>
    )
}

export default ClientsPageContent;