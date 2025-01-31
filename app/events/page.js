import React from 'react';

const EventsPage = () => {
    return (
        <section className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg m-6">
  <h1 className="text-3xl font-bold text-center mb-6 text-black">Welcom' Events</h1>

  <p className="mb-4 text-lg text-gray-700">
    At <strong>Welcom'</strong>, we believe that meeting new people and enjoying unforgettable moments  
    is the best way to settle in! That’s why we organize amazing events throughout the year  
    to help international students connect, have fun, and experience student life at TSP.
  </p>

  <h3 className="text-2xl font-semibold mb-3 text-green-600">Our Main Events</h3>

  <ul className="list-disc list-inside space-y-2 text-gray-800">
    <li><strong>🔥 Welcome BBQ:</strong> A huge barbecue at the start of the year to meet new people in a chill atmosphere.</li>
    <li><strong>✈️ International Trip:</strong> Every year, we take you on an epic journey! Last year? <strong>Amsterdam!</strong> Where to next?</li>
    <li><strong>🎉 Absinthe Nights:</strong> We team up with Absinthe (the school's bar) for themed parties and fun social nights.</li>
    <li><strong>🍽️ International Dinners:</strong> Discover dishes from all over the world and share a taste of your home country!</li>
    <li><strong>🎭 Cultural & Game Nights:</strong> Movie nights, quiz games, karaoke… endless ways to have fun!</li>
  </ul>

  <h3 className="text-2xl font-semibold mb-3 text-green-600">Why Join Our Events?</h3>

  <ul className="list-disc list-inside space-y-2 text-gray-800">
    <li>Meet students from <strong>all over the world</strong>.</li>
    <li>Discover new cultures and <strong>share yours</strong>.</li>
    <li>Enjoy amazing experiences <strong>for free or at a low cost</strong>.</li>
    <li>Make your year at <strong>TSP unforgettable</strong>!</li>
  </ul>

  <p className="mt-6 text-lg text-gray-700">
    Whether you're here for a semester or for years, our events are the perfect way  
    to make friends, have fun, and feel at home at Télécom SudParis.
  </p>

  <p className="mt-6 text-center text-xl font-semibold text-green-600">
    Join us & be part of the adventure!
  </p>
</section>

    );
};

export default EventsPage;