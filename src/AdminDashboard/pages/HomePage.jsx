import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import HomeContent from '../Admin-body-content/HomepageContent';

function HomePage() {
  return (
    
    <>
      <AdminDashboardSidebar/>
      <main>
        <HomeContent/>
      </main>
    </>
  );
}

export default HomePage;
