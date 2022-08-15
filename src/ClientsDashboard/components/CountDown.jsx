import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'

function CountDown(props){
    const navigate = useNavigate();
    const [time, setTime] = useState("");
    const [stopTime, setStopTime] = useState(5000);
    const [timeRemaining, setTimeRemaining] = useState(0);
    useEffect(() => {
        // let countDown = new Date("Jan 01, 2023 00:00:00").getTime();
        let countDown = new Date().getTime() + parseInt(props.time) + 2000;

        //update every second
        let x = setInterval(function () {

        // Get todays date and time
        let now = new Date().getTime();

        // distance between them;
        let distance = countDown - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime(hours + "h " + minutes + "m " + seconds + "s");
        // setTime(hours + " : " + minutes + " : " + seconds);

        if(distance < 0){
            clearInterval(x);
            navigate('/unitsclients', {state:{id:props.module_id, title:props.title, module_name:props.module_name}});
        }

        }, 1000)

    }, [])
    return(
        <>
            {time}
        </>
    );
}


export default CountDown;