import React from 'react';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function HeaderSection(props){
    return(
        <>  
             <div className='Unit-footer-card'>
                 <center>
                    <Link to='/'>
                         <button className='unit-dashboard-footer-button success'><LockOutlinedIcon style={{marginRight: "1rem"}} />Visionnez la vidéo pour continuer</button>
                    </Link>
                 </center>
             </div>
        </>
    );
}


export default HeaderSection;