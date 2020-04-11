import React, {useContext} from 'react';
import {Route, Switch} from "react-router-dom";
import {AppContext} from "../AppContext";
import Login from "../pages/Login/Login";
import Homepage from "../pages/Homepage";

function Main() {
    const {state} = useContext(AppContext);

    return (
        <Switch>
            {state.auth.user ?
                <>
                    <Route exact path="/" component={Homepage}/>

                    <Route path="/preferences">Preferences</Route>

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
    );
}

export default Main;
