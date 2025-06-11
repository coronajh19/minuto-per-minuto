import { MapPin, Heart, Pill, Shield } from "lucide-react";
import "../styles.css";

const preventionData = [
  {
    key: "condon",
    title: "CONDÓN",
    icon: <Heart />,
    color: "#F3689B",
    points: [
      "Barrera física contra VIH y otras ITS (sífilis, gonorrea, clamidia).",
      "Económico y fácil de conseguir.",
      "No requiere receta ni seguimiento médico.",
      "Uso puntual: solo se necesita en el momento de la relación sexual.",
      "Protege en todas las prácticas sexuales (oral, vaginal, anal).",
    ],
  },
  {
    key: "prep",
    title: "PrEP",
    icon: <Pill />,
    color: "#73D2DE",
    points: [
      "Reduce en +99% el riesgo de contraer VIH si se toma correctamente.",
      "No protege contra otras ITS.",
      "Requiere receta médica y seguimiento (pruebas regulares).",
      "Debe tomarse diariamente o bajo pauta indicada.",
      "Ideal como prevención adicional en personas con riesgo alto.",
    ],
  },
];

const highlightData = {
  title: "PROTECCIÓN TOTAL: MEJOR EN EQUIPO",
  icon: <Shield />,
  color: "#D883A6",
  text: "El PrEP es ideal para prevenir VIH, pero el condón sigue siendo fundamental para protegerte también de otras ITS. La combinación de ambos es la mejor estrategia para cuidarte al máximo.",
};

export default function PreventionComparison() {
  return (
    <section className="section seccion-rosa">
      <div className="content-constrain">
        <h2 className="comparison-title" data-aos="fade-up">
          CONDÓN VS PrEP
        </h2>
        <p className="comparison-sub" data-aos="fade-up" data-aos-delay="100">
          Dos métodos, un mismo objetivo: protegerte. Conócelos y combínalos.
        </p>

        <div
          className="comparison-grid"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {preventionData.map((item) => (
            <div
              key={item.key}
              className="comparison-card"
              style={{ borderColor: item.color }}
            >
              <div
                className="card-header"
                style={{ backgroundColor: item.color + "20" }}
              >
                <span className="card-icon" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <h3 className="card-title">{item.title}</h3>
              </div>
              <ul className="card-list">
                {item.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="highlight-card"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ borderColor: highlightData.color }}
        >
          <div
            className="highlight-header"
            style={{ backgroundColor: highlightData.color + "20" }}
          >
            <span
              className="highlight-icon"
              style={{ color: highlightData.color }}
            >
              {highlightData.icon}
            </span>
            <h3 className="highlight-title">{highlightData.title}</h3>
          </div>
          <p className="highlight-text">{highlightData.text}</p>
        </div>
      </div>
    </section>
  );
}
