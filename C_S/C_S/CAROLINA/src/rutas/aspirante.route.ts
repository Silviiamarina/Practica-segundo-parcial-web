import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Retrieve all Aspirantes
router.get("/", async (req, res) => {
  try {
    const aspirantes = await prisma.aspirante.findMany();
    res.json(aspirantes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los aspirantes" });
  }
});

// GET - Retrieve an Aspirante by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const aspirante = await prisma.aspirante.findUnique({
      where: { id: Number(id) },
    });
    if (!aspirante) {
      res.status(404).json({ error: "Aspirante no encontrado" });
    } else {
      res.json(aspirante);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el aspirante" });
  }
});

// POST - Create a new Aspirante
router.post("/", async (req, res) => {
  const { nombre, identificacion } = req.body;
  try {
    const aspiranteCreado = await prisma.aspirante.create({
      data: {
        nombre,
        identificacion,
      },
    });
    res.status(201).json(aspiranteCreado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el aspirante" });
  }
});

// PUT - Update an existing Aspirante by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, identificacion } = req.body;
  try {
    const aspiranteActualizado = await prisma.aspirante.update({
      where: { id: Number(id) },
      data: {
        nombre,
        identificacion,
      },
    });
    res.json(aspiranteActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el aspirante" });
  }
});

// DELETE - Delete an Aspirante by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aspirante.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Aspirante eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el aspirante" });
  }
});

export default router;
