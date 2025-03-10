import React from 'react';
import Carousel from '../components/Carroussel';

const slides = [
  { src: '/Carroussel/Image1.jpg', alt: 'Image 1' },
  { src: '/Carroussel/Image2.jpg', alt: 'Image 2' },
  { src: '/Carroussel/Image3.jpg', alt: 'Image 3' },
  { src: '/Carroussel/Image4.jpg', alt: 'Image 4' },
  { src: '/Carroussel/Image5.jpg', alt: 'Image 5' },
  { src: '/Carroussel/Image6.jpg', alt: 'Image 6' },
  { src: '/Carroussel/Image7.jpg', alt: 'Image 7' },
  { src: '/Carroussel/Image8.jpg', alt: 'Image 8' },
  { src: '/Carroussel/Image9.jpg', alt: 'Image 9' },
  { src: '/Carroussel/Image10.jpg', alt: 'Image 10' },
  { src: '/Carroussel/Image11.jpg', alt: 'Image 11' },
  { src: '/Carroussel/Image12.jpg', alt: 'Image 12' },
  { src: '/Carroussel/Image13.jpg', alt: 'Image 13' },
  { src: '/Carroussel/Image14.jpg', alt: 'Image 14' },
  { src: '/Carroussel/Image15.jpg', alt: 'Image 15' },
];

const EventsPage = () => {
    return (
      <div className='flex justify-center pt-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8  w-full m-10'>
          <div className='p-4 '>
            <p className='text-black'>
            Throughout the year, immerse yourself in a 
            vibrant lineup of global celebrations that bring people together in joy and festivity. 
            From the lively parades and green-themed festivities of Saint Patrick’s Day to the romantic 
            charm of Valentine’s Day, there’s always something to celebrate. 
            Experience the dazzling colors and energetic spirit of Carnaval, 
            indulge in the rich traditions and hearty brews of Oktoberfest, 
            and embrace countless other cultural events that make each season special. 
            No matter the occasion, our events offer unforgettable moments filled with music, 
            laughter, and a shared sense of joy.

  
            </p>
          </div>
          <div className='min-h-screen '>
            <Carousel>
              {slides.map((slide, index) => (
                <img key={index} src={slide.src} alt={slide.alt} className="object-cover" />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
};

export default EventsPage;