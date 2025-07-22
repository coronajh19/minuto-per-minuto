import React, { useState, useCallback } from "react";

const INITIAL_FORM = {
  name: "",
  email: "",
  message: "",
};

function ContactPage() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Formulario enviado:", formData);
      localStorage.setItem("contactForm", JSON.stringify(formData));

      setFormData(INITIAL_FORM);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    },
    [formData]
  );

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
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
