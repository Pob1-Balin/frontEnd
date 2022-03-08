import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileContent from '../body-content/ProfileContent';

function MyProfile() {
  return (
    
    <>
      {/* <Header/>
      <div className='container-fluid'>
        <div className='row' style={{backgroundColor: "#f4f7f8"}}>
          <Sidebar/>
          <ProfileContent/>
        </div>
      </div> */}

      <Sidebar/>
      <main>
        <ProfileContent/>
      </main>
    </>
  );
}

export default MyProfile;
