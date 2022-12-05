import { fontWeight, style, textAlign } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"
import orange from "../images/orangemomo.jpeg"
import momo from "../images/momo.png"
import axios from "axios";
import {API} from '../../config'

function PaymentForm(props) {
    const navigate = useNavigate()
    const style = {
        marginTop: "50px",
        fontWeight: "5px",
        fontSize: "1.5rem",
        // marginLeft: "20%",
        // marginRight: "20%",
        width: "100%",
        textAlign: "left",
        display:"flex",
        justifyContent: "space-around"
    }

    const paymentMethod = useLocation().state.ptype
    const user = useLocation().state.user
    const id=user._id
    const token = user.token
    const serviceId = useLocation().state.serviceId
    console.log(serviceId)
    let userServices = user.services.push(serviceId)
    console.log('new user services', user.services)
    // let finalUser = {
    //     services: userServices,
    // }
    // const userServices = user.servieces.push(serviceId)
    // console.log("push user" ,userServices)

    const Submit = ( finalUser)=>{
        finalUser={
            services:userServices
        }
        axios.put(`http://localhost:7000/api/v1/users/${id}`, finalUser)
            .then(res => {
                alert(res)
                // if (res.status === 200)
                // alert('service successfully added')
                // else
                // Promise.reject()
            })
            .catch(err => {
                // alert('Something went wrong')
                console.log(err)
            })
        navigate('/')

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        Submit(2)
    }
    return (
        <>
            <div className="py-3 text-white bg-dark text-center"><h1>header</h1></div>

            {
                paymentMethod == "momo"
                    ? <><div className="container">
                        <div className="" style={style}>
                            <form className="form-signin text-center" onSubmit>


                                <div class="form-label-group">
                                    <label className="text-bold" style={{
                                        fontWeight: "5px",
                                        fontSize: "1.5rem", marginTop: "50px",
                                    }}>Enter your MOMO Number</label><br />
                                    237<input type="number" className="form-control" placeholder="Enter Phone Number" required="" autofocus="" />
                                </div>

                                <div class="form-label-group">
                                    <label className="text-bold" style={{
                                        fontWeight: "5px",
                                        fontSize: "1.5rem", marginTop: "50px",
                                    }}>Enter your Amount (FCFA)</label><br />
                                    <input type="number" className="form-control width-50" placeholder="Enter Amount" required="" />
                                </div>

                                <input type="Submit" className="mx-5 mt-2" />
                            </form>
                        </div>
                        {/* <div className="col-md-7">
                        <img src={momo} width='800px' height="200vh" className="col-sm-d-none"/>
                    </div> */}
                    </div></>
                    : <><div className="container d-flex">
                        <div className=" col-md- pt-5" style={style}>
                            <form className="form-signin" onSubmit={handleSubmit}>


                                <div class="form-label-group">
                                    <label className="text-bold" style={{
                                        fontWeight: "5px",
                                        fontSize: "1.5rem", marginTop: "50px",
                                    }}>Enter your Orange money Number</label><br />
                                    237<input type="number" className="form-control" placeholder="Enter Phone Number" required="" autofocus="" />
                                </div>

                                <div class="form-label-group">
                                    <label className="text-bold" style={{
                                        fontWeight: "5px",
                                        fontSize: "1.5rem", marginTop: "50px",
                                    }}>Enter your Amount (FCFA)</label><br />
                                    <input type="number" className="form-control width-50" placeholder="Enter Amount" required="" />
                                </div>

                                <input type="Submit" className="mx-5 mt-2" />
                            </form>
                        </div>
                        {/* <div className="col-md-7">
                            <img src={orange} width='600px' height="300px" />
                        </div> */}
                    </div></>
            }
        </>
    )
}

export default PaymentForm;

