import React, { useEffect, useState } from "react";
import PdfCard from '../components/PdfCard';
import Footer from '../components/Footer';
import "../App.css";
import axios from 'axios';
import { API } from '../../config'
import { Link } from 'react-router-dom';
import Loader from '../../CommonPageContents/Loader.jsx'

function ResourceContent (props){
    if(JSON.parse(localStorage.getItem("refreshresource")) == "true"){
        localStorage.removeItem("refreshresource")
        localStorage.setItem('refreshresource', JSON.stringify("false"));
        window.location.reload();
    }
    const [loading, setLoading] = useState(true);
    const service = JSON.parse(localStorage.getItem("servId"))
    const head = props.display;

    var new_serv_id = 0;
    if(head == "admin"){
        new_serv_id = service;
    }else{
        new_serv_id = service._id;
    }

    //get specific service ----------------
    const [serviceInfo, setServiceInfo] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`/service/${new_serv_id}`).then(({data})=>{
            setServiceInfo(data.data)
            setLoading(false)
        }).catch((err)=>{
            setLoading(false)
        })

    }, []);
    return(
        <>
            {loading ?
                <Loader/>
                :
                <main className="px-md-4 ml-10 mr-10">
                    {head == "admin" ?
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom resource-page">
                            <h4 style={{marginTop:'2rem', color: '#0d3360'}}>
                                <div className="returnHome2">
                                    <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem"}} to='/adminmodulepage' state={{service_id: service}}><span className="home">Accueil</span></Link> <span>/</span> <span style={{fontStyle: 'bold'}}>Resource</span></p>
                                </div>
                            </h4>
                            <Link className="return-home" style={{textDecoration: 'none'}} to='/editresource' state={{service_id: service, description: serviceInfo.resource_description}}>
                                <div>
                                    <button style={{width:"12rem"}} className="add-buttons">Modifier la ressource</button>
                                </div>
                            </Link>
                        </div>
                    :
                    <>
                        <div className="border-bottom headerTitle">
                            <h1><p>Page de ressources</p></h1>
                        </div>
                        <div className="Home_navigation">
                            <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem", paddingLeft:"0rem" }} to='/clientservicedashboard' state={{ service_id: service._id, modules: service.modules}}><span className="home">Accueil /</span></Link> <span style={{color: '#0d3360'}}>Ressources</span></p>
                        </div>
                    </>
                    }
                    <div className="pdf_wrapper">
                        <PdfCard image={serviceInfo.resource_image} description={serviceInfo.resource_description} file={serviceInfo.resource_file}/>
                    </div>
                    <div style={{marginTop:"3rem"}}></div>
                    <Footer destination="/legalnotice" />
            </main>
            }
        </>
    )
}

export default ResourceContent;