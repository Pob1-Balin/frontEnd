import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo from './log.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import './sidebar.css'

// {HomeIcon, AccountBalanceIcon DocumentScannerIcon, AccountCircleIcon}

function Sidebar() {

    const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:8000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };



    return (
      <>
    <aside className="sidebar sidebar-icons-left sidebar-icons-boxed sidebar-expand-lg sidebar-color-info sider-1 pt-0">
        <header className="sidebar-header" style={{minHeight:'20vh'}}>
            <h2 className="text-center text-white font-roboto fw-300 fs-18 letter-spacing-2 mx-auto"><img src={logo} width={110} height={120} className='my-5'/></h2>
        </header>

        <nav className="sidebar-navigation">
            <ul className="menu menu-bordery pt- mt-5 text-left pl-4">

                    <li className="nav-item pt-5 list" style={{fontSize: '1.2rem'}}>
                        
                        <Link to='/' className='ml-4 test' style={{textDecoration:'none'}}><HomeIcon className=''/>Home</Link>
                    </li>
                    <li className="nav-item pt-4 list" style={{fontSize: '1.2rem'}}>
                        
                        <Link to='/res' className=' ml-4 test' style={{textDecoration:'none'}}><AccountBalanceIcon className=''/>My resources</Link>
                    </li>
                    <li className="nav-item pt-4 list" style={{fontSize: '1.2rem'}}>
                        
                        <Link to='/attest' className='ml-4 test' style={{textDecoration:'none'}}><DocumentScannerIcon className=''/>My attestation</Link>
                    </li>

                    <li className="nav-item pt-4 list active" style={{fontSize: '1.2rem'}}>
                        
                        <Link to='/profile' className=' ml-4 test' style={{textDecoration:'none'}}> <AccountCircleIcon className=''/> My profile</Link>
                    </li>
            </ul>
        </nav>


        <header className="sidebar-header">
            <h2 className="text-center text-white font-roboto fw-300 fs-18 letter-spacing-2 mx-auto">Help</h2>
        </header>

    </aside>


    <header className="topbar bg-light col-md-12 px-3"  style={{minHeight:'10vh'}}>
        <div className="topbar-left">
            <span className="topbar-btn sidebar-toggler"><i>&#9776;</i></span>
        </div>
        <h2 className='text-black mx-auto d-lg-none pt-2 '><img src={logo} width={70} height={70}/></h2>
        <div className="topbar-right">
            <ul className="topbar-btns">
                <li className="dropdown">
                    {/* <span className="topbar-btn" data-toggle="dropdown" aria-expanded="false"><h5 className="fs-12"><ExitToAppIcon/> dropdwon<i className="ti ti-angle-down ml-2"></i></h5></span> */}
                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                      {/* <div className="dropdown-divider"></div> */}
                        <ExitToAppIcon className="exitIcon" onClick={logOut} />
                        
                    </div>
                </li>
            </ul>

            {/* <div className="topbar-divider"></div> */}
        </div>
        <div className='d-none d-lg-block logout' style={{marginLeft:'-57%'}}>
        <button style={{border:"none"}} onClick={logOut} ><ExitToAppIcon /></button>
            
        </div>
    </header>
    <ToastContainer/>
      </>
    )
  }

export default Sidebar;
