import React from 'react';
import { Link } from "react-router-dom";

function SecondUnitFooter(props){
    return(
        <>  
             <div className='Unit-footer-card Unit-second-footer-card'>
                 <center>
                    <Link to='/'>
                         <button className='unit-dashboard-footer-button success second-footer'>{props.direction}</button>
                    </Link>
                 </center>
             </div>
        </>
    );
}


export default SecondUnitFooter;



