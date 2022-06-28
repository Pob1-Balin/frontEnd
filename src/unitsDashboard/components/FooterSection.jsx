import React from 'react';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function HeaderSection(props){
    return(
        <>
             <div className='Unit-footer-card'>
                 <center>
                    <Link to='/'>
                         <button className='unit-dashboard-footer-button success'><LockOutlinedIcon size='.5rem' style={{marginRight: ".5rem"}} />{props.footer_text}</button>
                    </Link>
                 </center>
             </div>
        </>
    );
}


export default HeaderSection;