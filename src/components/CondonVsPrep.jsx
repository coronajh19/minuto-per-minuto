import React from "react";
import "../styles.css";

function CondonVsPrep() {
  const data = [
    {
      title: "Condón",
      emoji: "🧡",
      points: [
        "Barrera física contra VIH y otras ITS (sífilis, gonorrea, clamidia).",
        "Económico y fácil de conseguir.",
        "No requiere receta ni seguimiento médico.",
        "Uso puntual: solo se necesita en el momento de la relación sexual.",
        "Protege en todas las prácticas sexuales (oral, vaginal, anal).",
      ],
    },
    {
      title: "PrEP",
      emoji: "💊",
      points: [
        "Reduce en +99% el riesgo de contraer VIH si se toma correctamente.",
        "No protege contra otras ITS.",
        "Requiere receta médica y seguimiento (pruebas regulares).",
        "Debe tomarse diariamente o bajo pauta indicada.",
        "Ideal como prevención adicional en personas con riesgo alto.",
      ],
    },
  ];

  return (
    <section className="section seccion-rosa">
      <div className="content-constrain">
        <h2 className="titulo-dibujado">Condón vs PrEP</h2>
        <p className="hero-sub">
          Dos métodos, un mismo objetivo: protegerte. Conócelos y combínalos.
        </p>

        <div className="vs-grid">
          {data.map((item, index) => (
            <div key={index} className="vs-card">
              <h3>
                {item.emoji} {item.title}
              </h3>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recomendación Final integrada */}
        <div className="recomendacion-final-compact">
          <h4>🛡️ Protección Total: Mejor en equipo</h4>
          <p>
            El PrEP es ideal para prevenir VIH, pero el condón sigue siendo
            fundamental para protegerte también de otras ITS. La combinación de
            ambos es la mejor estrategia para cuidarte al máximo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CondonVsPrep;
