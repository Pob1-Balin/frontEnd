import React from 'react';
import Sidebar from '../components/Sidebar';
import TestPageContent from '../../AdminDashboard/Admin-body-content/TestPageContent';

function TestPage() {
  return (
    <>
      <Sidebar/>
      <main>
        <TestPageContent/>
      </main>
    </>
  );
}

export default TestPage;
