import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import SpecificClientContent from '../Admin-body-content/SpecificClientContent';

function SpecificClientPage() {
  return (
    
    <>
      <AdminDashboardSidebar/>
      <main>
        <SpecificClientContent/>
      </main>
    </>
  );
}

export default SpecificClientPage;
