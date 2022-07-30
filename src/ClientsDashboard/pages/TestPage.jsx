import React from 'react';
import Sidebar from '../components/Sidebar';
import TestPageContent from '../body-content/TestPageContent';
import SelectService from '../components/SelectService';

function TestPage() {
  return (
    <>
      <Sidebar/>
      <SelectService/>
      <main>
        <TestPageContent/>
      </main>
    </>
  );
}

export default TestPage;
