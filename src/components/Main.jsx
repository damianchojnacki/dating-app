import React, {useContext, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import {AppContext} from "../AppContext";
import Login from "./Login/Login";

function Main() {
    const {state} = useContext(AppContext);

    return (
        <Switch>
            {state.auth.user ?
                <>
                    <Route exact path="/">
                        Homepage
                    </Route>

                    <Route path="/preferences">
                        Preferences
                    </Route>

                    <Route path="/profile">
                        Profile
                    </Route>

                    <Route path="/premium">
                        Premium
                    </Route>
                </>
            :
                <Route exact path="/">
                    <Login/>
                </Route>
            }
        </Switch>
    );
}

export default Main;
