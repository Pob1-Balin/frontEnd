import React from 'react';

function Modules(props){
    return(
        <>  
           <div className="card unites_card_image ml-n3">
                 <img className="card_images unit_card_images" src={props.image} />
           </div>
        </>
    );
}


export default Modules;