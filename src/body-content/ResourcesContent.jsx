import React from "react";
import PdfCard from '../components/PdfCard';
import "../App.css";
function ResourceContent (){
    return(
        <>
            <main className="ms-sm-auto px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Resource page</h1>
                    
                </div>

                <div className="pdf_wrapper">
                     <PdfCard/>
                </div>


                

            </main>
        </>
    )
}

export default ResourceContent;