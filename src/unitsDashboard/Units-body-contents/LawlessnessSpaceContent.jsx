import React from "react";
import HeaderSection from '../components/HeaderSection'
import ContentCard from '../components/ContentCard'
import SecondUnitFooter from '../components/SecondUnitFooter'
import ImageCard from "../components/ImageCard";
import CarouselCard2 from '../components/CarouselCard2'
import CarouselCard3 from '../components/CarouselCard3'
import '../../App.css'


function CyberSpacesContent(){
    return(
        <>
            <div className="ms-sm-auto Header_Section ml-2">

                <div className="Unit-Dashboard-wrapper">
                     <HeaderSection prev='/cyberspace' destination="Leçon 4 - Le cyberespace, nouvel espace de vie" header_title="Un espace de non-droit" />
                </div>

                <div className="unites_divider_line"></div>

                <div className="units-dashboard-image-wrapper">
                     <ImageCard image="./images/T2FhJ0xYlzP5HBcr_d6YW6WlkaTXsSGIM-_NOPROCESS_espace_frontiere.png"/>
                </div>


               <div className="carousel-wrapper">
                    <CarouselCard2 image_one='./images/crR7aKXpVBv-zRnE_C17A4iNjaZq5fSzH-_NOPROCESS_avion.png' image_two='./images/--3grECISzjVhCqs_VwrsTHJ_RT-9z2Ls-_NOPROCESS_satellite.png' image_three='./images/pWvYI3C6urHiwf81_G8Tkq6N81vgHzxGF-_NOPROCESS_connexion.png' image_four="./images/WYZJa9W5mqNusgX9_JtJcM2KRB6LUIk4s-_NOPROCESS_controle_reseau.png" carousel_text_one="Contrairement à ce que l’on pourrait penser, ce cyberespace n'est pas totalement libre et désordonné.
                        Cependant, la nature décentralisée d’Internet fait de lui un espace « contrôlé » par plusieurs organismes, états ou entreprises. 
                        À tous les échelons, de nombreux organismes exercent ou peuvent exercer un contrôle ou une censure sur les informations qui y circulent.
                        Source : le Monde" carousel_text_two="
                                                Mais ces propos sont à nuancer, car les réseaux reposent sur des infrastructures techniques physiques qui se trouvent sur un territoire bien déterminé : il y a donc une dimension de territorialité. " carousel_text_three="Notons également que certains pays disposent techniquement de la capacité de bloquer ou de censurer tout ou partie d'Internet.
                        Durant les manifestations qui ont précédé la chute de Hosni Moubarak, par exemple, l'Égypte a pu couper quasi-instantanément l'accès au réseau en faisant pression sur les fournisseurs d'accès à Internet (FAI). 
                        Source : le Monde" carousel_text_four="Sans aller jusqu'à ces extrémités, de nombreux pays exercent aussi un contrôle très fort sur le réseau. 
                        Des contenus contraires aux lois nationales sont ainsi bloqués dans la plupart des pays autoritaires, mais aussi dans des démocraties : en France, la loi sur les jeux d'argent en ligne permet d'ordonner le filtrage des sites qui n'ont pas reçu un agrément. 
                        Source : le Monde" />
               </div>

               
               <div className="Unit-Dashboard-wrapper">
                     <ContentCard destination="Leçon 4 - Le cyberespace, nouvel espace de vie" header_title="Un espace de non-droit" />
                </div>

               <div className="carousel-wrapper">
                    <CarouselCard3 image_one='./images/vEgh2mynIrqHUI3m_JCnvo3d5Xf-q9VLz-_NOPROCESS_prison.png' image_two='./images/m6WsLesZpGc2ca1J_hZQo9BctcC7yEz2a-_NOPROCESS_bank.png' image_three='./images/OSYTY0CAMKO2YD7B_kRbRXSuuUTy4CYjr-_NOPROCESS_doc_conf.png' image_four="./images/ENvgUvjyO4CW0Zac_cBCRc9OHBab-5Sj1-_NOPROCESS_marteau.png" carousel_text_one="Contrairement à ce que l’on pourrait penser, ce cyberespace n'est pas totalement libre et désordonné.
                        Cependant, la nature décentralisée d’Internet fait de lui un espace « contrôlé » par plusieurs organismes, états ou entreprises. 
                        À tous les échelons, de nombreux organismes exercent ou peuvent exercer un contrôle ou une censure sur les informations qui y circulent.
                        Source : le Monde" carousel_text_two="
                                                Mais ces propos sont à nuancer, car les réseaux reposent sur des infrastructures techniques physiques qui se trouvent sur un territoire bien déterminé : il y a donc une dimension de territorialité. " carousel_text_three="Notons également que certains pays disposent techniquement de la capacité de bloquer ou de censurer tout ou partie d'Internet.
                        Durant les manifestations qui ont précédé la chute de Hosni Moubarak, par exemple, l'Égypte a pu couper quasi-instantanément l'accès au réseau en faisant pression sur les fournisseurs d'accès à Internet (FAI). 
                        Source : le Monde" carousel_text_four="Sans aller jusqu'à ces extrémités, de nombreux pays exercent aussi un contrôle très fort sur le réseau. 
                        Des contenus contraires aux lois nationales sont ainsi bloqués dans la plupart des pays autoritaires, mais aussi dans des démocraties : en France, la loi sur les jeux d'argent en ligne permet d'ordonner le filtrage des sites qui n'ont pas reçu un agrément. 
                        Source : le Monde" card_title3="SECRET DES CORRESPONDANCES" card_title1="LOI GODFRAIN" card_title2="LCEN"  />
               </div>

                 <div className="units-dashboard-footer-wrapper">
                     <SecondUnitFooter direction='CONTINUER' />
                 </div>

            </div>
        </>
    )
}

export default CyberSpacesContent ;