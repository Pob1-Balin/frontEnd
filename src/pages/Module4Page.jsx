import React from 'react';
import Sidebar from '../components/Sidebar';
import Module4Content from '../body-content/Module4Content';

function Module4Page() {
  return (
    
    <>
      {/* <Header/> */}
      <div className='container-fluid' style={{backgroundColor: "#f4f7f8"}}>
        <div className='row'>
          <Sidebar/>
          <Module4Content/>
        </div>
      </div>
    </>
  );
}

export default Module4Page;
