import React, { useState } from "react";
import EventCard from "./EventCard";

function EventsSection() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Charla sobre salud mental",
      date: "2025-06-10",
      location: "Centro Cultural ABC, Asturias",
      description:
        "Un espacio abierto para hablar sobre salud mental y apoyo a la comunidad LGBT+.",
    },
    {
      id: 2,
      title: "Tarde de café y networking",
      date: "2025-07-02",
      location: "Cafetería Inclusiva XYZ, Asturias",
      description:
        "Encuentro informal para conocer gente, intercambiar ideas y proyectos.",
    },
  ]);

  const [formEvent, setFormEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { ...formEvent, id: Date.now() };
    setEvents((prev) => [...prev, newEvent]);
    setFormEvent({ title: "", date: "", location: "", description: "" });
  };

  return (
    <section className="section seccion-eventos">
      <div className="content-constrain">
        <h2 className="titulo-dibujado" data-aos="fade-up">
          Próximos Eventos
        </h2>
        <ul className="event-list">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ul>

        <hr className="separator" />

        <h3 className="article-title" data-aos="fade-up">
          Proponer un evento
        </h3>
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          data-aos="fade-up"
        >
          <label>
            Título del evento:
            <input
              type="text"
              name="title"
              value={formEvent.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Fecha:
            <input
              type="date"
              name="date"
              value={formEvent.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Lugar:
            <input
              type="text"
              name="location"
              value={formEvent.location}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Descripción:
            <textarea
              name="description"
              rows="3"
              value={formEvent.description}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Agregar Evento</button>
        </form>
      </div>
    </section>
  );
}

export default EventsSection;
