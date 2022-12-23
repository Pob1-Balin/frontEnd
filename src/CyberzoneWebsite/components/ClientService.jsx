import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight, FaChevronCircleRight, FaFileAlt } from "react-icons/fa";
import axios from 'axios'
import { API } from '../../config'
function ClientService(props) {
    const userServices = props.services;
    const navigate = useNavigate()
    


    // const comServ = props.user.services  //['62beae1368a6026244db706a','62c56e866122d005004fa3a8'];
    // console.log('test', comServ)
    // let serv = comServ[0]
    // for (var i = 1; i <= comServ.length - 1; i++) {
    //     serv = serv + '-' + comServ[i]
    // }

    // console.log(serv)
    // // const [services1, setServices1] = useState([])
    // useEffect(() => {
    //     axios.get(`${API}/service/user/${serv}`).then(({ data }) => {
    //         setServices(data.data)
    //     }).catch((err) => {
    //         //  console.log("Something Went Wrong:", err)
    //     })
    // }, []);


    // console.log('servic', services)

    const [noOfElements, setnoOfElements] = useState(1);
    const slice = userServices.slice(0, noOfElements);
    const loadMore = () => {
        setnoOfElements(noOfElements + noOfElements);
    }

    const moveto = (e) => {
        localStorage.removeItem("servId")
        localStorage.setItem("servId", JSON.stringify(e));
        navigate("/clientservicedashboard", {state:{service_id: e._id, modules: e.modules}});
    }

    return (
        <>
            {userServices.map((item) => {
                return (
                    <div className="services_card" data-aos="zoom-in-down" data-aos-offset="50">
                        <div style={{margin:"1.3rem"}}><img className="services_card_image" src={`/images/${item.image}`} /></div>
                        <div className="card_body" style={{marginLeft:"1.3rem"}}>
                            <h2 className="card_title services_card_title" style={{marginTop:"-.5rem", fontSize:"1.1rem"}}>{item.name}</h2>
                            <div className="card_info service_card_info">
                                <div>{item.description}<span className="services_more" style={{marginLeft:".5rem"}}></span></div>
                            </div>
                            <div onClick={() => moveto(item)} className='module_units_button' style={{ marginTop: "1rem", marginBottom: '-1.3rem' }}>
                                <FaChevronCircleRight size='1rem' style={{ marginTop: '.5rem', marginLeft:".3rem" }} />
                                <p style={{ paddingLeft: ".2rem", paddingTop: ".25rem", fontSize: '.9rem' }}>Visite</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default ClientService;