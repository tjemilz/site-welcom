import React from "react";
import Image from "next/image";

const PartenairesPage = () => {
return (
    <div className="flex flex-col pt-8">
        <div className="bg-green-800 rounded-lg mx-auto px-9 py-3 mb-6 max-w-md">
            <h1 className="text-4xl font-bold text-center text-white">Our Partners</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center pt-8 md:gap-32 gap-16 justify-center">
            <a href="https://www.societegenerale.com" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/logo_sg.png"
                    alt="Logo Société Générale"
                    width={800}
                    height={800}
                    className="object-contain max-w-[300px] "
                />
            </a>
            <a href="https://www.telecom-sudparis.eu/">
                <Image
                src="/tsp2.png"
                alt="Logo TSP"
                width={800}
                height={800}
                className="object-contain max-w-[300px] "
            />
            </a>
            
            <a href="https://www.imt-bs.eu/">
            <Image
                src="/imtbs.png"
                alt="Logo IMT-BS"
                width={800}
                height={800}
                className="object-contain max-w-[300px] "
            />
            </a>
        </div>
    </div>
);
}

export default PartenairesPage;