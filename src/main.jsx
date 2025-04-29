import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Importamos AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Inicializamos AOS
AOS.init({
  duration: 1000, // duración de las animaciones en milisegundos
  once: true, // que se animen solo una vez al entrar en pantalla
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
