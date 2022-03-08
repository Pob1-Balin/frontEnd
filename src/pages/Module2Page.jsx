import React from 'react';
import Sidebar from '../components/Sidebar';
import Module2Content from '../body-content/Module2Content';

function Module2Page() {
  return (
    
    <>
      {/* <Header/> */}
      <div className='container-fluid' style={{backgroundColor: "#f4f7f8"}}>
        <div className='row'>
          <Sidebar/>
          <Module2Content/>
        </div>
      </div>
    </>
  );
}

export default Module2Page;
