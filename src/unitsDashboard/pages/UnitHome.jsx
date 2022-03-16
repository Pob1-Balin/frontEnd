import React from 'react'
import UnitSidebar from '../components/Sidebar';
import UnitHomeContent from '../Units-body-contents/UnitHomeContent';

function UnitHome(){
    return(
        <>
            <UnitSidebar/>
            <main>
                <UnitHomeContent />
            </main>
        </>
    )
}

export default UnitHome;