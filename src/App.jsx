import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

// === Lazy loading de páginas ===
const Home = lazy(() => import("./pages/Home"));
const WellnessPage = lazy(() => import("./pages/WellnessPage"));
const SafePlacesPage = lazy(() => import("./pages/SafePlacesPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loading">Cargando página...</div>}>
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
            path="/bienestar"
            element={
              <Layout>
                <WellnessPage />
              </Layout>
            }
          />
          <Route
            path="/lugares"
            element={
              <Layout>
                <SafePlacesPage />
              </Layout>
            }
          />
          <Route
            path="/eventos"
            element={
              <Layout>
                <EventsPage />
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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
