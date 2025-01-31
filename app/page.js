import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-2 gap-4 w-full bg-green-500 p-4"> {/* Ajout de p-4 pour l'espacement */}
          <div className="p-4">
            <p>
              Discover our team
              We are a team of XX students who wants to help international students to prepare their arrival in Evry
            </p>
          </div>
          <div className="flex justify-end">
            <Image 
              src="/Logo_Welcom.png"
              alt="Welcom Logo"
              width={160}
              height={160}
              className=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:flex-row w-full bg-green-500 p-4"> {/* Ajout de p-4 pour l'espacement */}
          <Image 
            src="/Logo_Welcom.png"
            alt="Welcom Logo"
            width={160}
            height={160}
          />
          <div className="grid grid-rows-2">
            <h2 className="text-center">
              Discover our trip
            </h2>
            <p>
              Discover our team
              We are a team of XX students who wants to help international students to prepare their arrival in Evry
            </p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://icons8.com/icon/118466/facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
