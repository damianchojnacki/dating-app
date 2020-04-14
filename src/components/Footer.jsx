import React from 'react';
import {FaUsers, FaSearch, FaHome} from "react-icons/fa";

import 'animate.css';
import FooterLink from "./FooterLink";

function Footer() {
    return (
        <div className="absolute bottom-0 w-full flex justify-around bg-white text-xl transform translate-y-3" style={{boxShadow: "0 -5px 10px -5px #ccc"}}>
            <FooterLink link="/" Icon={FaHome}/>
            <FooterLink link="/friends" Icon={FaUsers}/>
            <FooterLink link="/search" Icon={FaSearch}/>
        </div>
    );
}

export default Footer;
