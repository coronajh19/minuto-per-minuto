import React, { useState } from "react";
import AssociationCard from "./AssociationCard";
import PreventionComparison from "./PreventionComparison";
import { faqData, resourcesData } from "../data/wellness";

// === Subcomponente FAQItem ===
function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span>{item.question}</span>
        <span className="faq-toggle">{isOpen ? "–" : "+"}</span>
      </button>
      <div className="faq-answer-wrapper">
        {isOpen && <p className="faq-answer">{item.answer}</p>}
      </div>
    </div>
  );
}

// === Subcomponente ResourceItem ===
function ResourceItem({ resource, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span>{resource.title}</span>
        <span className="faq-toggle">{isOpen ? "–" : "+"}</span>
      </button>
      <div className="faq-answer-wrapper">
        {isOpen && (
          <div className="faq-answer">
            <p>{resource.description}</p>
            {resource.locations.map((loc) => (
              <div key={loc.city} className="resource-location">
                <strong>{loc.city}:</strong>
                <ul>
                  {loc.places.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WellnessSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openResourceIndex, setOpenResourceIndex] = useState(null);

  return (
    <>
      {/* === Preguntas Frecuentes === */}
      <section className="section seccion-rosa">
        <div className="content-constrain">
          <h2 className="titulo-dibujado">Preguntas Frecuentes</h2>
          <div className="faq-category">
            {faqData.map((item, idx) => (
              <FAQItem
                key={item.question}
                item={item}
                index={idx}
                openIndex={openFaqIndex}
                setOpenIndex={setOpenFaqIndex}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === Comparación Condón vs PrEP === */}
      <PreventionComparison />

      {/* === Asociaciones de Apoyo === */}
      <section className="section seccion-rosa">
        <div className="content-constrain">
          <h2 className="titulo-dibujado">Asociaciones de Apoyo</h2>
          <div className="association-cards">
            {[
              {
                title: "XEGA - Asociación LGBT de Asturias",
                description:
                  "Conoce la asociación local que impulsa la visibilidad y apoyo a la comunidad LGBT en Asturias.",
                link: "https://www.xega.org/",
              },
              {
                title: "VIH e ITS (CESIDA)",
                description:
                  "Recursos para la prevención, diagnóstico y tratamiento del VIH e ITS. Consulta la página de CESIDA para más información.",
                link: "https://cesida.org/",
              },
              {
                title: "Salud Sexual LGBTQ+ (FELGTBI+)",
                description:
                  "Accede a recursos y apoyo especializado en salud sexual para la comunidad LGBTQ+.",
                link: "https://felgtbi.org/",
              },
            ].map((card) => (
              <div key={card.title}>
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
          <h2 className="titulo-dibujado">Recursos Útiles en Asturias</h2>
          <div className="faq-category">
            {resourcesData.map((res, idx) => (
              <ResourceItem
                key={res.title}
                resource={res}
                index={idx}
                openIndex={openResourceIndex}
                setOpenIndex={setOpenResourceIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
