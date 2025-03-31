import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/Footer"; // Import du composant Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcom'",
  description: "Site de l'association Welcom'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col pt-20`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer className="mt-auto" /> {/* Ajout du composant Footer */}
      </body>
    </html>
  );
}
