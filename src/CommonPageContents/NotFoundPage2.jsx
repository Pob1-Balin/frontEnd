import React from 'react'
import './styey.css'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
function NotFoundPage2(){
    const {user} = useSelector((state)=>state.auth)
    return(
        <>
            <div id="BodyContent" className="">
                <div style={{textAlign:"center"}}>
                    <p className='m404'>404</p>
                    <p className='err'>Erreur interne !</p>
                    <p className='message'>Vous essayez de retrouver votre chemin ?</p>
                    {user.isAdmin ? 
                        <Link to="/services">
                            <div className='button'><button>Retour à l’accueil</button></div>
                        </Link>
                        :
                        <Link to="/home">
                            <div className='button'><button>Retour à l’accueil</button></div>
                        </Link>
                    }
                    
                    {/* <p className='copy'>© 2022 Cyberzone Academy</p> */}
                </div>
            </div>
        </>
    )
}

export default NotFoundPage2;