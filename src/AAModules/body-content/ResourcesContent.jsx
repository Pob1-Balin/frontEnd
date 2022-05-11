
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link } from 'react-router-dom';
import React from "react";
import PdfCard from '../components/PdfCard';
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from '../../config'
function ResourceContent (){
    const [resource, setResource] = useState([]);

    useEffect(() => {
      axios
        .get(`${API}/resource`)
        .then(({ data }) => {
            setResource(data.data);
          console.log(data.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return(
        <>
            <main className="ms-sm-auto px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="heading" style={{color: '#0d3360'}}>Resource page</h1>
                    
                </div>

                <div style={{marginBottom: "1.3rem"}} className="Home_navigation">
                     <p><Link className="return-home" style={{textDecoration: 'none'}} to='/'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Resources</span></p>
                </div>

                <div className="pdf_wrapper">
                     {resource.map(res => <PdfCard title = {res.title} description={res.description} image={res.image}/>)}
                </div>

                <Footer />

            </main>
        </>
    )
}


export default ResourceContent;