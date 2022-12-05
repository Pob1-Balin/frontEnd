import React from 'react';
import Sidebar from '../components/Sidebar';
import UnitsPageContent from '../../CommonPageContents/UnitsPageContent';
import SelectService from '../components/SelectService';

function UnitsPage() {
  return (
    <>
      <Sidebar/>
      <SelectService/>
      <main>
         <UnitsPageContent display="clients"/>
      </main>
    </>
  );
}

export default UnitsPage;
