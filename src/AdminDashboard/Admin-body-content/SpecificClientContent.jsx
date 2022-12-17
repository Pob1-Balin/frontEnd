import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import "../admin.css";
import Footer from '../components/Footer'
import UserServices from '../components/UserServices'

function SpecificClientContent(){
    const Location = useLocation();
    const userData = Location.state;
    const userServices = userData.services
    console.log("hhajkhsjka", userServices)
    useEffect(() => {
        window.scrollTo(0, 0);
    });
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
                                                <input type="text" style={{color:'#4ab2cc'}} placeholder="Chercher..." className="search-int col-xs-12 form-control mobile-menu-search"/>
                                                    <a href="#"><i className="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul className="breadcome-menu">
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Tableau de bord /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span className="bread-blod">Utilisateurs</span></li>
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
                                                <th>Cours</th>
                                                <th>Date</th>
                                                <th>Temps total passé</th>
                                                <th>Score</th>
                                                <th>Certification</th>
                                            </tr>
                                            <UserServices/>
                                        </table>
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