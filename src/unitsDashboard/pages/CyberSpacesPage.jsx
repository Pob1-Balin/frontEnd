import React from 'react'
import UnitSidebar from '../components/Sidebar';
import CyberSpacesContent from '../Units-body-contents/CyberSpacesContent';

function CyberSpacesPage(){
    return(
        <>
            <UnitSidebar/>
            <main>
                <CyberSpacesContent />
            </main>
        </>
    )
}

export default CyberSpacesPage;