import React from 'react';
import {API} from '../../config'

function Modules(props){
    return(
        <>  
           <div className="card unites_card_image ml-n3">
                 <img className="card_images unit_card_images" src={`${API}/images/${props.image}`} width='100%'/>
           </div>
        </>
    );
}


export default Modules;