import React from "react";
import "../admin.css";
import Footer from '../components/Footer'
import UserData from '../components/UserData'
import { useState, useEffect } from "react";
import axios from "axios";
import {API} from '../../config'
function ClientsPageContent (){
    const [ users, setUsers ] = useState([]);
    useEffect(() => {
      axios
        .get(`${API}/users`)
        .then(({ data }) => {
            setUsers(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    console.log("Users:", users)
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
                                                <li><a style={{color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{color:'gray'}}><span className="bread-blod">Clients</span></li>
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
                                         <h4 style={{color:'gray'}}>Clients List</h4>
                                         <a className="add-clients" style={{background:'#4ab2cc'}} href="addclients">Add Clients</a>
                                     </div>
                                    <div className="asset-inner">
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
                                            {users.map(users => <UserData key={users._id} id={users._id}  firstName={users.first_name} lastName={users.last_name} gender={users.gender} email={users.email} phone={users.phone_number} country={users.country}/> )}
                                            <tr>
                                                <td>
                                                     <button className="pd-setting btn-secondary" disabled="true">Not Active</button>
                                                </td>
                                                <td>
                                                     <button className="ds-setting" disabled="true">Blocked</button>
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

export default ClientsPageContent;