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
import { Link } from 'react-router-dom'; 
import logo from '../../components/log.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotesIcon from '@mui/icons-material/Notes';

import './sidebar.css'

// {HomeIcon, AccountBalanceIcon DocumentScannerIcon, AccountCircleIcon}

function UnitSidebar() {
    return (
      <>
    <aside className="sidebar sidebar-icons-left sidebar-icons-boxed sidebar-expand-lg sidebar-color-info sider-1 pt-0 bg-light">
        <header className="sidebar-header bg-light SideHeader" style={{minHeight:'40vh'}}>
            <h2 className="text-left fs-33 text-white letter-spacing-1 mx-auto">hyperconnected <br /> digital world</h2>
        </header>

        <nav className="sidebar-navigation">
            <ul className="menu menu-bordery text-left mt-4 pl-4">

                    <li className="nav-item list" style={{fontSize: '1.2rem', color:'gray'}}>
                        <NotesIcon className=''/>
                        <Link to='/' className='ml-2 test fs-5' style={{textDecoration:'none',color:'gray'}}>Home</Link>
                    </li>
                    <li className="nav-item pt-4 list" style={{fontSize: '1.2rem'}}>
                        <AccountBalanceIcon className=''/>
                        <Link to='/res' className=' ml-4 test' style={{textDecoration:'none'}}>My resources</Link>
                    </li>
                    <li className="nav-item pt-4 list" style={{fontSize: '1.2rem'}}>
                        <DocumentScannerIcon className=''/>
                        <Link to='/attest' className='ml-4 test' style={{textDecoration:'none'}}>My attestation</Link>
                    </li>

                    <li className="nav-item pt-4 list active" style={{fontSize: '1.2rem'}}>
                        <AccountCircleIcon className=''/>
                        <Link to='/profile' className=' ml-4 test' style={{textDecoration:'none'}}>My profile</Link>
                    </li>
            </ul>
        </nav>


    </aside>


    <header className="topbar bg-light col-md-12 px-3"  style={{minHeight:'15vh'}}>
        <div className="topbar-left row">
            <span className="topbar-btn sidebar-toggler">igbh</span>
            
            
            <span className="topbar-btn" data-toggle="dropdown" aria-expanded="false"><h5 className="fs-12"><ExitToAppIcon/> {/*dropdwon<i className="ti ti-angle-down ml-2"></i>*/}</h5></span>
                    
        </div>
        <h2 className='text-black mx-auto d-lg-none pt-2 bg-light '><img src={logo} width={100} height={100}/></h2>
        <div className="topbar-right">
            <ul className="topbar-btns">
                <li className="dropdown">
                
                    <span className="topbar-btn" data-toggle="dropdown" aria-expanded="false"><h5 className="fs-12"><ExitToAppIcon/> {/*dropdwon<i className="ti ti-angle-down ml-2"></i>*/}</h5></span>
                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                      {/* <div className="dropdown-divider"></div> */}
                        
                       
                    </div>
                </li>
            </ul>

            {/* <div className="topbar-divider"></div> */}
        </div>

    </header>
      </>
    )
  }

export default UnitSidebar;
