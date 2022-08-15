import React, { useEffect } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

function Test(){
    const navigate = useNavigate()

    console.log(window.location.href)

    const id = window.location.href.substring(37,61)
    const token = window.location.href.substring(62)
    useEffect(()=>{
        navigate('/setuserpassword', {state:{id:id, token: token}})
    })
    return(
        <>
        </>
    )
}

export default Test