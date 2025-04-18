import Image from "next/image";
import Link from "next/link";
import Button from "./components/navigation/Button";
import SocialLinks from "./components/navigation/SocialLinks";
import ImageCarousel from "./components/ImageCarousel"; 

export default function Home() {
  return (
    <div className="grid grid-rows-[200px_1fr] min-h-screen sm:pt-0 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center p-8 row-start-1">
        <Image 
          src="/welcom.png" 
          alt="Welcom Logo" 
          width={800} 
          height={800} 
          className="object-contain max-w-[300px] sm:max-w-[500px] md:max-w-[700px]"
        />
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-4"> 
          <div className="p-4 text-black">
            <section>
              <h1 className="text-2xl font-bold mb-4 text-black">Welcom'</h1>
              <p className="mb-4 text-black">
                Moving to a new country can be exciting… but also a little overwhelming, right?  
                That’s where <strong>Welcom'</strong> comes in! We’re the student association at <strong>Télécom SudParis</strong> dedicated to helping international students feel  
                right at home from day one.
              </p>

              <h3 className="text-xl font-semibold mb-2">What do we do?</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Help you settle in and understand French life</li>
                <li>Organize amazing events so you can meet new friends</li>
                <li>Assist with paperwork and daily life stuff</li>
                <li>Make sure your experience at TSP is unforgettable!</li>
              </ul>

              <p>
                We know how tricky it can be to arrive in a new country, so we’re here to support you,  
                answer your questions, and most importantly—make sure you <strong>have fun!</strong>
              </p>

              <p className="mb-4">
                So, whether you need help, want to join cool events, or just grab a coffee with  
                friendly people, <strong>Welcom' is here for you!</strong>
              </p>

              <p ><strong>Follow us & reach out anytime!</strong></p>
              <div className="p-4">
                <SocialLinks
                  links={[
                    { name: "Instagram", url: "https://www.instagram.com/welcom_int?igsh=bXI4M2M4cW5oeW54&utm_source=qr" },
                  ]}
                />
              </div>
            </section>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image 
              src="/orga.png"
              alt="Welcom Logo"
              width={1000}
              height={1000}
              className="object-contain max-w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-4">
          <ImageCarousel/>
          <div className="grid grid-rows-1 text-black">
            <section>
              <h1 className="text-2xl font-bold mb-4">Our Events</h1>
              <p className="mb-4">
                At <strong>Welcom'</strong>, we believe that the best way to feel at home is to connect with people and create unforgettable memories.  
                That’s why we organize a variety of events throughout the year to help international students meet new friends and experience student life at Télécom SudParis!
              </p>

              <h3 className="text-xl font-semibold mb-2">What can you expect?</h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Welcome BBQ:</strong> Start the year with good food, great company, and an amazing atmosphere!  
                  Our BBQ is the perfect occasion to meet fellow students and kick off your adventure at TSP.
                </li>
                <li>
                  <strong>Annual Trip:</strong> Every year, we organize an exciting trip to a European destination.  
                  Last year, we explored the beautiful city of Amsterdam! Where will we go next?
                </li>
                <li>
                  <strong>Bar Nights & Parties:</strong> We collaborate with <strong>Absinthe</strong>, the school's bar,  
                  to bring you themed nights, games, and chill hangouts throughout the year.
                </li>
                <li>
                  <strong>Other Fun Activities:</strong> From cultural events to casual meetups,  
                  there’s always something happening at Welcom’!
                </li>
              </ul>

              <p className="mb-4">
                Whether you love traveling, partying, or just making new friends, our events are designed to help you feel at home and have an amazing time at Télécom SudParis!
              </p>

              <p><strong>Stay tuned and join the fun!</strong></p>
              
              <div className="flex p-6 overflow-visible justify-center">
              <Button 
                href="/events"
                className="transition-transform duration-300 "
              >
                See Events
              </Button>

              </div>
            </section>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-black w-full items-center p-4">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
            <Image 
              src="/Mélissa.jpeg" 
              width={220} 
              height={220} 
              alt="Présidente" 
              className="h-40 w-40 rounded-full border-4 border-yellow-300"
            />
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:ml-4">
              <h1 className="text-2xl font-bold mb-4">The word of the president</h1>
              <p>As the president of Welcom', I have the chance to closely follow all of our projects, and I'm thankful for that. Our main events, the Global Village and Valentine's Day, really brought together French and incoming students ! We felt like we succeeded in our mission.
              Of course, the great thing about being part of Welcom' is that you get to meet people from different countries, which is truly enriching !
              Being part of Welcom' is one of the best experiences of my student life, and I can only recommend that you join the next mandate !</p>
            </div>
          </div>
        </div>
      </main>  
    </div>
  );
}
