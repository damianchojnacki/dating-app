import React from 'react';
import {FaFacebookSquare} from "react-icons/fa";

function FacebookButton({onClick}) {
    return (
        <button className="my-2 px-4 py-3 shadow-md rounded font-bold flex justify-between items-center text-white" style={{backgroundColor: "#3B5998"}} onClick={onClick}>
            <FaFacebookSquare className="text-2xl"/>
            <span className="ml-3">Kontynuuj z Facebook</span>
        </button>
    );
}

export default FacebookButton;
