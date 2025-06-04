import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import eventRoutes from "./routes/events.js";

// Configuramos dotenv para leer variables de entorno
dotenv.config();
console.log("🌐 URI de Mongo detectada:", process.env.MONGO_URI);

// Creamos la app de Express
const app = express();

// Middlewares
app.use(cors()); // Para que el frontend pueda conectarse sin problema
app.use(express.json()); // Para leer JSON en las peticiones

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Minuto per Minuto Backend funcionando 💖");
});

app.use("/api/events", eventRoutes);
// Puerto de escucha
const PORT = process.env.PORT || 5000;

connectDB();

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
