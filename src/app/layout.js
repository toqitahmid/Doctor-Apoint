import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './ui/Navbar.jsx'
import Footer from "./ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://doctor-apoint.vercel.app"),
  title: {
    default: "Doctor Appointment Manager | Book Verified Doctors Online",
    template: "%s | Doctor Appointment Manager",
  },
  description:
    "Find and book appointments with verified doctors near you. Browse specialists, check availability, and schedule your visit online in minutes.",
  keywords: [
    "doctor appointment",
    "online doctor booking",
    "find a doctor",
    "medical appointment",
    "specialist doctors",
    "book appointment online",
  ],
  authors: [{ name: "Toqi Tahmid" }],
  openGraph: {
    title: "Doctor Appointment Manager | Book Verified Doctors Online",
    description:
      "Find and book appointments with verified doctors near you. Browse specialists, check availability, and schedule online.",
    url: "https://doctor-apoint.vercel.app",
    siteName: "Doctor Appointment Manager",
    images: [
      {
        url: "/og-image.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Doctor Appointment Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />

        <main className="flex-grow w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
