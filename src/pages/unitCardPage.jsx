import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileContent from '../body-content/ProfileContent';
import UnitsContent from '../body-content/unitsContent';

function UnitsClientPage() {
    return (

        <>

            <Sidebar />
            <main>
                <UnitsContent />
            </main>
        </>
    );
}

export default UnitsClientPage;
