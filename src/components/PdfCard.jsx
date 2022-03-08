import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";

function PdfCard(){
    return(
        <>
           <div className="card">
                 <img className="pdf_card_image" src='./images/Cature.png' />
                 <div className="card_body">
                     <div className="pdf_card_info">
                         <div className="title">
                             <div><p className='title_text'>Guide des bonnes pratiques</p></div>
                         </div>
                         <div className='type'>
                             <center><p className="type_text">Fichier (PDF)</p></center>
                         </div>
                     </div>
                     <h3 className="pdf_text">L’ANSSI et la CPME présentent douze règles essentielles pour la sécurité des systèmes d’information des petites et moyennes entreprises.</h3>
                     <center><button className="pdf_btn"><FaCloudDownloadAlt size='1.3rem' style={{marginBottom: '.1rem'}}/>  Download</button></center>
                 </div>
           </div>
        </>
    );
}


export default PdfCard;