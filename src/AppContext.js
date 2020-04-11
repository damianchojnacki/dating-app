import * as React from "react";
import {auth} from "./firebase";

const AppContext = React.createContext();

const initialState = {
    auth: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "login":
            return {
                ...state,
                auth: {
                    ...state.auth,
                    user: {
                        uid: action.payload.uid,
                        name: action.payload.displayName,
                        email: action.payload.email,
                        photoURL: action.payload.photoURL,
                    }
                }
            };
        case "logout":
            auth.signOut();

            return {
                ...state,
                auth: {}
            };
        default:
    }
};

function AppContextProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
}

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
