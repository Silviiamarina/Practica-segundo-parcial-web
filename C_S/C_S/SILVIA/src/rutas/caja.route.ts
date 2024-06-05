import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Retrieve all Cajas
router.get("/", async (req, res) => {
  try {
    const cajas = await prisma.caja.findMany({
      include: { transacciones: true } // Include transacciones if needed
    });
    res.json(cajas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las cajas" });
  }
});

// GET - Retrieve a Caja by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const caja = await prisma.caja.findUnique({
      where: { id: Number(id) },
      include: { transacciones: true } // Include transacciones if needed
    });
    if (!caja) {
      res.status(404).json({ error: "Caja no encontrada" });
    } else {
      res.json(caja);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la caja" });
  }
});

// POST - Create a new Caja
router.post("/", async (req, res) => {
  const { description, estado } = req.body;
  try {
    const cajaCreada = await prisma.caja.create({
      data: {
        description,
        estado,
      },
    });
    res.status(201).json(cajaCreada);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la caja" });
  }
});

// PUT - Update an existing Caja by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { description, estado } = req.body;
  try {
    const cajaActualizada = await prisma.caja.update({
      where: { id: Number(id) },
      data: {
        description,
        estado,
      },
    });
    res.json(cajaActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la caja" });
  }
});

// DELETE - Delete a Caja by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.caja.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Caja eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la caja" });
  }
});

export default router;
