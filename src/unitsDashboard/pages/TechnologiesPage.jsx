import React from 'react'
import UnitSidebar from '../components/Sidebar';
import TechnologiesContent from '../Units-body-contents/TechnologiesContent';

function TechnologiesPage(){
    return(
        <>
            <UnitSidebar/>
            <main>
                <TechnologiesContent />
            </main>
        </>
    )
}

export default TechnologiesPage;