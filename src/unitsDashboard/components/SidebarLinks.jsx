// import React from 'react'
// import { Link } from 'react-router-dom'; 

// import '../styles/layout.css'
// function Sidebar (){
//     return(
//         <>
//             <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse position-fixed" style={{minHeight:'100vh', background:'#0b426a'}}>
//             <div className="position-sticky pt-3 pl-4">
//                 <ul className="nav flex-column pt-5 mx-auto pl-4">
//                     <li className="nav-item pt-3" style={{fontSize: '1.2rem'}}>
//                         <Link to='/' className='text-white' style={{textDecoration:'none'}}>Home</Link>
//                     </li>
//                     <li className="nav-item pt-3 " style={{fontSize: '1.2rem'}}>
//                         <Link to='/res' className='text-white' style={{textDecoration:'none'}}>My resources</Link>
//                     </li>
//                     <li className="nav-item pt-3" style={{fontSize: '1.2rem'}}>
//                         <Link to='/attest' className='text-white' style={{textDecoration:'none'}}>My attestation</Link>
//                     </li>

//                     <li className="nav-item pt-3" style={{fontSize: '1.2rem'}}>
//                         <Link to='/profile' className='text-white' style={{textDecoration:'none'}}>My profile</Link>
//                     </li>
                    
//                 </ul>
//             </div>
//             </nav>
//         </>
//     );
// }

// export default Sidebar;



import React from 'react';
import { NavLink, Link } from 'react-router-dom'; 
// import logo from '../../components/log.png'
// import HomeIcon from '@mui/icons-material/Home';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotesIcon from '@mui/icons-material/Notes';
import data from './sidebarList.json'
import './sidebar.css'

// {HomeIcon, AccountBalanceIcon DocumentScannerIcon, AccountCircleIcon}

function SidebarLinks() {
    return (
      <>
        <div className="border-end bg-white position-static" id="sidebar-wrapper" style={{Height:'100vh', position:"fixed"}}>
                <div className="list-group list-group-flush">
                  <header className="sidebar-header bg-light SideHeader position-" style={{minHeight:'35vh'}}>
                    <h2 className="text-left fs-33 text-white letter-spacing-1 mx-auto">hyperconnected <br /> digital world</h2>
                  </header>
                  <div className="list-group list-group-flush">
                    {data.map((link) => <NavLink to={"/"+link.component} activeStyle={{ color: 'red' }} className="list-group-item fs-15 fw-bold list-group-item-action list-group-item-light p-3"><NotesIcon className='mr-4'/>{link.Title}</NavLink> )}
                  </div>
                </div>
            </div>
      </>
    )

  }

//   var header = document.getElementById("myDIV");
//   var btns = document.getElementsByClassName("sidelist");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

export default SidebarLinks;


const style={
  
}