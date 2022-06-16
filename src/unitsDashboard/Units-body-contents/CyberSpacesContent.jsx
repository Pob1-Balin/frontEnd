import React from "react";
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import ImageCard from "../components/ImageCard";
import CarouselCard from '../components/CarouselCard'
import '../../ClientsDashboard/App.css'





function CyberSpacesContent(){
    return(
        <>
            <div className="">

                <div className="Unit-Dashboard-wrapper">
                     <HeaderSection prev="/introduction" destination="Leçon 3 - Une diversité d'équipements et de technologies" header_title="Le cyberespace, nouvel espace de vie" />
                </div>

                <div className="unites_divider_line"></div>

                <div className="units-dashboard-image-wrapper">
                     <ImageCard image="./images/7XHafUWBW4V4X98Y_T6Tp4EnlNtpLpQMS-_NOPROCESS_espace_vie.png"/>
                </div>


               <div className="carousel-wrapper">
                    <CarouselCard image_one='./images/pWvYI3C6urHiwf81_G8Tkq6N81vgHzxGF-_NOPROCESS_connexion.png' image_two='./images/866_KMr1OP8c-5Kk_tyx40NUloxLkpGw8-_NOPROCESS_storyline_2.png' image_three='./images/VbbpNiieXSZ3Wu_u_vXMrT-AU7DBKSiEo-_NOPROCESS_storyline_3.png' carousel_text_one="L’ensemble des réseaux qui relient ces objets crée le cyberespace. 
                        Par conséquent, les attaques informatiques utilisent ce territoire pour atteindre les cibles. 
                        Or, celui-ci possède des propriétés particulières qui font qu’il est nécessaire de repenser le modèle habituel. 

                        Source : Cryptolaw" carousel_text_two="En effet, le cyberespace est un espace sans frontières concrètes.
                        Mais ces propos sont à nuancer, car les réseaux reposent sur des infrastructures techniques physiques qui se trouvent sur un territoire bien déterminé : il y a donc une dimension de territorialité. " carousel_text_three=" Cependant, ces technologies ne sont pas exemptes de risques puisque là encore ces réseaux rejoignent la toile mondiale, le plus souvent au travers du modem ADSL / boitier fibre qui joue le rôle de passerelle." />
               </div>

                <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Visionnez l'activité ci-dessus avant de continuer" />
                 </div>

            </div>
        </>
    )
}

export default CyberSpacesContent ;