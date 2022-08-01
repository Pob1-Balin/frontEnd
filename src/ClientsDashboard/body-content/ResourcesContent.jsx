import React from "react";
import PdfCard from '../components/PdfCard';
import Footer from '../components/Footer';
import "../App.css";
import { Link } from 'react-router-dom';

function ResourceContent (props){
    const head = props.display;
    return(
        <>
            <main className="px-md-4 res">

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
                    <div className="top-margin d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                         <h1 className="heading" style={{color: '#0d3360'}}>Resource page</h1>
                    </div>
                    <div style={{marginBottom: "1.3rem"}} className="Home_navigation">
                         <p><Link className="return-home" style={{textDecoration: 'none'}} to='/clientservicedashboard'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Resources</span></p>
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