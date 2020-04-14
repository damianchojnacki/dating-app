import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import {FaCheckCircle} from "react-icons/fa";
import Layout from "../../components/Layout";

function PreferencesCreator() {
    const [step, setStep] = useState(3);
    const [hide, setHide] = useState(false);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [preferences, setPreferences] = useState({});

    const validate = (preferences) => {
        let check = false;

        return check;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {

        };

        if (validate(credentials)) {
            setLoading(true);


        } else nextStep();
    };

    const validateStep = () => {
        switch (step) {
            case 1:
                return true;
            case 2:
                return ["man", "women"].includes(preferences.gender);
            case 3:
                return false;
            case 4:
                return true;
            case 6:
                return true;
        }
    };

    const nextStep = () => {
        if (validateStep()) {
            setHide(true);

            setTimeout(() => {
                setHide(false);

                setStep(step + 1);
            }, 1000);
        }
    };

    const previousStep = () => {
        setHide(true);

        setTimeout(() => {
            setHide(false);

            setStep(step - 1);
        }, 1000);
    };

    const displayStep = () => {
        return steps[step - 1];
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter'){
            step === 5 ? handleSubmit(e) : nextStep();
        }
    };

    useEffect(() => {
        setTimeout(() => nextStep(), 500);
    }, [preferences.gender]);

    const steps = [
        <div onKeyDown={handleKeyDown}>
            <h1 className="mb-4">
                Poprosimy cię teraz o podanie kilku niezbędnych informacji.
            </h1>
            <button onClick={nextStep} type="button" className="w-full py-4 bg-primary-700 text-white">
                OK
            </button>
        </div>,
        <div onKeyDown={handleKeyDown}>
            <h2 className="mb-8">
                Wybierz swoją płeć:
            </h2>

            <div className="flex justify-between">
                <img src="/images/women.png" className={`max-w-1/3 animate ${preferences.gender === "man" && "grayscale"}`} onClick={() => setPreferences({...preferences, gender: "women"})}/>
                <img src="/images/man.png" className={`max-w-1/3 animate ${preferences.gender === "women" && "grayscale"}`} onClick={() => setPreferences({...preferences, gender: "man"})}/>
            </div>
        </div>,
        <div onKeyDown={handleKeyDown}>
            <h2 className="mb-8">
                Wybierz swój wzrost oraz wagę:
            </h2>

            <div className="flex justify-between">
                <button onClick={previousStep} type="button" className="w-1/3 py-4 bg-primary-700 text-white">
                    Wróć
                </button>
                <button onClick={nextStep} type="button" className="w-1/3 py-4 bg-primary-700 text-white">
                    Dalej
                </button>
            </div>
        </div>,
        <div onKeyDown={handleKeyDown}>
            <h2 className="h1">
                Krok 2
            </h2>

            <button onClick={previousStep} type="button">
               Wróć
            </button>
            <button onClick={nextStep} type="button">
                Dalej
            </button>
        </div>,
        <div onKeyDown={handleKeyDown}>

        </div>,
        <div onKeyDown={handleKeyDown}>

        </div>
    ];

    const formClasses = classNames({
        "animated": true,
        "fadeOut": hide,
        "fadeIn": !hide,
        "px-6": true,
        "w-full": true,
        "text-center": true
    });

    return (
        <Layout>
            {loading ? finished ?
                <div className="flex justify-center">
                    <FaCheckCircle size="6x" className="animated bounceIn text-success text-6xl"/>
                </div>
            :
                <div className="lds-ripple">
                    <div/>
                    <div/>
                </div>
            :
                <form onSubmit={handleSubmit} className={formClasses}>
                    {displayStep()}
                </form>
            }
        </Layout>
    )
}

export default PreferencesCreator;
