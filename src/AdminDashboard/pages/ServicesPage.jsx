import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import ServicesContent from '../Admin-body-content/ServicesContent';

function ServicesPage() {
  return (
    
    <>
      <AdminDashboardSidebar/>
      <main>
        <ServicesContent/>
      </main>
    </>
  );
}

export default ServicesPage;
