import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../AppContext";
import Layout from "../components/Layout";

function Friends() {
    const {state, dispatch} = useContext(AppContext);

    useEffect(() => {

    }, []);

    return (
        <Layout>
            Friends
        </Layout>
    );
}

export default Friends;
