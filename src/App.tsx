import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/modals/BookingModal";
import { Barbers } from "@/components/sections/Barbers";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-black">
      <Header onBookingClick={openBooking} />
      <Hero onBookingClick={openBooking} />
      <Services onBookingClick={openBooking} />
      <Gallery />
      <Barbers />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingModal open={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}