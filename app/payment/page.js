import React from 'react';
import Countdown from '../components/Countdown'; // Assurez-vous que le chemin est correct
import SablierAnime from './Sablier';

const PaymentPage = () => {
    const targetDate = '2025-03-19T00:00:00'; // Date cible pour le compte à rebours

    return (
        <div className="flex flex-col items-center pt-8 sm:p-8">
            <h1 className="text-2xl sm:text-3xl text-black text-center mb-4">Where to next?</h1>
            <Countdown targetDate={targetDate} />
            <div className="flex justify-center items-center">
                <SablierAnime />
            </div>
        </div>
    );
};

export default PaymentPage;