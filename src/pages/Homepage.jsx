import React, {useContext, useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import {AppContext} from "../AppContext";
import {checkForPreferences} from "../firebase";
import Layout from "../components/Layout";

function Homepage() {
    const {state} = useContext(AppContext);

    const [redirectToPreferences, setRedirectToPrefereneces] = useState(false);

    useEffect(() => {
        (async function () {
            if (state.auth.user && !await checkForPreferences(state.auth.user)) setRedirectToPrefereneces(true);
        })();
    }, [state]);

    if (redirectToPreferences) return <Redirect to="/preferences"/>;

    return (
        <Layout>
            Homepage
        </Layout>
    );
}

export default Homepage;
