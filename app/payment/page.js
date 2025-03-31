import React from 'react';


const PaymentPage = () => {
   

    return (
        <div className="flex flex-col pt-8">
            <div className="bg-green-800 rounded-lg mx-auto px-9 py-3 mb-6 max-w-md">
                <h1 className="text-4xl font-bold text-center text-white">Tickets to Bruxelles</h1>
            </div>
            <iframe id="haWidget" allowtransparency="true" src="https://www.helloasso.com/associations/welcom-evry/evenements/voyage-bruxelles/widget" className="justify-center h-screen"></iframe>
        </div>
    );
};

export default PaymentPage;