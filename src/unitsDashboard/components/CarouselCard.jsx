import React from 'react';
import { Carousel} from 'react-bootstrap'

function CarouselCard(props){
    return(
        <>  
               <Carousel>
                 <Carousel.Item>
                   <div className="carousel_card" style={{background: "white", height: '45rem'}}>
                     <div style={{textAlign: 'center'}}>
                         <img className="carousel_card_image" src={props.image_one} width='40%' height='55%'/>
                     </div>
                     <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
                       <p className='carousel-text'>{props.carousel_text_one}</p>
                     </div>
                   </div>
                 </Carousel.Item>

                 <Carousel.Item>
                   <div className="carousel_card" style={{background: "white", height: '38rem'}}>
                     <div style={{textAlign: 'center'}}>
                         <img className="carousel_card_image" src={props.image_two} width='40%' height='55%'/>
                     </div>
                     <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
                       <p className='carousel-text'>{props.carousel_text_two}</p>
                     </div>
                   </div>
                 </Carousel.Item>
                 
                 <Carousel.Item>
                   <div className="carousel_card" style={{background: "white", height: '35rem'}}>
                     <div style={{textAlign: 'center'}}>
                     <img className="carousel_card_image" src={props.image_three} width='40%' height='55%'/>
                     </div>
                     <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
                       <p className='carousel-text'>{props.carousel_text_three}</p>
                     </div>
                   </div>
                 </Carousel.Item>
               </Carousel>
        </>
    );
}


export default CarouselCard;

