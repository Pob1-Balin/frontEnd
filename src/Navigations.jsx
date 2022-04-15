import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import MyProfile from './pages/MyProfile'
import ResourcePage from './pages/ResourcesPage'
import AttestationPage from './pages/AttestationPage'
import Module1Page from './pages/Module1Page'
import Module2Page from './pages/Module2Page'
import Module3Page from './pages/Module3Page'
import Module4Page from './pages/Module4Page'
import LegalNoticePage from './pages/LegalNoticePage'
import UnitHome from './unitsDashboard/pages/UnitHome'
import TechnologiesPage from './unitsDashboard/pages/TechnologiesPage'
import IntroductionPage from './unitsDashboard/pages/IntroductionPage'
import Tespage from './unitsDashboard/pages/Tespage'
import CyberSpacesPage from './unitsDashboard/pages/CyberSpacesPage'
import LawlessnessSpacePage from './unitsDashboard/pages/LawlessnessSpacePage'
import PlayerExample from './unitsDashboard/components/VideoCard';
import FindingsPage from './unitsDashboard/pages/FindingsPage';
import Module1_Unit2_Home from './unitsDashboard/pages/Module1_Unit2_Home';
import Module1Unit2ThreatsPage from './unitsDashboard/pages/Module1Unit2ThreatsPage';

/*============================= Admin dashboard =================================*/
import AdminHomePage from './AdminDashboard/pages/HomePage';
import ProfilePage from './AdminDashboard/pages/ProfilePage';
import ClientsPage from './AdminDashboard/pages/ClientsPage';
import AdminHomePagee from './AAModules/pages/HomePage';
import AddModulePage from './AAModules/pages/AddModulePage';
import AddUnitePage from './AAModules/pages/AddUnitePage';
import EditModule1Content from './AAModules/pages/Module1Page';
import EditModule2Content from './AAModules/pages/Module2Page';
import EditModule3Content from './AAModules/pages/Module3Page';
import EditModule4Content from './AAModules/pages/Module4Page';
import EditModulePage from './AAModules/pages/EditModulePage';
import EditLegalNoticePage from './AAModules/pages/LegalNoticePage';
import EditNoticePage from './AAModules/pages/EditNoticePage';
import EditResourcesContent from './AAModules/pages/ResourcesPage';
import EditResourcesContentForm from './AAModules/pages/EditRourcePage';
import AddClientsPage from './AdminDashboard/pages/AddClientsPage';
import ServicePage from './AdminDashboard/pages/ServicesPage';
import LoginPage from './AdminDashboard/pages/LoginPage';
import SignUpPage from './AdminDashboard/pages/SignUpPage';
import EditServicePage from './AdminDashboard/pages/EditServicePage';
import SpecificClientPage from './AdminDashboard/pages/SpecificClientPage';
import EditeUnitPage from './AAModules/pages/EditeUnitPage';

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
                 <Route path='/legalnotice' exact element={<LegalNoticePage />}/>
                 <Route path='/unite' exact element={<UnitHome />}/>
                 <Route path='/technologies' exact element={<TechnologiesPage />}/>
                 {/* <Route path='/unit-home' exact element={<Tespage />}/> */}
                 <Route path='/introduction' exact element={<IntroductionPage />}/>
                 <Route path='/cyberspace' exact element={<CyberSpacesPage />}/>
                 <Route path='/lawlessness' exact element={<LawlessnessSpacePage />}/>
                 <Route path='/findings' exact element={<FindingsPage />}/>
                 <Route path='/unit2homepage' exact element={<Module1_Unit2_Home />}/>
                 <Route path='/unit2threats' exact element={<Module1Unit2ThreatsPage />}/>

                 {/*============================= Admin dashboard =============================*/}
                 <Route path='/admindashboard' exact element={<AdminHomePage />}/>
                 <Route path='/clients' exact element={<ClientsPage />}/>
                 <Route path='/adminprofile' exact element={<ProfilePage />}/>
                 <Route path='/adminmodulepage' exact element={<AdminHomePagee />}/>
                 <Route path='/addmodule' exact element={<AddModulePage />}/>
                 <Route path='/editmodule1' exact element={<EditModule1Content />}/>
                 <Route path='/editmodule2' exact element={<EditModule2Content />}/>
                 <Route path='/editmodule3' exact element={<EditModule3Content />}/>
                 <Route path='/editmodule4' exact element={<EditModule4Content />}/>
                 <Route path='/editlegalnotice' exact element={<EditLegalNoticePage />}/>
                 <Route path='/legalnoticeedit' exact element={<EditNoticePage />}/>
                 <Route path='/editresources' exact element={<EditResourcesContent />}/>
                 <Route path='/editresourcesform' exact element={<EditResourcesContentForm />}/>
                 <Route path='/editresourcesform' exact element={<EditResourcesContentForm />}/>
                 <Route path='/addclients' exact element={<AddClientsPage />}/>
                 <Route path='/services' exact element={<ServicePage />}/>
                 <Route path='/login' exact element={<LoginPage />}/>
                 <Route path='/signup' exact element={<SignUpPage />}/>
                 <Route path='/editservice' exact element={<EditServicePage />}/>
                 <Route path='/specificclient' exact element={<SpecificClientPage />}/>
                 <Route path='/addunite' exact element={<AddUnitePage />}/>
                 <Route path='/editmodule' exact element={<EditModulePage/>}/>
                 <Route path='/editunite' exact element={<EditeUnitPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;