import React, {useContext, useState} from 'react';
import 'animate.css';
import {Link} from "react-router-dom";
import {FaUsersCog, FaUser, FaStar, FaFingerprint, FaTimes} from "react-icons/fa";
import {AiOutlinePoweroff} from "react-icons/ai";
import {AppContext} from "../AppContext";
import {IoMdClose} from "react-icons/all";

function Sidebar() {
    const {state, dispatch} = useContext(AppContext);

    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <>
            <div className="absolute top-0 right-0 p-4 z-30 text-5xl cursor-pointer">
                <img src={state.auth.user.photoURL} alt="User icon" className={`h-10 rounded-full animated fast ${toggleSidebar ? "hidden" : "flipInX"}`} onClick={() => setToggleSidebar(true)}/>
            </div>

            <aside className={`${toggleSidebar ? "translate-x-0" : "translate-x-full opacity-0 invisible"} transform w-screen fixed top-0 right-0 h-screen z-20 animate bg-white text-white`}>
                <div className="p-8 pt-12 h-full text-2xl m-auto bg-primary-700 shadow-lg" style={{borderRadius: "0 0 0 9999px", height: "75vh"}}>
                    <Link to="/preferences" className="my-6 flex items-center justify-end">
                        Preferences
                        <FaUsersCog className="ml-5"/>
                    </Link>
                    <Link to="/profile" className="my-6 flex items-center justify-end">
                        Profile
                        <FaUser className="ml-5"/>
                    </Link>
                    <Link to="/security" className="my-6 flex items-center justify-end">
                        Security
                        <FaFingerprint className="ml-5"/>
                    </Link>
                    <Link to="/premium" className="my-6 flex items-center justify-end">
                        Premium
                        <FaStar className="ml-5"/>
                    </Link>

                    <Link to="#" className="my-6 flex items-center justify-end text-red-400" onClick={() => dispatch({type: "logout"})}>
                        Log out
                        <AiOutlinePoweroff className="ml-5"/>
                    </Link>
                </div>
            </aside>

            <div className={`absolute bottom-1/8 flex justify-center w-full text-white z-30 animated faster ${toggleSidebar ? "flipInX" : "flipOutX"}`} onClick={() => setToggleSidebar(false)}>
                <span className="p-5 bg-primary-700 rounded-full shadow-md text-3xl">
                    <IoMdClose/>
                </span>
            </div>
        </>
    );
}

export default Sidebar;
