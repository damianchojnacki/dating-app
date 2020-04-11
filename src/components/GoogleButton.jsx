import React from 'react';
import {FaGoogle} from "react-icons/fa";

function GoogleButton({onClick}) {
    return (
        <button className="my-2 px-4 py-3 bg-white shadow-md rounded font-bold flex justify-between items-center" onClick={onClick}>
            <FaGoogle className="text-xl"/>
            <span className="ml-3">Sign in with Google</span>
        </button>
    );
}

export default GoogleButton;
