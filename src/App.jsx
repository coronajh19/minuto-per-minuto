// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ResourcesPage from "./pages/ResourcesPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
// Importa las dos nuevas
import EventsPage from "./pages/EventsPage";
import PlacesPage from "./pages/PlacesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/recursos"
          element={
            <Layout>
              <ResourcesPage />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQPage />
            </Layout>
          }
        />
        <Route
          path="/contacto"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />

        {/* Nuevas rutas */}
        <Route
          path="/eventos"
          element={
            <Layout>
              <EventsPage />
            </Layout>
          }
        />
        <Route
          path="/lugares"
          element={
            <Layout>
              <PlacesPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
