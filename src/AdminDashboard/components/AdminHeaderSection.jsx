import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import './styey.css'
function AdminHeaderSection(props){
    var body = props.show;
    return(
        <>
             <div className='Unit-header-card mt-2' style={{border: "none"}}>
                {props.index == 0 ?
                    <div className='header-link' style={{background:"transparent"}}>
                        <Link className='header-link-link' to='/adminunitcontent' style={{textDecoration:"none", paddingTop:"1rem"}}>
                            <KeyboardArrowUpIcon style={{marginTop: '-1.1rem'}} />
                            <p style={{marginTop: '-.8rem'}}><b>Accueil</b></p>
                        </Link>
                    </div>
                    :
                    <div className='header-link' style={{background:"transparent"}}>
                        <Link className='header-link-link' to={props.prev} style={{textDecoration:"none", paddingTop:"1rem"}}>
                            <KeyboardArrowUpIcon style={{marginTop: '-1.1rem'}} />
                            <p style={{marginTop: '-.8rem'}}><b>{props.destination}</b></p>
                        </Link>
                    </div>
                }
                
                 <div className='header-text-section'>
                     {body == "" ? ""
                     :  <div style={{display:"flex", justifyContent:"space-between", marginBottom:"-1.2rem"}}>
                            <div></div>
                            <div style={{display:"flex"}}>
                                <Link to={`/${props.edit}`} state={{id:props.id, index:props.index, content:props.content}}>
                                    <div style={{marginRight:".5rem"}}><button style={{width: "auto", padding: ".5rem .8rem"}} className="add-buttons">Modifier</button></div>
                                </Link>
                                <div><button className="bg-danger add-buttons unit-edit" data-toggle="modal" data-target="#del" style={{width:"auto", padding: ".5rem .8rem"}}>Supprimer</button></div>
                            </div>
                        </div>}
                     <div className='header-title-divider-line-section'>
                         <div className='header-title' id='title'><b>{props.header_title}</b></div>
                         <div className='divider-line' style={{background: "#030d2e"}}></div>
                     </div>
                 </div>
                <div style={{color:"#030d2e"}}><LinearProgress variant="determinate" value={20} thickness={3} color="inherit"/></div>
             </div>
        </>
    );
}


export default AdminHeaderSection;
