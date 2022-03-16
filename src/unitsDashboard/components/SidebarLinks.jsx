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
        {/* <aside>
        <li className="nav-item list" style={{fontSize: '1.2rem', color:'gray'}}>
          
          <Link to='/' className='ml-2 test fs-5 row' style={{textDecoration:'none',color:'gray'}}>
            <NotesIcon className=''/>{data.map((link) => <h6>{link.Title}</h6>)}
          </Link>
        </li>

        </aside> */}

<aside className="sidebar sidebar-icons-left sidebar-icons-boxed sidebar-expand-lg sidebar-color-info sider-1 pt-0 bg-light">
        <header className="sidebar-header bg-light SideHeader position-" style={{minHeight:'40vh'}}>
            <h2 className="text-left fs-33 text-white letter-spacing-1 mx-auto">hyperconnected <br /> digital world</h2>
        </header>

        <nav className="sidebar-navigation" style={{overflowY:'scroll'}}>
            <ul className="menu menu-bordery text-left mt-4 pl-4">
                {data.map((link) => <li className='Links sidelist pt-2'> <NavLink to={"/"+link.Icon} activeStyle={{ color: 'red' }}><NotesIcon className='mr-4'/>{link.Title}</NavLink> </li>)}       
            </ul>
        </nav>


    </aside>

      </>
    )

  }

  var header = document.getElementById("myDIV");
  var btns = document.getElementsByClassName("sidelist");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

export default SidebarLinks;
