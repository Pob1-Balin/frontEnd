import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from 'react-router-dom';

import HomePage from './ClientsDashboard/pages/HomePage'
import MyProfile from './ClientsDashboard/pages/MyProfile'
import ResourcePage from './ClientsDashboard/pages/ResourcesPage'
import AttestationPage from './ClientsDashboard/pages/AttestationPage'
import LegalNoticePage from './ClientsDashboard/pages/LegalNoticePage'
import PlayerExample from './unitsDashboard/components/VideoCard';
import TestPage from './ClientsDashboard/pages/TestPage';
import AdminTestPage from './AdminDashboard/pages/AdminTestPage';

/*============================= Units dashboard =================================*/
import StructureOne from './unitsDashboard/pages/StructureOne'
import StructureTwo from './unitsDashboard/pages/StructureTwo'
import StructureThree from './unitsDashboard/pages/StructureThree';
import UnitHomePage from './unitsDashboard/pages/UnitHomePage';

import AdminStructureOne from './AdminDashboard/pages/AdminStructureOne'
import AdminStructureTwo from './AdminDashboard/pages/AdminStructureTwo'
import AdminStructureThree from './AdminDashboard/pages/AdminStructureThree';
import AdminUnitPage from './AdminDashboard/pages/AdminUnitPage';

import EditStructureOnePage from './AdminDashboard/pages/EditStructureOnePage';
import EditStructureTwoPage from './AdminDashboard/pages/EditStructureTwoPage';
import EditStructureThreePage from './AdminDashboard/pages/EditStructureThreePage';

import AddStructureOnePage from './AdminDashboard/pages/AddStructureOnePage';
import AddStructureTwoPage from './AdminDashboard/pages/AddStructureTwoPage';
import AddStructureThreePage from './AdminDashboard/pages/AddStructureThreePage';

/*============================= User Authentication =================================*/
import UserLoginPage from './Auth/pages/UserLoginPage';
import UserForgotPasswordPage from './Auth/pages/UserForgotPasswordPage';
import UserCheckEmailPage from './Auth/pages/UserCheckEmailPage';
import SetUserPasswordPage from './Auth/pages/SetUserPasswordPage';
import UserPasswordSetMessagePage from './Auth/pages/UserPasswordSetMessagePage';
import ClientRegisterPage from './Auth/pages/ClientRegisterPage';
import AdminRegistrationPage from './Auth/pages/AdminRegistrationPage';
import AdminLoginContent from './Auth/body-content/AdminLoginContent';
import AdminForgotPasswordPage from './Auth/pages/AdminForgotPasswordPage';

/*============================= Admin dashboard =================================*/
import AdminHomePage from './AdminDashboard/pages/HomePage';
import ProfilePage from './AdminDashboard/pages/ProfilePage';
import AdminLegalNoticePage from './AdminDashboard/pages/LegalNoticePage';
import ClientsPage from './AdminDashboard/pages/ClientsPage';
import AdminModulePage from './AdminDashboard/pages/ModulePage';
import AddModulePage from './AdminDashboard/pages/AddModulePage';
import AddUnitePage from './AdminDashboard/pages/AddUnitPage';
import EditModulePage from './AdminDashboard/pages/EditModulePage';
import EditeUnitPage from './AdminDashboard/pages/EditUnitPage';
import UnitsPage from './AdminDashboard/pages/UnitsPage'
import EditNoticePage from './AdminDashboard/pages/EditNoticePage';
import AdminResourcePage from './AdminDashboard/pages/ResourcesPage';
import EditResourcePage from './AdminDashboard/pages/EditResourcePage';
import AddClientsPage from './AdminDashboard/pages/AddClientsPage';
import ServicePage from './AdminDashboard/pages/ServicesPage';
import EditClientPage from './AdminDashboard/pages/EditClientPage';
import EditAdminProfilePage from './AdminDashboard/pages/EditAdminProfilePage';
import EditServicePage from './AdminDashboard/pages/EditServicePage';
import SpecificClientPage from './AdminDashboard/pages/SpecificClientPage';
import AddServicePage from './AdminDashboard/pages/AddServicePage';
import UnitsClientsPage from './ClientsDashboard/pages/UnitsPage'
import AddQuestionPage from './AdminDashboard/pages/AddQuestionPage'
import ClientsServicesPage from './CyberzoneWebsite/pages/ClientsServicesPage';
import UnitStructures from './AdminDashboard/pages/structures';
import EditQuestionPage from './AdminDashboard/pages/EditQuestionPage';
import EditUnitHomePage from './AdminDashboard/pages/EditUnitHomePage';




import NotFoundPage from './unitsDashboard/pages/notFound';
import SubscribeForService from './ClientsDashboard/pages/SubscribeForService' 
import PaymentForm from './ClientsDashboard/pages/PaymentForm';
/*========================= main site pages =======================*/
import SiteHomePage from './CyberzoneWebsite/pages/SiteHomePage';
import Test from './test';


