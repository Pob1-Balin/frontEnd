import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import HomeContent from '../body-content/HomeContent';
import { ToastContainer } from "react-toastify";

function HomePage() {

  


  return (
    
    <>
      <Sidebar/>
      <main>
         <HomeContent/>
         <ToastContainer/>
      </main>
    </>
  );
}

export default HomePage;
