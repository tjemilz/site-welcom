"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const images = [
  { src: '/Carroussel/Image1.jpg', alt: 'Image 1' },
  { src: '/Carroussel/Image2.jpg', alt: 'Image 2' },

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
    <div className="flex justify-center ">
      <div className={fade ? 'fade-enter fade-enter-active' : 'fade-exit fade-exit-active'}>
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          width={1000}
          height={1000}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;