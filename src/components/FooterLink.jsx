import React from 'react';
import {Link, useLocation} from "react-router-dom";

import 'animate.css';

function FooterLink({link, Icon}) {
    const {pathname} = useLocation();

    return (
        <Link to={link} className={`transform -translate-y-6 bg-white p-4 rounded-full border-4 border-white ${pathname === link && "bg-primary-700 text-white"}`} style={{boxShadow: "0 -5px 10px -7px #666"}}>
            <Icon/>
        </Link>
    );
}

export default FooterLink;
