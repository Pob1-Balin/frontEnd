import React from "react";
import "../admin.css";
import Footer from '../components/Footer'

function SpecificClientContent(){
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
                                                <li style={{fontSize:'1rem', color:'gray'}}><span class="bread-blod">Specific Client</span></li>
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
                                         <h4 style={{color:'gray'}}>Clients Name</h4>
                                     </div>
                                    <div class="asset-inner">
                                        <table>
                                            <tr>
                                                <th>No</th>
                                                <th>Services</th>
                                                <th>Attestation</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Name of service</td>
                                                <td>
                                                     <button class="pd-setting btn-info">View</button>
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

export default SpecificClientContent;