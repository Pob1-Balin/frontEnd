import React from "react";
import "../admin.css";
import Footer from '../components/Footer'

function SpecificClientContent(){
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                 <div className="breadcome-area clients-breadcome-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="breadcome-list single-page-breadcome">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="breadcome-heading">
                                                <form role="search" className="sr-input-func">
                                                <input type="text" placeholder="Search..." className="search-int col-xs-12 form-control mobile-menu-search"/>
                                                    <a href="#"><i className="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul className="breadcome-menu">
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span className="bread-blod">Specific Client</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="product-status mg-b-15 clients-product-status">
                     <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-status-wrap drp-lst">
                                    <div className="add-product">
                                         <h4 style={{color:'gray'}}>Clients Name</h4>
                                     </div>
                                    <div className="asset-inner">
                                        <table>
                                            <tr>
                                                <th>No</th>
                                                <th>Services</th>
                                                <th>Date</th>
                                                <th>Total time spent</th>
                                                <th>Score</th>
                                                <th>Attestation</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Name of service</td>
                                                <td>Date subscried</td>
                                                <td>567</td>
                                                <td>90%</td>
                                                <td>
                                                     <button className="pd-setting btn-info">View</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="custom-pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
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