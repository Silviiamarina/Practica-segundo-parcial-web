import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Retrieve all Inscripciones
router.get("/", async (req, res) => {
  try {
    const inscripciones = await prisma.inscripcion.findMany();
    res.json(inscripciones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las inscripciones" });
  }
});

// GET - Retrieve an Inscripcion by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const inscripcion = await prisma.inscripcion.findUnique({
      where: { id: Number(id) },
      include: {
        curso: true,
        aspirante: true,
      },
    });
    if (!inscripcion) {
      res.status(404).json({ error: "Inscripcion no encontrada" });
    } else {
      res.json(inscripcion);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la inscripcion" });
  }
});

// POST - Create a new Inscripcion
router.post("/", async (req, res) => {
  const { id_curso, id_aspirante, fecha, hora, valor_cancelado } = req.body;
  try {
    const inscripcionCreada = await prisma.inscripcion.create({
      data: {
        id_curso: Number(id_curso),
        id_aspirante: Number(id_aspirante),
        fecha,
        hora,
        valor_cancelado,
        estado: 'Activo', // El estado se establece por defecto como 'Activo'
      },
    });
    res.status(201).json(inscripcionCreada);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la inscripcion" });
  }
});

// PUT - Update an existing Inscripcion by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { id_curso, id_aspirante, fecha, hora, valor_cancelado, estado } = req.body;
  try {
    const inscripcionActualizada = await prisma.inscripcion.update({
      where: { id: Number(id) },
      data: {
        id_curso: Number(id_curso),
        id_aspirante: Number(id_aspirante),
        fecha,
        hora,
        valor_cancelado,
        estado,
      },
    });
    res.json(inscripcionActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la inscripcion" });
  }
});

// DELETE - Delete an Inscripcion by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.inscripcion.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Inscripcion eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la inscripcion" });
  }
});

export default router;
