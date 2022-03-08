import React from 'react';
import Sidebar from '../components/Sidebar';
import Module3Content from '../body-content/Module3Content';

function Module3Page() {
  return (
    
    <>
      {/* <Header/> */}
      <div className='container-fluid' style={{backgroundColor: "#f4f7f8"}}>
        <div className='row'>
          <Sidebar/>
          <Module3Content/>
        </div>
      </div>
    </>
  );
}

export default Module3Page;
