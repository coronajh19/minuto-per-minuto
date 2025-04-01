import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Sexualidad = lazy(() => import("./pages/Sexualidad"));
const PlacesPage = lazy(() => import("./pages/PlacesPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              // En la página de inicio, se muestra el sidebar
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/sexualidad"
            element={
              // En la página de sexualidad, se oculta el sidebar
              <Layout hideSidebar={true}>
                <Sexualidad />
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
