import React from 'react';
import { Triangle } from 'react-loader-spinner'
function Loader(props){
    return(
        <Triangle height="80" width="80" radius="9" color="#23AFCB" ariaLabel="loading" wrapperStyle={{position: "fixed", top: "50%", left: "55%", transform: "translate(-50%, -50%)"}} wrapperClass />
    );
}

export default Loader;

