import React from 'react';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function FooterSection(props){
    return(
        <>
             <div className='Unit-footer-card'>
                 <center>
                    <Link to='#'>
                        {props.answer?
                           <button className='unit-dashboard-footer-button success'><LockOutlinedIcon style={{fontSize: '1.1rem', marginTop:"-.2rem", marginRight:".3rem"}}/>{props.footer_text}</button>
                           :
                           <button className='unit-dashboard-footer-button success'>{props.footer_text}</button>
                        }
                    </Link>
                 </center>
             </div>
        </>
    );
}


export default FooterSection;