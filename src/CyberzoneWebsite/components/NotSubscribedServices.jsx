import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import axios from 'axios'
import { API } from '../../config'
function NotSubscribedServices(props) {

    const servicesData = props.services;
    const userData = props.userData;

    const [noOfElements, setnoOfElements] = useState(4);
    const slice = servicesData.slice(0, noOfElements);
    const loadMore = () => {
        setnoOfElements(noOfElements + noOfElements);
    }
    return (
        <>
            {servicesData.map((item, index) =><div className="services_card" data-aos="zoom-in-down" data-aos-offset="200">
                <div style={{margin:"1.3rem"}}><img className="services_card_image" src={`${API}/images/${item.image}`} /></div>
                <div className="card_body" style={{marginLeft:"1.3rem"}}>
                    <h2 className="card_title services_card_title" style={{marginTop:"-.5rem", fontSize:"1.1rem"}}>{item.name}</h2>
                    <Link to="">
                        <div className="card_info service_card_info">
                        <div>{item.description}<span className="services_more" style={{marginLeft:".5rem"}}>Voir plus<FaChevronRight style={{marginLeft:".1rem"}}/></span></div>
                        </div>
                    </Link>
                    <div style={{ textAlign: "center", marginTop:"2rem"}}>
                        <Link to='/subscribe' state={{id:item._id, service_info:{service_id:item._id, modules:item.modules}, amount:item.amount, userData:userData}}><div className="subscribe_service product-buttons mt-1 mb-2 btn">
                            Subscribe Now
                        </div></Link>
                    </div>
                </div>
            </div>)}

            {/* <div class="product-buttons mt-5 mb-2" style={{ textAlign: "center" }}>
                <button onClick={() => loadMore()} style={{ textDecoration: 'none', textAlign: "center" }} type="button" class="button-default cart-btn mr-1 mt-1 btn-info"><FaChevronCircleRight style={{ paddingTop: "" }} size='1rem' color='#ffffff' />View More</button>
            </div> */}
        </>
    );
}

export default NotSubscribedServices;