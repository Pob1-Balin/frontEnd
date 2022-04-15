import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import HomeContent from '../body-content/HomeContent';

function HomePage() {
  return (
    
    <>
      <AdminSidebar/>
      <main>
        <HomeContent/>
      </main>
    </>
  );
}

export default HomePage;
