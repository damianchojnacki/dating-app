import React, {useContext, useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import {AppContext} from "../AppContext";
import {checkForPreferences} from "../firebase";

function Homepage() {
    const {state} = useContext(AppContext);

    const [redirectToPreferences, setRedirectToPrefereneces] = useState(false);

    useEffect(() => {
        (async function () {
            if (state.auth.user && !await checkForPreferences(state.auth.user)) setRedirectToPrefereneces(true);
        })();
    });

    if (redirectToPreferences) return <Redirect to="/preferences"/>;

    return (
        <>
            Homepage
        </>
    );
}

export default Homepage;
