import React from "react";
import ResourceCard from "./ResourceCard";

// === Temas Educativos ===
const topics = [
  {
    title: "🧬 VIH",
    description: "Prevención, PrEP, tratamiento y cómo combatir el estigma.",
    link: "https://cesida.org/",
  },
  {
    title: "🩺 ITS",
    description:
      "Información básica, prevención y tratamiento de infecciones de transmisión sexual.",
    link: "https://felgtb.org/",
  },
  {
    title: "❤️‍🔥 Salud sexual LGBTQ+",
    description: "Bienestar emocional, físico y sexual para la comunidad.",
    link: "#",
  },
  {
    title: "🧠 Salud mental sexual",
    description:
      "Acompañamiento psicológico para el cuidado integral de tu salud.",
    link: "#",
  },
];

function EducationalResources() {
  return (
    <section className="section seccion-rosa">
      <div className="content-constrain">
        <h2 className="titulo-dibujado" data-aos="fade-up">
          📚 Información Educativa
        </h2>
        <div className="educational-cards">
          {topics.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ResourceCard
                title={item.title}
                description={item.description}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationalResources;
