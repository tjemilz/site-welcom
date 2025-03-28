import React from 'react';
import Countdown from '../components/Countdown'; // Assurez-vous que le chemin est correct
import SablierAnime from './Sablier';

const PaymentPage = () => {
    const targetDate = '2025-03-19T00:00:00'; // Date cible pour le compte à rebours

    return (
        <div className="flex flex-col pt-8">
            <div className="bg-blue-800 rounded-lg mx-auto px-6 py-3 mb-6 max-w-md">
                <h1 className="text-4xl font-bold text-center text-white">Tickets to Bruxelles</h1>
            </div>
            <iframe id="haWidget" allowtransparency="true" src="https://www.helloasso.com/associations/welcom-evry/evenements/voyage-bruxelles/widget" className="justify-center h-screen"></iframe>
        </div>
    );
};

export default PaymentPage;