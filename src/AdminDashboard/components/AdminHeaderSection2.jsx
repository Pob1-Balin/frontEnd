import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom";

function AdminHeaderSection2(props){
    var body = props.show;
    return(
        <>
             <div className='Unit-header-card mt-2'>
                 <div className='header-link'>
                     <Link to={props.prev}>
                         {/* <KeyboardArrowUpIcon style={{marginTop: '-1.8rem'}} />
                         <p style={{marginTop: '-1.1rem'}}><b>{props.destination}</b></p> */}
                     </Link>
                 </div>

                 <div className='header-text-section'>
                     {body == "" ? ""
                     :  <div style={{display:"flex", justifyContent:"space-between", marginBottom:"-1.2rem"}}>
                            <div></div>
                            <Link to="/editunithome" state={{id:props.id, page_title:props.page_title}}>
                                <div style={{marginRight:"3rem"}}><button className="add-buttons">Edit Content</button></div>
                            </Link>
                        </div>}
                     <div className='header-title-divider-line-section'>
                         <div className='header-title' id='title'><b>{props.header_title}</b></div>
                         <div className='divider-line'></div>
                     </div>
                 </div>

             </div>
        </>
    );
}


export default AdminHeaderSection2;