import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";

import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Loading from "./Loading/Loading";
import {auth} from "../firebase";
import {AppContext} from "../AppContext";

import 'animate.css/animate.css';

function App() {
    const {state, dispatch} = useContext(AppContext);

    useEffect(() => {
        auth.onAuthStateChanged(user => user && dispatch({type: "login", payload: user}));
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Loading/>
            <main className="min-h-screen bg-gray-100">
                <span className="absolute p-6 text-gray-500 text-sm">alpha release</span>

                <Main />

                {state.auth.user &&
                    <>
                        <Sidebar/>

                        <Footer/>
                    </>
                }
            </main>
        </BrowserRouter>
    );
}

export default App;
