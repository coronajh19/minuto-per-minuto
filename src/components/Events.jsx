// src/components/Events.jsx
import React, { useState } from "react";

/**
 * Este componente maneja la lista de eventos
 * y un formulario para proponer nuevos.
 */
function Events() {
  const [events, setEvents] = useState([
    {
      title: "Charla sobre salud mental",
      date: "2025-06-10",
      location: "Centro Cultural ABC, Asturias",
      description:
        "Un espacio abierto para hablar sobre salud mental y apoyo a la comunidad LGBT+.",
    },
    {
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

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar el nuevo evento al array
    setEvents([...events, newEvent]);
    // Limpiar formulario
    setNewEvent({ title: "", date: "", location: "", description: "" });
  };

  return (
    <section className="section">
      <h2>Próximos Eventos</h2>
      <ul>
        {events.map((ev, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <h3>{ev.title}</h3>
            <p>
              <strong>Fecha:</strong> {ev.date}
            </p>
            <p>
              <strong>Lugar:</strong> {ev.location}
            </p>
            <p>{ev.description}</p>
          </li>
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
          ></textarea>
        </label>
        <button type="submit">Agregar Evento</button>
      </form>
    </section>
  );
}

export default Events;
