import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {IoMdClose} from "react-icons/all";

import Main from "./Main";
import Sidebar from "./Sidebar";
import {AppContext} from "../AppContext";

import 'animate.css/animate.css';
import {auth} from "../firebase";

function App() {
    const {state, dispatch} = useContext(AppContext);

    const [toggleSidebar, setToggleSidebar] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => user && dispatch({type: "login", payload: user}));
    }, [dispatch]);

    return (
        <BrowserRouter>
            <main className="min-h-screen">
                <span className="absolute p-6 text-gray-500 text-sm">alpha release</span>

                <Main />

                {state.auth.user &&
                    <>
                        <div className="absolute top-0 right-0 p-4 z-30 text-4xl cursor-pointer">
                            <img src={state.auth.user.photoURL} alt="User icon" className={`h-10 rounded-full animated fast ${toggleSidebar ? "hidden" : "flipInX"}`} onClick={() => setToggleSidebar(true)}/>
                            <IoMdClose className={`animated fast ${toggleSidebar ? "flipInX" : "hidden"}`} onClick={() => setToggleSidebar(false)}/>
                        </div>

                        <aside className={`${toggleSidebar ? "w-screen" : "w-0 opacity-0 invisible"} fixed h-screen top-0 right-0 bg-primary-200 pt-8 z-20 animate`} onClick={() => setToggleSidebar(!toggleSidebar)}>
                            <Sidebar toggled={toggleSidebar}/>
                        </aside>
                    </>
                }
            </main>
        </BrowserRouter>
    );
}

export default App;
