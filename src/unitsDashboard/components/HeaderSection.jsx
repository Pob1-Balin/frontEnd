import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from "react-router-dom";
import ToggleButton from "./toggleButton"

function HeaderSection(props){
    return(
        <>
             <div className='Unit-header-card mt-2 px-0 ml-4'>
                 <div className='header-link'>
                     <Link to={props.prev}>
                         <KeyboardArrowUpIcon style={{marginTop: '-1.8rem'}} />
                         <p style={{marginTop: '-1.1rem'}}><b>{props.destination}</b></p>
                     </Link>
                 </div>

                 <div className='header-text-section'>
                     {/* <ToggleButton/>
                     <Link className='hamburger-manu' to='/'><MenuOutlinedIcon /></Link> */}
                     <div className='header-title-divider-line-section'>
                         <div className='header-title' id='title'><b>{props.header_title}</b></div>
                         <div className='divider-line'></div>
                     </div>
                 </div>

             </div>
        </>
    );
}


export default HeaderSection;