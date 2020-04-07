import React, {useContext} from 'react';
import 'animate.css';
import {Link} from "react-router-dom";
import {FaUsersCog, FaUser, FaStar} from "react-icons/fa";
import {AiOutlinePoweroff} from "react-icons/ai";
import {AppContext} from "../AppContext";

function Sidebar() {
    const {dispatch} = useContext(AppContext);

    return (
        <div className="flex flex-col justify-center items-center py-6 h-full text-2xl w-4/6 m-auto">
            <Link to="/preferences" className="w-full my-5 flex items-center justify-between">
                Preferences
                <FaUsersCog/>
            </Link>
            <Link to="/profile" className="w-full my-5 flex items-center justify-between">
                Profile
                <FaUser/>
            </Link>
            <Link to="/premium" className="w-full my-5 flex items-center justify-between">
                Premium
                <FaStar/>
            </Link>

            <Link to="#" className="w-full my-5 flex items-center justify-center justify-between text-red-500 mt-auto" onClick={() => dispatch({type: "logout"})}>
                <span className="mb-1">Log out</span>
                <AiOutlinePoweroff/>
            </Link>
        </div>
    );
}

export default Sidebar;
