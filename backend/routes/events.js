import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// GET /api/events - obtener todos
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener eventos" });
  }
});

// POST /api/events - crear nuevo
router.post("/", async (req, res) => {
  try {
    const nuevoEvento = new Event(req.body);
    const guardado = await nuevoEvento.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ message: "Error al guardar evento" });
  }
});

export default router;
