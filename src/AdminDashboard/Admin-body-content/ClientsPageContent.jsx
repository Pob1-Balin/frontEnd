import React, { useState, useEffect } from "react";
import "../admin.css";
import Footer from '../components/Footer'
import UserData from '../components/UserData'
import axios from "axios";
import {API} from '../../config'
import Loader from '../../CommonPageContents/Loader'
function ClientsPageContent (){
    const [loading, setLoading] = useState(true);
    const [ users, setUsers ] = useState([]);

    window.addEventListener("beforeunload", (event) => {
        localStorage.setItem('redirecthome', false);
    }); 
    
    useEffect(() => {
        window.scrollTo(0, 0);
        axios
        .get(`${API}/users`)
        .then(({ data }) => {
            setUsers(data.data);
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
        });
    }, []);
    return(
        <>
        {loading ? 
            <Loader/>
        :
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
                                                <input style={{color: "#4ab2cc"}} type="text" placeholder="Chercher..." className="search-int col-xs-12 form-control mobile-menu-search"/>
                                                <a href="#"><i className="fa fa-search"></i></a>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                        <ul className="breadcome-menu">
                                            <li><a style={{color:'#4ab2cc'}} href="admindashboard">Tableau de bord /</a></li>
                                            <li style={{color:'gray'}}><span className="bread-blod">Utilisateurs</span></li>
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
                                        <h4 style={{color:'gray'}}>Liste des clients</h4>
                                    </div>
                                <div className="asset-inner">
                                    <table>
                                        <tr>
                                            <th>Nom et prénom</th>
                                            <th>Le genre</th>
                                            <th>Pays</th>
                                            <th>Téléphoner</th>
                                            <th>Adresse e-mail</th>
                                            <th>Dernière visite</th>
                                            <th>Visite</th>
                                            <th>Paramètre</th>
                                        </tr>
                                        {users.map(users => <UserData key={users._id} id={users._id}  firstName={users.first_name} lastName={users.last_name} gender={users.gender} email={users.email} phone={users.phone_number} country={users.country} last_seen={users.last_seen} userData={users}/> )}
                                    </table>
                                </div>
                                {/* <div className="custom-pagination">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
        }
        </>
    )
}

export default ClientsPageContent;