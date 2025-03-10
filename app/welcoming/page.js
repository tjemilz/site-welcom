import React from 'react';
import Link from "next/link";
import Image from "next/image";

const WelcomePage = () => {
    return (
        <div>
            <section className="max-w-3xl mx-auto p-6 rounded-lg m-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-black">Welcome to Évry!</h1>
            </section>

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-4">
                <h3 className="text-2xl font-semibold mb-3 text-green-600">Just Arriving ?</h3>
                    <p className="mb-4 text-lg text-gray-700">
                        Just arrived in Évry? No worries, we’ve got you covered!  
                        Located about 30 km south of Paris, Évry is a dynamic student-friendly city  
                        with everything you need within reach.
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-4">
                <Image src="/Evry.jpg" alt="Évry City" width={500} height={300} className="rounded-lg shadow-lg object-cover w-full max-h-[400px]" />
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
                <Image src="/Gare.jpeg" alt="Gare du bras de Fer" width={500} height={300} className="rounded-lg shadow-lg object-cover w-full max-h-[400px]" />
                </div>
                <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
                    <h3 className="text-2xl font-semibold mb-3 text-green-600">Getting Around</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                        <li><strong>RER D:</strong> Connects Évry to Paris in about 40 minutes. The closest station is Le-Bras-de-Fer (~10 min by foot).</li>
                        <li><strong>Buses:</strong> Several bus lines serve the city and the campus.</li>
                        <li><strong>Bike & Walking:</strong> Many areas are accessible by foot or bike.</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-4">
                    <h3 className="text-2xl font-semibold mb-3 text-green-600">Where to Shop?</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                        <li><strong>Carrefour Grand Évry:</strong> Large supermarket inside the Évry 2 mall.</li>
                        <li><strong>G20:</strong> Small store for quick shopping.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 p-4">
                <Image src="/Evry2.jpg" alt="Shopping" width={500} height={300} className="rounded-lg shadow-lg object-cover w-full max-h-[400px]" />
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
                    <img src="SG.jpg" alt="Services" className="rounded-lg shadow-lg object-cover w-full max-h-[400px]" />
                </div>
                <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
                    <h3 className="text-2xl font-semibold mb-3 text-green-600">Essential Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                        <li><strong>Pharmacies:</strong> Several around the city, including in Évry 2.</li>
                        <li><strong>Medical Center:</strong> CHSF (Centre Hospitalier Sud-Francilien) for emergencies.</li>
                        <li><strong>Bank & Post Office:</strong> Multiple options, especially the Société Générale.</li>
                    </ul>
                </div>
            </div>

            <section className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg m-6">
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

export default WelcomePage;