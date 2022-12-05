import React from 'react';

function HeaderSection(props){
    return(
        <>
             <div className='Unit-header-card Unit-middle-section mt-2 px-0 ml-4'>

             <div className='text_imaeg'>
                 <div className='middle-section-text'>
                     <p>LÉGISLATION ET DROIT DU MONDE CYBER EN FRANCE</p>
                 </div>
                 <div className='middle-section-image'>
                     <img src='./images/biUF-F7i042AZvrL_M0ZugloA4ZIfbq0T-_NOPROCESS_CNIL.png' height='210rem' width="300rem" />
                 </div>
             </div>

             <div className='location_text'>
                 <p>La loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, plus connue sous le nom de « loi informatique et libertés », est une loi française qui règlemente la liberté de traitement des données personnelles, c’est-à-dire la liberté de ficher les personnes.

                    Les données personnelles correspondent à toute information relative à une personne physique.

                    Ces moyens d’identification sont nombreux : nom, prénom, adresse (physique et électronique), numéro de téléphone, lieu et date de naissance, numéro de sécurité sociale, numéro de carte de paiement, plaque d’immatriculation d’un véhicule, photo, empreinte digitale, données médicales et génétiques, etc.  

                    LA CNIL a 4 missions principales :
                 </p>
             </div>


             <div className='image_text'>
                 <div className='bottom-section-image'>
                     <img className='content_image' src='./images/VNnII2FFEWXcJIAj_MUK77A3VoGPkmHcm-_NOPROCESS_number4.png' />
                 </div>

                 <div className='bottom-section-text'>
                       <ol>
                           <li><p>Informer et protéger les particuliers et les professionnels</p></li>
                           <li><p>Accompagner et conseiller</p></li>
                           <li><p>Contrôler et sanctionner (financièrement et/ou juridiquement)</p></li>
                           <li><p>Anticiper</p></li>
                       </ol>
                 </div>
             </div>


             </div>
        </>
    );
}


export default HeaderSection;