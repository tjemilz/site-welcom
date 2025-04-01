"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const images = [
  { src: '/Accueil/image1.png', alt: 'Image 1' },
  { src: '/Accueil/image2.png', alt: 'Image 2' },
  { src: '/Accueil/image3.png', alt: 'Image 3' },
  { src: '/Accueil/image4.png', alt: 'Image 4' },

];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 600); // Durée de la transition en fondu
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className={`relative w-full aspect-[16/9] ${fade ? 'fade-enter fade-enter-active' : 'fade-exit fade-exit-active'}`}>
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          width={1000}
          height={1000}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;