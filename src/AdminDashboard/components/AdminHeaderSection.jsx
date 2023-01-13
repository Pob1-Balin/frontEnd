import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import './styey.css'
import ToggleButton from '../../unitsDashboard/components/toggleButton';
function AdminHeaderSection({ edit, prev, module_title, module_name, destination, index, id, content, image, title, header_title, setLgShow, show}){
    return(
        <>
             <div className='Unit-header-card mt-2' style={{border: "none"}}>
                {index == 0 ?
                    <div className='header-link' style={{background:"transparent"}}>
                        <Link className='header-link-link' to='/adminunitcontent' state={{id:id, content:content, title:title, image:image, module_title:module_title, module_name:module_name }} style={{textDecoration:"none", paddingTop:"1rem"}}>
                            <KeyboardArrowUpIcon style={{marginTop: '-1.1rem'}} />
                            <p style={{marginTop: '-.8rem'}}><b>Accueil</b></p>
                        </Link>
                    </div>
                    :
                    <div className='header-link' style={{background:"transparent"}}>
                        <Link className='header-link-link' to={prev} style={{textDecoration:"none", paddingTop:"1rem"}}>
                            <KeyboardArrowUpIcon style={{marginTop: '-1.1rem'}} />
                            <p style={{marginTop: '-.8rem'}}><b>{destination}</b></p>
                        </Link>
                    </div>
                }
                
                 <div className='header-text-section'>
                     {show == "" ? ""
                     :  <div style={{display:"flex", justifyContent:"space-between", marginBottom:"-1.2rem"}}>
                            <div style={{background:"red"}}><ToggleButton/></div>
                            <div style={{display:"flex"}}>
                                <Link to={`/${edit}`} state={{id:id, index:index, content:content}}>
                                    <div style={{marginRight:".5rem"}}><button style={{width: "auto", padding: ".5rem .8rem"}} className="add-buttons">Modifier</button></div>
                                </Link>
                                <div><button onClick={() => setLgShow(true)} className="bg-danger add-buttons unit-edit" style={{width:"auto", padding: ".5rem .8rem"}}>Supprimer</button></div>
                            </div>
                        </div>}
                     <div className='header-title-divider-line-section'>
                         <div className='header-title' id='title'><b>{header_title}</b></div>
                         <div className='divider-line' style={{background: "#030d2e"}}></div>
                     </div>
                 </div>
                <div style={{color:"#030d2e"}}><LinearProgress variant="determinate" value={20} thickness={3} color="inherit"/></div>
             </div>
        </>
    );
}


export default AdminHeaderSection;
