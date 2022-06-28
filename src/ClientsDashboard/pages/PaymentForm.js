import { fontWeight, style, textAlign } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom"
import orange from "../images/orangemomo.jpeg"
import momo from "../images/momo.png"

function PaymentForm(props) {
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
    const paymentMethod = useLocation().state
    return (
        <>
            <div className="py-3 text-white bg-dark text-center"><h1>header</h1></div>

            {
                paymentMethod == "momo"
                    ? <><div className="container">
                        <div className="" style={style}>
                            <form className="form-signin text-center">


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
                            <form className="form-signin">


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

