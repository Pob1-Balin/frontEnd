import React from 'react';
import Sidebar from '../components/Sidebar';
import Module1Content from '../body-content/Module1Content';

function Module1Page() {
  return (
    
    <>
      {/* <Header/> */}
      <div className='container-fluid' style={{backgroundColor: "#f4f7f8"}}>
        <div className='row'>
          <Sidebar/>
          <Module1Content/>
        </div>
      </div>
    </>
  );
}

export default Module1Page;
