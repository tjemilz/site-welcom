import React from 'react';

const PaymentPage = () => {
    return (
        <div className = "flex flex-col p-8 gap-8 items-center "   >
            <h1 className="text-3xl text-black">Take your ticket for the trip !</h1>
            <iframe 
                src="https://www.helloasso.com/associations/ton-association/formulaires/1/widget" 
                width="100%" 
                height="800"
                className="border-none"
                allowFullScreen
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
};

export default PaymentPage;