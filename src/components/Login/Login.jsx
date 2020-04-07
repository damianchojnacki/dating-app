import React, {useContext} from 'react';
import {auth, googleAuthProvider} from "../../firebase";
import GoogleButton from 'react-google-button';
import {notify} from 'react-notify-toast';

import {AppContext} from "../../AppContext";

import './login.scss';

function Login() {
    const {dispatch} = useContext(AppContext);

    function handleLogin(provider) {
        auth.signInWithPopup(provider)
            .then(res => dispatch({type: "login", payload: res.user}))
            .catch(error => notify.show(error.message, 'error'));
    }

    return (
        <div className="login">
            <h1 className="text-6xl">Dating app</h1>
            <GoogleButton type="light" onClick={() => handleLogin(googleAuthProvider)}>Login</GoogleButton>
        </div>
    );
}

export default Login;
