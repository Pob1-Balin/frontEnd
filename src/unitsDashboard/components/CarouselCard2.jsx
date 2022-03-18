import React from 'react';
import { Carousel} from 'react-bootstrap'

function CarouselCard(props){
    return(
        <>
               <Carousel>
                 <Carousel.Item>
                   <div className="carousel_card carousel_card_one" style={{background: "white"}}>
                     <div style={{textAlign: 'center'}}>
                         <img className="carousel_card_image" src={props.image_one} width='50%' height='55%'/>
                     </div>
                     <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
                       <p className='carousel-text'>{props.carousel_text_one}</p>
                     </div>
                   </div>
                 </Carousel.Item>

                 <Carousel.Item>
                   <div className="carousel_card carousel_card_two" style={{background: "white"}}>
                     <div style={{textAlign: 'center'}}>
                         <img className="carousel_card_image" src={props.image_two} width='50%' height='55%'/>
                     </div>
                     <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
                       <p className='carousel-text'>{props.carousel_text_two}</p>
                     </div>
                   </div>
                 </Carousel.Item>
                 
                 <Carousel.Item>
                   <div className="carousel_card carousel_card_three" style={{background: "white"}}>
                     <div style={{textAlign: 'center'}}>
                     <img className="carousel_card_image" src={props.image_three} width='50%' height='55%'/>
                     </div>
                     <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
                       <p className='carousel-text'>{props.carousel_text_three}</p>
                     </div>
                   </div>
                 </Carousel.Item>

                 <Carousel.Item>
                   <div className="carousel_card carousel_card_four" style={{background: "white"}}>
                     <div style={{textAlign: 'center'}}>
                     <img className="carousel_card_image" src={props.image_four} width='50%' height='55%'/>
                     </div>
                     <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
                       <p className='carousel-text'>{props.carousel_text_four}</p>
                     </div>
                   </div>
                 </Carousel.Item>
               </Carousel>
        </>
    );
}


export default CarouselCard;

