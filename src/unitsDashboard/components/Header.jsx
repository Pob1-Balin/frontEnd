import React from 'react';
import '../../AdminDashboard/components/styey.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom"
import ToggleButton from './toggleButton';
function Header(props){
    return(
        <>
             <div style={{marginLeft:"-1.5rem", marginRight:"-1.5rem", height:"2rem", marginTop:"-6.7rem"}} className='Unit-header-card'>
                <div className='header-link' style={{background:"transparent"}}>
                    <Link className='header-link-link' to='/adminunitcontent' state={{id: props.id, title: props.title, content:props.unit_content, image:props.image, module_name:props.module_name, module_title:props.module_title}} style={{textDecoration:"none", paddingTop:"1rem"}}>
                        <KeyboardArrowUpIcon style={{marginTop: '-1.1rem'}} />
                        <p style={{marginTop: '-.8rem'}}><b>Accueil</b></p>
                    </Link>
                </div>
                 <div className='header-text-section'>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div style={{marginLeft:"-2rem"}}><ToggleButton/></div>
                        <div></div>
                    </div>
                     <div className='header-title-divider-line-section'>
                         <div className='header-title' id='title'><b>Créer du contenu</b></div>
                         <div style={{background: "#030d2e"}} className='divider-line'></div>
                     </div>
                 </div>

             </div>
        </>
    );
}


export default Header;