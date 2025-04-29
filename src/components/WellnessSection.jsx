import React, { useState } from "react";
import AssociationCard from "./AssociationCard";

// === Datos de preguntas frecuentes ===
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

// === Datos de recursos útiles en Asturias ===
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

function WellnessSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openResourceIndex, setOpenResourceIndex] = useState(null);

  const toggleFaq = (index) =>
    setOpenFaqIndex(index === openFaqIndex ? null : index);

  const toggleResource = (index) =>
    setOpenResourceIndex(index === openResourceIndex ? null : index);

  return (
    <>
      {/* === Preguntas Frecuentes === */}
      <section className="section seccion-rosa">
        <div className="content-constrain">
          <h2 className="titulo-dibujado" data-aos="fade-up">
            Preguntas Frecuentes
          </h2>
          <div className="faq-category">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="faq-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {item.question}
                </button>
                {openFaqIndex === index && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Asociaciones de Apoyo === */}
      <section className="section seccion-blanca">
        <div className="content-constrain">
          <h2 className="titulo-dibujado" data-aos="fade-up">
            Asociaciones de Apoyo
          </h2>
          <div className="info-cards horizontal-cards">
            {[
              {
                title: "XEGA - Asociación LGBT de Asturias",
                description:
                  "Conoce la asociación local que impulsa la visibilidad y apoyo a la comunidad LGBT en Asturias.",
                link: "https://www.xega.org/",
                delay: 0,
              },
              {
                title: "VIH e ITS (CESIDA)",
                description:
                  "Recursos para la prevención, diagnóstico y tratamiento del VIH e ITS. Consulta la página de CESIDA para más información.",
                link: "https://cesida.org/",
                delay: 100,
              },
              {
                title: "Salud Sexual LGBTQ+ (FELGTBI+)",
                description:
                  "Accede a recursos y apoyo especializado en salud sexual para la comunidad LGBTQ+.",
                link: "https://felgtbi.org/",
                delay: 200,
              },
            ].map((card, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={card.delay}>
                <AssociationCard
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  linkText="Visitar"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Recursos Útiles en Asturias === */}
      <section className="section seccion-rosa">
        <div className="content-constrain">
          <h2 className="titulo-dibujado" data-aos="fade-up">
            Recursos Útiles en Asturias
          </h2>
          <div className="faq-category">
            {resourcesData.map((resource, index) => (
              <div
                key={index}
                className="faq-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
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
                      <div key={i} className="resource-location">
                        <strong>{loc.city}:</strong>
                        <ul>
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
        </div>
      </section>
    </>
  );
}

export default WellnessSection;
