import React, { useState } from "react";
import InfoCard from "./InfoCard";

const faqData = [
  {
    question: "¿Qué es el VIH y cómo se previene?",
    answer:
      "El VIH es un virus que ataca el sistema inmunológico. La prevención incluye el uso de preservativos, PrEP y asesoramiento especializado.",
  },
  {
    question: "¿Qué es la PrEP?",
    answer:
      "La PrEP es un tratamiento preventivo que reduce significativamente el riesgo de contraer el VIH.",
  },
  {
    question: "¿Qué debo saber sobre las ITS?",
    answer:
      "Las ITS son infecciones transmitidas sexualmente. La detección temprana, el tratamiento y el uso de protección son esenciales.",
  },
  {
    question: "¿Cómo afecta la salud sexual a la comunidad LGBTQ+?",
    answer:
      "La salud sexual incluye la prevención de enfermedades y el acceso a servicios y recursos especializados para la comunidad LGBTQ+.",
  },
  {
    question: "¿Qué recursos de salud mental existen para la comunidad?",
    answer:
      "Existen centros, federaciones y organizaciones que ofrecen apoyo psicológico y grupos de ayuda para la salud mental en la comunidad LGBTQ+.",
  },
];

const resourcesData = [
  {
    title: "Centros de Pruebas Gratuitas y Atención Psicológica",
    description:
      "Encuentra centros en Asturias que ofrecen pruebas gratuitas de ITS y apoyo psicológico para la comunidad LGBTQ+.",
    locations: [
      {
        city: "Oviedo",
        places: [
          "Centro A - Calle Ejemplo 123",
          "Centro B - Avenida Salud 456",
        ],
      },
      {
        city: "Gijón",
        places: ["Centro C - Calle Alegría 789"],
      },
    ],
  },
  {
    title: "Grupo de Apoyo para la Comunidad LGBTQ+ en Asturias",
    description:
      "Organizaciones y grupos de ayuda que ofrecen espacios de encuentro y asesoramiento.",
    locations: [
      {
        city: "Oviedo",
        places: ["Grupo X - Información de contacto...", "Grupo Y - ..."],
      },
      {
        city: "Gijón",
        places: ["Asociación Z - Reuniones semanales..."],
      },
    ],
  },
];

function Sexuality() {
  // Estado para FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Estado para Recursos (acordeón)
  const [openResourceIndex, setOpenResourceIndex] = useState(null);
  const toggleResource = (index) => {
    setOpenResourceIndex(openResourceIndex === index ? null : index);
  };

  return (
    <section className="section">
      <h2>Sexualidad y Bienestar</h2>

      {/* 1. PREGUNTAS FRECUENTES */}
      <article className="article-section">
        <h3 className="article-title">Preguntas Frecuentes</h3>
        <div className="faq-category">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {item.question}
              </button>
              {openFaqIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </article>

      {/* 2. ASOCIACIONES */}
      <article className="article-section">
        <h3 className="article-title">Asociaciones</h3>
        <div className="info-cards">
          {/* Primera tarjeta: XEGA, asociación LGBT de Asturias */}
          <InfoCard
            title="XEGA - Asociación LGBT de Asturias"
            description="Conoce la asociación local que impulsa la visibilidad y apoyo a la comunidad LGBT en Asturias."
            link="https://www.xega.org/"
            linkText="Visitar XEGA"
          />
          {/* Segunda tarjeta: CESIDA para VIH e ITS */}
          <InfoCard
            title="VIH e ITS (CESIDA)"
            description="Recursos para la prevención, diagnóstico y tratamiento del VIH e ITS. Consulta la página de CESIDA para más información."
            link="https://cesida.org/"
            linkText="Visitar CESIDA"
          />
          {/* Tercera tarjeta: FELGTBI+ para Salud Sexual LGBTQ+ */}
          <InfoCard
            title="Salud Sexual LGBTQ+ (FELGTBI+)"
            description="Accede a recursos y apoyo especializado en salud sexual para la comunidad LGBTQ+."
            link="https://felgtbi.org/"
            linkText="Visitar FELGTBI+"
          />
        </div>
      </article>

      {/* 3. RECURSOS ÚTILES EN ASTURIAS (ACORDEÓN) */}
      <article className="article-section">
        <h3 className="article-title">Recursos Útiles en Asturias</h3>
        <div className="faq-category">
          {resourcesData.map((resource, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleResource(index)}
              >
                {resource.title}
              </button>
              {openResourceIndex === index && (
                <div className="faq-answer">
                  <p>{resource.description}</p>
                  {resource.locations.map((loc, i) => (
                    <div key={i} style={{ marginTop: "1rem" }}>
                      <strong>{loc.city}:</strong>
                      <ul style={{ marginTop: "0.5rem" }}>
                        {loc.places.map((place, j) => (
                          <li key={j}>{place}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Sexuality;
