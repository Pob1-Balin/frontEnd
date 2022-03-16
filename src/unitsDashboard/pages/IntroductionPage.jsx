import React from 'react'
import UnitSidebar from '../components/Sidebar';
import IntroductionContent from '../Units-body-contents/IntroductionContent';

function IntroductionPage(){
    return(
        <>
            <UnitSidebar/>
            <main>
                <IntroductionContent />
            </main>
        </>
    )
}

export default IntroductionPage;