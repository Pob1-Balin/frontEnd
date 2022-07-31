import React from "react";
import momo from "../images/momo.png"
import orange from "../images/orangemomo.jpeg"
import {Link, useLocation, useNavigate} from "react-router-dom"

function SubscribeForService() {
    const location = useLocation();
    const user = location.state.user
    const serviceId = location.state.sId
    console.log(user)
    return (
        <>
        <div className="py-3 text-white bg-dark text-center"><h1>header</h1></div>
            <div className="container">
            

            <div className="d-flex justify-between pt-5">
                <div className="col-md-4">

                    <Link to="/payment" state={{ptype:'momo', user: user, serviceId: serviceId}}>
                    <button className="rounded">
                        <img src={momo} /> <br/>
                        MTN Mobile Money (MOMO)
                    </button>
                    </Link>
                </div>

                <div className="col-md-4">

                <Link to="/payment" state={{ptype:'orange', user: user, serviceId: serviceId}}>
                    <button className="rounded">
                        <img src={orange} /> <br/>
                        Orange Money (OM)
                    </button></Link>
                </div>

                <div className="col-md-4">
                    <button>Others Coming soon!!!</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default SubscribeForService;