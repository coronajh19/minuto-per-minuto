import React from "react";
import EducationalCard from "./EducationalCard";

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

function EducationalInfo() {
  return (
    <section className="section">
      <h3>📚 Información Educativa</h3>
      <div className="educational-cards">
        {topics.map((item, index) => (
          <EducationalCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default EducationalInfo;
