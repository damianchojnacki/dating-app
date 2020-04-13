import React, {useEffect, useState} from 'react';

import 'animate.css/animate.css';
import './loading.scss';

function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, []);
    return (
        <div className="fixed w-screen h-screen bg-white flex justify-center items-center z-50 animated fadeOut delay-05s" style={{display: !loading && "none"}}>
            <div className="loader--circle"/>
        </div>
    );
}

export default Loading;
