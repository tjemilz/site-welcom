import React from 'react';
import Carousel from '../components/Carroussel';

const slides = [
  { src: '/Carroussel/Image1.jpg', alt: 'Image 1' },
  { src: '/Carroussel/Image2.jpg', alt: 'Image 2' },
  { src: '/Carroussel/Image3.jpg', alt: 'Image 3' },
  { src: '/Carroussel/Image4.jpg', alt: 'Image 4' },
  { src: '/Carroussel/Image5.jpg', alt: 'Image 5' },
  { src: '/Carroussel/Image6.jpg', alt: 'Image 6' },
  { src: '/Carroussel/Image13.jpg', alt: 'Image 13' },
  { src: '/Carroussel/Image14.jpg', alt: 'Image 14' },
  { src: '/Carroussel/Image15.jpg', alt: 'Image 15' },
];

const valentines_slides = [
  { src: '/Carroussel/Image7.jpg', alt: 'Image 7' },
  { src: '/Carroussel/Image8.jpg', alt: 'Image 8' },
  { src: '/Carroussel/Image9.jpg', alt: 'Image 9' },
  { src: '/Carroussel/Image10.jpg', alt: 'Image 10' },
  { src: '/Carroussel/Image11.jpg', alt: 'Image 11' },
  { src: '/Carroussel/Image12.jpg', alt: 'Image 12' },

];

const EventsPage = () => {
    return (
      <div className='flex flex-col justify-center pt-8'>
        <div className="bg-green-800 rounded-lg mx-auto px-9 py-3 mb-6 max-w-md">
            <h1 className="text-4xl font-bold text-center text-white">Our Events</h1>
        </div>

        

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8  w-full p-10'>
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
                <img key={index} src={slide.src} alt={slide.alt} className="object-cover rounded-lg" />
              ))}
            </Carousel>
          </div>  
        </div>

        {/* Élément de transition avec dégradé */}
        <div className="h-24 bg-gradient-to-b from-transparent to-rose-100"></div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-8  w-full p-10 bg-rose-100'>
        <div className=''>
            <Carousel>
              {valentines_slides.map((valentines_slides, index) => (
                <img key={index} src={valentines_slides.src} alt={valentines_slides.alt} className="object-cover rounded-lg" />
              ))}
            </Carousel>
          </div>  
          <div className='p-4 '>
            <div className="bg-rose-800 rounded-lg mx-auto px-9 py-3 mb-6 max-w-md">
              <h1 className="text-4xl font-bold text-center text-white">Valentine’s Day</h1>
            </div>
            <p className='text-black'>
            Celebrate love and friendship with our Valentine's Day event!
            Join us for a day filled with fun activities,
            games, and delicious treats. Whether you're single or in a relationship,
            this event is all about spreading love and joy.
            Enjoy a romantic atmosphere, participate in exciting games,
            and indulge in sweet treats. Don't miss out on this opportunity to make unforgettable memories with your loved ones.

  
            </p>
          </div>
        </div>

        {/* Élément de transition avec dégradé */}
        <div className="h-24 bg-gradient-to-b from-rose-100 to-yellow-100"></div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-8  w-full p-10 bg-yellow-100'>
         
          <div className='p-4 '>
            <div className="bg-yellow-800 rounded-lg mx-auto px-9 py-3 mb-6 max-w-md">
              <h1 className="text-4xl font-bold text-center text-white">Global Village</h1>
            </div>
            <p className='text-black'>
            Celebrate your culture and traditions at our Global Village event!
            Join us for a vibrant gathering where you can showcase your heritage,
            share delicious food, and connect with people from diverse backgrounds.
            Experience the richness of different cultures through music, dance, and storytelling.
            This event is all about fostering understanding and appreciation for our global community.
            Whether you're a participant or a visitor, you'll leave with a heart full of joy and new friendships.
            Watch the aftermovie of the Last One ! 
            </p>
          </div>
          <div className=' '>
          <div className="mt-6 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-[600px] rounded-lg"
              src="https://www.youtube.com/embed/5nOVaCf08Yg"
              title="Global Village Aftermovie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
            
          </div> 

        </div>



      </div>
    );
};

export default EventsPage;