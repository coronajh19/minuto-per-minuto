import React, { useState, useCallback } from "react";
import EventItem from "./EventItem";

function Events() {
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

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  // useCallback para memorizar la función handleChange
  const handleChange = useCallback((e) => {
    setNewEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  // useCallback para memorizar la función handleSubmit
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Usamos Date.now() para generar un ID único
      const eventWithId = { ...newEvent, id: Date.now() };
      setEvents((prevEvents) => [...prevEvents, eventWithId]);
      setNewEvent({ title: "", date: "", location: "", description: "" });
    },
    [newEvent]
  );

  return (
    <section className="section">
      <h2>Próximos Eventos</h2>
      <ul>
        {events.map((ev) => (
          <EventItem key={ev.id} event={ev} />
        ))}
      </ul>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Proponer un evento</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Título del evento:
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Fecha:
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Lugar:
          <input
            type="text"
            name="location"
            value={newEvent.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            rows="3"
            value={newEvent.description}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Agregar Evento</button>
      </form>
    </section>
  );
}

export default Events;
