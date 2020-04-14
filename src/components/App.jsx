import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {auth, checkForPreferences} from "../firebase";
import {AppContext} from "../AppContext";

import 'animate.css/animate.css';
import Homepage from "../pages/Homepage";
import PreferencesEditor from "../pages/PreferencesEditor/PreferencesEditor";
import PreferencesCreator from "../pages/PreferencesCreator/PreferencesCreator";
import Login from "../pages/Login/Login";
import Loading from "./Loading/Loading";
import Friends from "../pages/Friends";

function App() {
    const {state, dispatch} = useContext(AppContext);
    const [preferencesExists, setPreferencesExists] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => user && dispatch({type: "login", payload: user}));
    }, [dispatch]);


    useEffect(() => {
        state.auth.user && (async function(){
            const exists = await checkForPreferences(state.auth.user);

            setPreferencesExists(exists);
        })();
    }, [state]);

    return (
        <BrowserRouter>
            <Loading/>

            <Switch>
                {state.auth.user ?
                    <>
                        <Route exact path="/" component={Homepage}/>

                        <Route path="/preferences">
                            {preferencesExists ?
                                <PreferencesEditor/>
                            :
                                <PreferencesCreator/>
                            }
                        </Route>

                        <Route path="/friends" component={Friends}/>

                        <Route path="/profile">
                            Profile
                        </Route>

                        <Route path="/premium">
                            Premium
                        </Route>
                    </>
                    :
                    <Route exact path="*">
                        <Login/>
                    </Route>
                }
            </Switch>
        </BrowserRouter>
    );
}

export default App;