function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path='/clientservicedashboard' exact element={<HomePage/>}/>
                 <Route path='/home' exact element={<ClientsServicesPage/>}/>
                 <Route path='/profile' exact element={<MyProfile/>}/>
                 <Route path='/res' exact element={<ResourcePage/>}/>
                 <Route path='/attest' exact element={<AttestationPage/>}/>
                 <Route path='/legalnotice' exact element={<LegalNoticePage />}/>
                 <Route path='/unitsclients' exact element={<UnitsClientsPage />}/>
                 <Route path='/admintest' exact element={<AdminTestPage />}/>
                 <Route path='/test' exact element={<TestPage />}/>

                {/*============================= Units dashboard =============================*/}
                <Route path='/unitcontent' exact element={<UnitHomePage />}/>
                <Route path='/structureone' exact element={<StructureOne />}/>
                <Route path='/structuretwo' exact element={<StructureTwo />}/>
                <Route path='/structurethree' exact element={<StructureThree />}/>

                <Route path='/adminunitcontent' exact element={<AdminUnitPage />}/>
                <Route path='/adminstructureone' exact element={<AdminStructureOne />}/>
                <Route path='/adminstructuretwo' exact element={<AdminStructureTwo />}/>
                <Route path='/adminstructurethree' exact element={<AdminStructureThree />}/>

                <Route path='/editstructureone' exact element={<EditStructureOnePage />}/>
                <Route path='/editstructuretwo' exact element={<EditStructureTwoPage />}/>
                <Route path='/editstructurethree' exact element={<EditStructureThreePage />}/>

                <Route path='/addstructureone' exact element={<AddStructureOnePage />}/>
                <Route path='/addstructuretwo' exact element={<AddStructureTwoPage />}/>
                <Route path='/addstructurethree' exact element={<AddStructureThreePage />}/>



                 {/*============================= User Authentication =============================*/}
                <Route path='/' exact element={<UserLoginPage />}/>
                <Route path='/forgotpassword' exact element={<UserForgotPasswordPage />}/>
                <Route path='/checkemail' exact element={<UserCheckEmailPage />}/>
                <Route path='/setuserpassword' exact element={<SetUserPasswordPage />}/>
                <Route path='/userpasswordsetmessage' exact element={<UserPasswordSetMessagePage/>}/>
                <Route path='/clientregister' exact element={<ClientRegisterPage/>}/>
                <Route path='/adminregister' exact element={<AdminRegistrationPage/>}/>
                <Route path='/adminlogin' exact element={<AdminLoginContent/>}/>
                <Route path='/adminforgotpassword' exact element={<AdminForgotPasswordPage/>}/>
                <Route path='/password-reset/:id/:token' element={<Test/>}/>
                




                 {/*============================= Admin dashboard =============================*/}
                 <Route path='/admindashboard' exact element={<AdminHomePage />}/>
                 <Route path='/clients' exact element={<ClientsPage />}/>
                 <Route path='/adminprofile' exact element={<ProfilePage />}/>
                 <Route path='/adminmodulepage' exact element={<AdminModulePage />}/>
                 <Route path='/addmodule' exact element={<AddModulePage />}/>
                 <Route path='/adminlegal' exact element={<AdminLegalNoticePage />}/>

                 <Route path='/units' exact element={<UnitsPage/>}/>
                 <Route path='/editlegalnotice' exact element={<EditNoticePage />}/>
                 <Route path='/addclients' exact element={<AddClientsPage />}/>
                 <Route path='/services' exact element={<ServicePage />}/>
                 <Route path='/editservice' exact element={<EditServicePage />}/>
                 <Route path='/editadminprofile' exact element={<EditAdminProfilePage />}/>
                 <Route path='/specificclient' exact element={<SpecificClientPage />}/>
                 <Route path='/addunite' exact element={<AddUnitePage />}/>
                 <Route path='/editmodule' exact element={<EditModulePage/>}/>
                 <Route path='/adminresource' exact element={<AdminResourcePage/>}/>
                 <Route path='/editresource' exact element={<EditResourcePage/>}/>
                 <Route path='/editunit' exact element={<EditeUnitPage/>}/>
                 <Route path='/editclient' exact element={<EditClientPage/>}/>
                 <Route path='/addservice' exact element={<AddServicePage/>}/>
                 <Route path='/addquestion' exact element={<AddQuestionPage/>}/>
                 <Route path='/editquestion' exact element={<EditQuestionPage />}/>
                 <Route path='/unit-structures' exact element = {<UnitStructures/>}/>
                 <Route path='/editunithome' exact element = {<EditUnitHomePage/>}/>

                 {/* main site home page */}
                 <Route path='/mainhomepage' exact element={<SiteHomePage/>}/>
                 <Route path='/*' exact element={<NotFoundPage/>}/>

                 <Route path='/subscribe' exact element={<SubscribeForService/>}/>
                 <Route path='/payment' exact element={<PaymentForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;