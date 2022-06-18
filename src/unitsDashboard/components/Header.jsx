import React from 'react';

function Header(props){
    return(
        <>
             <div style={{marginLeft:"-1.5rem", marginRight:"-1.5rem", height:"2rem"}} className='Unit-header-card'>
                 <div className='header-text-section'>
                     <div className='header-title-divider-line-section'>
                         <div className='header-title' id='title'><b>{props.header_title}</b></div>
                         <div className='divider-line'></div>
                     </div>
                 </div>

             </div>
        </>
    );
}


export default Header;