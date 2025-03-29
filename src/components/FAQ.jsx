import React, { useState } from "react";

const faqData = [
  {
    category: "Minuto per Minuto",
    questions: [
      {
        question: "¿Qué es Minuto per Minuto?",
        answer:
          "Es una plataforma que busca visibilizar y apoyar a la comunidad LGBTQ+ y a personas neurodivergentes a través de contenido educativo y recursos.",
      },
      {
        question: "¿Por qué lo creaste?",
        answer:
          "Nace desde mi experiencia personal con la salud mental y la comunidad LGBTQ+, buscando ofrecer un espacio seguro y útil.",
      },
    ],
  },
  {
    category: "Salud sexual y mental",
    questions: [
      {
        question: "¿Qué es el PrEP?",
        answer: "Es un medicamento que ayuda a prevenir el VIH.",
      },
      {
        question: "¿Dónde puedo hacerme una prueba gratuita?",
        answer:
          "En centros comunitarios LGTBI+, ONGs o centros de salud. También puedes consultar nuestra sección de recursos locales.",
      },
    ],
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">
      <h2>Preguntas Frecuentes</h2>
      {faqData.map((section, i) => (
        <div key={i} className="faq-category">
          <h3>{section.category}</h3>
          {section.questions.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleQuestion(`${i}-${index}`)}
              >
                {faq.question}
              </button>
              {openIndex === `${i}-${index}` && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default FAQ;
