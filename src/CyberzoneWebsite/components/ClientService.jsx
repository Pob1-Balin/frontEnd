import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from "react-icons/fa";
import axios from 'axios'
import {API} from '../../config'
function ClientService(props){
    const data = {
        // cardData:[
        //     {
        //         id:1,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:2,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:3,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:4,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:5,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:6,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:7,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:8,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:9,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:10,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:11,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        //     {
        //         id:12,
        //         name: 'Name',
        //         description: 'Short description of the service uuhij ojpo gdyud khduh suh suush sihd suhd iuhsdohs sdhoi suhd Short description of the service uuhij ojpo gdyud khduh suh suush sihd'
        //     },
        // ]
    }

    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get(`${API}/service/subscribed`).then(({data})=>{
            setServices(data.data)
        }).catch((err)=>{
           //  console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
    }, []);

    console.log(services)

    const [noOfElements, setnoOfElements] = useState(4);
    // const slice = data.cardData.slice(0, noOfElements);
    const loadMore = () => {
        setnoOfElements(noOfElements + noOfElements);
    }

    return(
        <>
        {services.map((item) => {
            return <div data-aos="zoom-in" data-aos-offset="100" class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                <div class="courses-inner mg-t-30">
                    <div class="courses-title">
                        <a href="#"><img src={item.image} alt="" /></a>
                        <h2 style={{color:"gray"}}>{item.name}</h2>
                    </div>
                    <div class="course-des" style={{ paddingLeft: ".3rem" }}>
                        <p style={{color:"gray"}}><span></span> <b>{item.description}</b></p>
                    </div>

                    <Link to="/clientservicedashboard" style={{ textDecoration: "none" }} state={{id: item._id}}>
                        <div className='module_units_button' style={{ marginTop: "1rem", marginBottom: '-1.3rem' }}>
                            <FaChevronCircleRight size='1rem' style={{ marginTop: '4.5px' }} />
                            <p style={{ paddingLeft: ".2rem", paddingTop: ".1rem", fontSize: '1rem' }}>Visit</p>
                        </div>
                    </Link>
                </div>
            </div>
        })}
        <div class="product-buttons mt-5 mb-2" style={{textAlign:"center"}}>
            <button onClick={() => loadMore()} style={{ textDecoration: 'none', textAlign:"center" }} type="button" class="button-default cart-btn mr-1 mt-1 btn-info"><FaChevronCircleRight style={{paddingTop: ""}} size='1rem' color='#ffffff'/> View More</button>
        </div>
        </>
    );
}

export default ClientService;