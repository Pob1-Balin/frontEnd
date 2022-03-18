import React from 'react';
import Sidebar from '../components/Sidebar';
import HomeContent from '../body-content/HomeContent';

function HomePage() {
  return (
    
    <>
      <Sidebar/>
      <main>
        <HomeContent/>
      </main>
    </>
  );
}

export default HomePage;
