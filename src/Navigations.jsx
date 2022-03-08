import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import MyProfile from './pages/MyProfile'
import ResourcePage from './pages/ResourcesPage'
import AttestationPage from './pages/AttestationPage'
import Module1Page from './pages/Module1Page'
import Module2Page from './pages/Module2Page'
import Module3Page from './pages/Module3Page'
import Module4Page from './pages/Module4Page'
function Navigation (){
    return(
        <BrowserRouter>
            <Routes>
                 <Route path='/' exact element={<HomePage/>}/>
                 <Route path='/profile' exact element={<MyProfile/>}/>
                 <Route path='/res' exact element={<ResourcePage/>}/>
                 <Route path='/attest' exact element={<AttestationPage/>}/>
                 <Route path='/module1' exact element={<Module1Page/>}/>
                 <Route path='/module2' exact element={<Module2Page/>}/>
                 <Route path='/module3' exact element={<Module3Page/>}/>
                 <Route path='/module4' exact element={<Module4Page/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;