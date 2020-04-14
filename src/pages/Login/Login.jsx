import React, {useContext} from 'react';
import {auth, facebookAuthProvider, googleAuthProvider} from "../../firebase";
import {notify} from 'react-notify-toast';

import './login.scss';
import GoogleButton from "../../components/GoogleButton";
import FacebookButton from "../../components/FacebookButton";
import Layout from "../../components/Layout";

function Login() {
    function handleLogin(provider) {
        auth.signInWithPopup(provider)
            .catch(error => {
                if(error.credential.signInMethod === "facebook.com"){
                    auth.signInWithPopup(googleAuthProvider).then(() =>{
                        auth.currentUser.linkWithPopup(facebookAuthProvider);
                    });
                } else{
                    auth.signInWithPopup(facebookAuthProvider).then(() =>{
                        auth.currentUser.linkWithPopup(googleAuthProvider);
                    });
                }
            });
    }

    return (
        <Layout>
            <div className="login">
                <h1 className="text-6xl font-light">Dating app</h1>
                <div className="flex flex-col">
                    <GoogleButton onClick={() => handleLogin(googleAuthProvider)}/>
                    <FacebookButton onClick={() => handleLogin(facebookAuthProvider)}/>
                </div>
            </div>
        </Layout>
    );
}

export default Login;
