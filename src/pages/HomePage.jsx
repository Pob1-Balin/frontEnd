import React from 'react';
import Sidebar from '../components/Sidebar';
import HomeContent from '../body-content/HomeContent';

function HomePage() {
  return (
    
    <>
      {/* <Header/>
      <div className='container-fluid'>
        <div className='row' style={{backgroundColor: "#f4f7f8"}}>
          <Sidebar/>
          <HomeContent/>
        </div>
      </div> */}

      <Sidebar/>
      <main>
        <HomeContent/>
      </main>
    </>
  );
}

export default HomePage;
