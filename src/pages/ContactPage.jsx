import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    localStorage.setItem("contactForm", JSON.stringify(formData));
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section seccion-contacto">
      <div className="content-constrain">
        <h2 className="titulo-dibujado" data-aos="fade-up">
          Contacto
        </h2>
        <p className="hero-sub" data-aos="fade-up" data-aos-delay="100">
          Si tienes dudas, sugerencias o quieres compartir tu experiencia,
          ¡escríbenos!
        </p>

        {submitted && (
          <p className="form-success" data-aos="zoom-in">
            Gracias por tu mensaje 🫶
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="contact-form"
          data-aos="fade-up"
          data-aos-delay="200"
        >
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
      </div>
    </section>
  );
}

export default ContactPage;
