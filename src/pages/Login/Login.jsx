import React, {useContext} from 'react';
import {auth, facebookAuthProvider, googleAuthProvider} from "../../firebase";
import {notify} from 'react-notify-toast';

import './login.scss';
import GoogleButton from "../../components/GoogleButton";
import FacebookButton from "../../components/FacebookButton";

function Login() {
    function handleLogin(provider) {
        auth.signInWithPopup(provider)
            .catch(error => notify.show(error.message, 'error'));
    }

    return (
        <div className="login">
            <h1 className="text-6xl">Dating app</h1>
            <div className="flex flex-col">
                <GoogleButton onClick={() => handleLogin(googleAuthProvider)}/>
                <FacebookButton onClick={() => handleLogin(facebookAuthProvider)}/>
            </div>
        </div>
    );
}

export default Login;
