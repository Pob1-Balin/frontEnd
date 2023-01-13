import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
function NavLinks({ content, index, id, home, module_title, module_name }) {
    const structure_details = content[content.length - 1];
  return (
    <>
        {home == "home"?
            <NavLink style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminstructure"+structure_details.route} state={{id:id, content:content, index:index, module_name, module_title, pageTitle:structure_details.pageTitle}} activeStyle={{ color: 'red' }} className="unit-nave p-3">
                <div style={{display:"flex", justifyContent:"center"}}>
                    <NotesIcon style={{fontSize:"1.3rem", color:"gray"}} className='mr-1'/>
                    {structure_details.pageTitle}
                </div>
                <CheckCircleIcon style={{color:"#12448b", fontSize:"1.4rem", marginRight: "-.25rem"}}/>
            </NavLink>
            :
            <NavLink style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminstructure"+structure_details.route} state={{id:id, content:content, index:index, module_name, module_title, pageTitle:structure_details.pageTitle}} activeStyle={{ color: 'red' }} className="unit-nave p-3">
                <div style={{display:"flex", justifyContent:"center"}}>
                    <NotesIcon style={{fontSize:"1.3rem"}} className='mr-1'/>
                    {structure_details.pageTitle}
                </div>
                <div style={{position:"relative", paddingRight:"1rem"}}>
                    <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={100} thickness={5} style={{'color': 'white'}}/></span>
                    <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={20} thickness={5} style={{'color': '#4ab2cc'}}/></span>
                </div>
            </NavLink>
        }

    </>
  )
}

export default NavLinks
