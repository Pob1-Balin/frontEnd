import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";

function PdfCard(props){
    return(
        <>

{/* test={props.image} */}
           <div className="card pdf-card">
                 <img className="pdf_card_image" src='./images/Cature.png'  />
                 <div className="">
                     <div className="pdf_card_info">
                         <div className="title">
                             <div><p className='title_text'>Guide des bonnes pratiques{props.title}</p></div>
                         </div>
                         <button disabled={true} className='pdf_card_title'>Fichier (PDF)</button>
                     </div>
                     <h3 className="pdf_text">{props.description}L’ANSSI et la CPME présentent douze règles essentielles pour la sécurité des systèmes d’information des petites et moyennes entreprises.</h3>
                     <center><button className="pdf_btn"><FaCloudDownloadAlt size='1.3rem' style={{marginBottom: '.1rem'}}/> Download</button></center>
                 </div>
           </div>
        </>
    );
}


export default PdfCard;