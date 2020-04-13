import React from 'react';
import 'animate.css';
import {Link} from "react-router-dom";
import {FaUsers, FaSearch, FaHome} from "react-icons/fa";

function Footer() {
    return (
        <div className="absolute bottom-0 w-full flex justify-around bg-white text-xl transform translate-y-5" style={{boxShadow: "0 -5px 10px -5px #ccc"}}>
            <Link to="/" className="transform -translate-y-6 bg-white p-4 rounded-full" style={{boxShadow: "0 -5px 10px -7px #666"}}>
                <FaHome/>
            </Link>
            <Link to="/friends" className="transform -translate-y-6 bg-white p-4 rounded-full" style={{boxShadow: "0 -5px 10px -7px #666"}}>
                <FaUsers/>
            </Link>
            <Link to="/search" className="transform -translate-y-6 bg-white p-4 rounded-full" style={{boxShadow: "0 -5px 10px -7px #666"}}>
                <FaSearch/>
            </Link>
        </div>
    );
}

export default Footer;
