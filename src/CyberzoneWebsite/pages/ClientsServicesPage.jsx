import React from 'react';
import ClientsServicesPageContent from '../body-content/ClientsServicesPageContent'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Sidebar from '../components/Sidebar';


function ClientsServicesPage() {
  const navigate = useNavigate()

  const {user} = useSelector((state)=>state.auth)


  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[user, navigate])
  return (
    <>
     <Sidebar/>
      <main>
         <ClientsServicesPageContent user={user}/>
      </main>
    </>
  );
}

export default ClientsServicesPage;
