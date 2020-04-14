import React, {useContext, useEffect, useState} from 'react';

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {AppContext} from "../AppContext";

function Layout(props) {
    const {state} = useContext(AppContext);

    return (
        <>
            <main className="min-h-screen bg-gray-100">
                <span className="absolute p-6 text-gray-500 text-sm">alpha release</span>

                <div className="overflow-auto flex justify-center items-center min-h-screen">
                    {props.children}
                </div>

                {state.auth.user &&
                    <>
                        <Sidebar/>

                        <Footer/>
                    </>
                }
            </main>
        </>
    );
}

export default Layout;
