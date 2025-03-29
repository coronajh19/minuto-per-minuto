import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);

    // Guardar en localStorage
    localStorage.setItem("contactForm", JSON.stringify(formData));

    // Resetear campos
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    alert("Gracias por tu mensaje 🫶");
  };

  return (
    <section className="section">
      <h2>Contacto</h2>
      <p>
        Si tienes dudas, sugerencias o quieres compartir tu experiencia,
        ¡escríbenos!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mensaje:
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactPage;
