import React, { useState } from "react";
import AssociationCard from "./AssociationCard";
import PreventionComparison from "./PreventionComparison";

// === Datos de preguntas frecuentes ===
const faqData = [
  {
    question: "¿Qué es el VIH y cómo se previene?",
    answer:
      "El VIH es un virus que debilita las defensas del cuerpo. Se transmite por relaciones sexuales sin protección, sangre o de madre a hijo. Para prevenirlo: usa condón siempre, hazte pruebas regularmente, considera el PrEP si estás en riesgo y nunca compartas agujas.",
  },
  {
    question:
      "¿Por qué el condón sigue siendo el método más efectivo y accesible?",
    answer:
      "El condón es barato, fácil de conseguir y protege contra el VIH y otras ITS. Aunque el PrEP es muy eficaz para prevenir VIH, no sustituye la barrera física del preservativo. Usar ambos en conjunto es la mejor protección.",
  },
  {
    question: "¿Qué es el PrEP?",
    answer:
      "El PrEP (Profilaxis Pre-Exposición) es una pastilla diaria que reduce hasta en un 99% el riesgo de contraer VIH en relaciones sexuales. No protege contra otras ITS, por eso es ideal combinarlo con preservativos para estar más segurx.",
  },
  {
    question: "¿Qué debo saber sobre las ITS?",
    answer:
      "Las ITS son infecciones como sífilis, gonorrea, clamidia o herpes, que se transmiten por contacto sexual. Muchas veces no presentan síntomas al inicio, por eso es clave hacerse chequeos periódicos, usar condón y acudir al médico ante cualquier duda.",
  },
  {
    question: "¿Cómo afecta la salud sexual a la comunidad LGBTQ+?",
    answer:
      "La comunidad LGBTQ+ enfrenta más barreras para acceder a información y servicios de salud sexual. Esto aumenta la vulnerabilidad a ITS y VIH. Es importante tener espacios seguros, acceso a pruebas, tratamiento y educación sin prejuicios.",
  },
  {
    question: "¿Qué recursos de salud mental existen para la comunidad?",
    answer:
      "Existen asociaciones y centros que ofrecen terapia, grupos de apoyo y orientación especializados en diversidad sexual y de género. Buscar ayuda profesional es clave para el bienestar emocional, sobre todo en contextos de discriminación o estigma.",
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

  const toggleFaq = (i) => setOpenFaqIndex(i === openFaqIndex ? null : i);
  const toggleResource = (i) =>
    setOpenResourceIndex(i === openResourceIndex ? null : i);

  return (
    <>
      {/* === Preguntas Frecuentes === */}
      <section className="section seccion-rosa">
        <div className="content-constrain">
          <h2 className="titulo-dibujado" data-aos="fade-up">
            Preguntas Frecuentes
          </h2>
          <div className="faq-category">
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className="faq-item"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <button className="faq-question" onClick={() => toggleFaq(idx)}>
                  {item.question}
                </button>
                {openFaqIndex === idx && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Comparación Condón vs PrEP === */}
      <PreventionComparison />

      {/* === Asociaciones de Apoyo === */}
      <section className="section seccion-rosa">
        <div className="content-constrain">
          <h2 className="titulo-dibujado" data-aos="fade-up">
            Asociaciones de Apoyo
          </h2>
          <div className="association-cards">
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
            ].map((card, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={card.delay}>
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
            {resourcesData.map((res, idx) => (
              <div
                key={idx}
                className="faq-item"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleResource(idx)}
                >
                  {res.title}
                </button>
                {openResourceIndex === idx && (
                  <div className="faq-answer">
                    <p>{res.description}</p>
                    {res.locations.map((loc, j) => (
                      <div key={j} className="resource-location">
                        <strong>{loc.city}:</strong>
                        <ul>
                          {loc.places.map((p, k) => (
                            <li key={k}>{p}</li>
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
