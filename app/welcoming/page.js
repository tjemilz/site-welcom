import React from 'react';
import Link from "next/link";

const WelcomePage = () => {
    return (
        <div>
        
        <section className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg m-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-black">Welcome to Évry!</h1>

            <p className="mb-4 text-lg text-gray-700">
                Just arrived in Évry? No worries, we’ve got you covered!  
                Located about 30 km south of Paris, Évry is a dynamic student-friendly city  
                with everything you need within reach.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-green-600">Getting Around</h3>

            <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li><strong>RER D:</strong> Connects Évry to Paris in about 40 minutes. The closest station is Le-Bras-de-Fer (~10 min by foot).</li>
                <li><strong>Buses:</strong> Several bus lines serve the city and the campus.</li>
                <li><strong>Bike & Walking:</strong> Many areas are accessible by foot or bike.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-green-600">Where to Shop?</h3>

            <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li><strong>Carrefour Grand Évry:</strong> Large supermarket inside the Évry 2 mall.</li>
                <li><strong>G20:</strong> Small store for quick shopping.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-green-600">Essential Services</h3>

            <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li><strong>Pharmacies:</strong> Several around the city, including in Évry 2.</li>
                <li><strong>Medical Center:</strong> CHSF (Centre Hospitalier Sud-Francilien) for emergencies.</li>
                <li><strong>Bank & Post Office:</strong> Multiple options, including La Poste & Société Générale.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-green-600">Places to Hang Out</h3>

            <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li><strong>Évry 2 Mall:</strong> The city’s main shopping and leisure center.</li>
                <li><strong>Absinthe Bar:</strong> Popular student-friendly bar of the campus.</li>
                <li><strong>Parc des Coquibus:</strong> Perfect for a walk or a picnic.</li>
                <li><strong>Cinema CGR:</strong> Great for catching the latest movies.</li>
            </ul>

            <p className="mt-6 text-lg text-gray-700">
                Whether you need to do groceries, find entertainment, or simply explore,  
                Évry has everything you need for a smooth start!
            </p>

            <p className="mt-6 text-center text-xl font-semibold text-green-600">
                Below there is a map of the main places to go in and out of the campus. 
            </p>
            <p className="mt-6 text-center text-2xl font-semibold text-green-600">
                Enjoy your stay in Évry!
            </p>
            </section>
            <div className="">
                <iframe src="https://www.google.com/maps/d/embed?mid=1OVPySFru7heKdx6vBtgdzaZ2crxRhKU&ehbc=2E312F" loading="lazy" width="100%" height="500px" allowFullScreen></iframe>
            </div>
            
        
        </div>

    );
};


// Composant de lien stylé
const IFrame = ({ src }) => (
    <Link
        src={src}
    >
        
    </Link>
);


export default WelcomePage;