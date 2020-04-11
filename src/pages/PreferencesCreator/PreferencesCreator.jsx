import React, {useState} from 'react';
import classNames from 'classnames';
import {FaCheckCircle} from "react-icons/fa";

function PreferencesCreator() {
    const [step, setStep] = useState(1);
    const [hide, setHide] = useState(false);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);

    const validate = (credentials) => {
        let check = true;



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
                return true;
            case 3:
                return true;
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

    const steps = [
        <div onKeyDown={handleKeyDown}>
            <h1 className="mb-4">
                Uzupełnij preferencje
            </h1>
            <button onClick={nextStep}>
                OK
            </button>
        </div>,
        <div onKeyDown={handleKeyDown}>
            <h2 className="h1">
                Krok 1
            </h2>

            <button onClick={nextStep} className="float-right">
                Dalej
            </button>
        </div>,
        <div onKeyDown={handleKeyDown}>
            <h2 className="h1">
                Krok 2
            </h2>

            <button onClick={previousStep}>
               Wróć
            </button>
            <button onClick={nextStep} className="float-right">
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
    });

    return (
        <div>
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
        </div>
    )
}

export default PreferencesCreator;
