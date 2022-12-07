import React from "react";
import PdfCard from '../components/PdfCard';
import Footer from '../components/Footer';
import "../App.css";
import { Link } from 'react-router-dom';

function ResourceContent (props){
    const head = props.display;
    return(
        <>
            <main className="ms-sm-auto px-md-4 ml-3 mr-3">

                {head=="admin" ?
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4 style={{marginTop:'2rem'}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Resource</span></p></h4>
                    <Link className="return-home" style={{textDecoration: 'none'}} to='/editresource'>
                        <div>
                             <button className="add-buttons">Edit Resource</button>
                        </div>
                    </Link>
                </div>
                :
                <>
                    <div className="border-bottom headerTitle">
                        <h1><p>Page de ressources</p></h1>
                    </div>
                    <div className="Home_navigation">
                        <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem", paddingLeft:"0rem" }} to='/clientservicedashboard'><span className="home">Accueil /</span></Link> <span style={{color: '#0d3360'}}>Ressources</span></p>
                    </div>
                </>
                }
                <div className="pdf_wrapper">
                     <PdfCard/>
                </div>
                <Footer destination="/legalnotice" />
            </main>
        </>
    )
}

export default ResourceContent;