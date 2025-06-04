import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import WellnessSection from "../components/WellnessSection";
import SafePlacesSection from "../components/SafePlacesSection";
import EventsSection from "../components/EventsSection";
import ContactPage from "../pages/ContactPage";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Minuto per Minuto | Espacio LGBTQ+ y Bienestar</title>
        <meta
          name="description"
          content="Recursos, salud mental y sexualidad para la comunidad LGBTQ+ en Asturias. Encuentra lugares seguros, eventos y más."
        />
      </Helmet>

      <section
        id="inicio"
        className="section seccion-inicio full-height"
        data-aos="fade-up"
      >
        <HeroSection />
      </section>

      <section
        id="bienestar"
        className="section seccion-rosa full-height"
        data-aos="fade-up"
      >
        <WellnessSection />
      </section>

      <section
        id="lugares"
        className="section seccion-lugares full-height"
        data-aos="fade-up"
      >
        <SafePlacesSection />
      </section>

      <section
        id="eventos"
        className="section seccion-eventos full-height"
        data-aos="fade-up"
      >
        <EventsSection />
      </section>

      <section
        id="contacto"
        className="section seccion-contacto full-height"
        data-aos="fade-up"
      >
        <ContactPage />
      </section>
    </>
  );
}

export default Home;
