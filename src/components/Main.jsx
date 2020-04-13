import React, {useContext, useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import {AppContext} from "../AppContext";
import Login from "../pages/Login/Login";
import Homepage from "../pages/Homepage";
import {checkForPreferences} from "../firebase";
import PreferencesCreator from "../pages/PreferencesCreator/PreferencesCreator";
import PreferencesEditor from "../pages/PreferencesEditor/PreferencesEditor";

function Main() {
    const {state} = useContext(AppContext);
    const [preferencesExists, setPreferencesExists] = useState(false);

    useEffect(() => {
        state.auth.user && (async function(){
            const exists = await checkForPreferences(state.auth.user);

            setPreferencesExists(exists);
        })();
    }, [state]);

    return (
        <div className="overflow-auto">
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
        </div>
    );
}

export default Main;
