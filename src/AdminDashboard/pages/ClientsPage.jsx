import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import ClientsPageContent from '../Admin-body-content/ClientsPageContent';

function ClientsPage() {
  return (
    
    <>
      <AdminDashboardSidebar/>
      <main>
        <ClientsPageContent/>
      </main>
    </>
  );
}

export default ClientsPage;
