import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Barbers } from "./components/Barbers";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Header onBookingClick={() => setIsBookingOpen(true)} />
      <Hero onBookingClick={() => setIsBookingOpen(true)} />
      <Services onBookingClick={() => setIsBookingOpen(true)} />
      <Gallery />
      <Barbers />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingModal 
        open={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}