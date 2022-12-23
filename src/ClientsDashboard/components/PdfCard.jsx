import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { API } from '../../config'
function PdfCard(props){
    const downloadDocument = () => {
         // using Java Script method to get PDF file
         fetch(`/images/${props.file}`).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `${props.file}`;
                alink.click();
            })
        })
    }
    return(
        <>
           <div className="card pdf-card">
                 <img className="pdf_card_image" src={`/api/v1/images/${props.image}`} />
                 <div className="">
                     <div className="pdf_card_info">
                         <div className="title">
                             <div><p className='title_text' style={{color:"gray"}}>Programme complet du cours</p></div>
                         </div>
                         <button disabled={true} className='pdf_card_title'>Fichier (PDF, .ZIP)</button>
                     </div>
                     <h3 className="pdf_text text-gray">{props.description}</h3>
                     <center><button onClick={downloadDocument} className="pdf_btn" style={{border:"none", outline:"none"}}><FaCloudDownloadAlt size='1.3rem' style={{marginBottom: '.1rem'}}/> Télécharger</button></center>
                 </div>
           </div>
        </>
    );
}

export default PdfCard;