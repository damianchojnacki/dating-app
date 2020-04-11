import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdeYkxnOYYP2CRLbMdrabn1NMNEb4O5lo",
    authDomain: "dating-app-a7c54.firebaseapp.com",
    databaseURL: "https://dating-app-a7c54.firebaseio.com",
    projectId: "dating-app-a7c54",
    storageBucket: "dating-app-a7c54.appspot.com",
    messagingSenderId: "1031398645870",
    appId: "1:1031398645870:web:225b089794faae521f467f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();