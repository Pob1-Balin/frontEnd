import React from "react";
import PdfCard from '../components/PdfCard';
import Footer from '../components/Footer';
import "../App.css";
import { Link } from 'react-router-dom';

function ResourceContent (){
    return(
        <>
            <main className="ms-sm-auto px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="heading">Resource page</h1>
                    
                </div>

                <div style={{marginBottom: "1.3rem"}} className="Home_navigation">
                     <p><Link style={{textDecoration: 'none'}} to='/'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Resources</span></p>
                </div>

                <div className="pdf_wrapper">
                     <PdfCard/>
                </div>

                <Footer />

            </main>
        </>
    )
}

export default ResourceContent;