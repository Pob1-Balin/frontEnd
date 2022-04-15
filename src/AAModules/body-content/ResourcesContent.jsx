import React from "react";
import PdfCard from '../components/PdfCard';
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link } from 'react-router-dom';

function ResourceContent (){
    return(
        <>
            <main className="ms-sm-auto px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="heading" style={{color: '#0d3360'}}>Resource page</h1>
                    <Link className="return-home" style={{textDecoration: 'none'}} to='/editresourcesform'>
                     <div>
                         <button style={{width:'10rem'}} className="add-buttons">Edit Resource Page</button>
                     </div>
                    </Link>
                    
                </div>

                <div style={{marginBottom: "1.3rem"}} className="Home_navigation">
                     <p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Resources</span></p>
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