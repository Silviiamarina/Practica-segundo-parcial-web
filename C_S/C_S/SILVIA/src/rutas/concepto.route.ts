import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Retrieve all Conceptos
router.get("/", async (req, res) => {
  try {
    const conceptos = await prisma.concepto.findMany({
      include: { transacciones: true } // Include transacciones if needed
    });
    res.json(conceptos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los conceptos" });
  }
});

// GET - Retrieve a Concepto by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const concepto = await prisma.concepto.findUnique({
      where: { id: Number(id) },
      include: { transacciones: true } // Include transacciones if needed
    });
    if (!concepto) {
      res.status(404).json({ error: "Concepto no encontrado" });
    } else {
      res.json(concepto);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el concepto" });
  }
});

// POST - Create a new Concepto
router.post("/", async (req, res) => {
  const { concepto, detalle, estado } = req.body;
  try {
    const conceptoCreado = await prisma.concepto.create({
      data: {
        concepto,
        detalle,
        estado,
      },
    });
    res.status(201).json(conceptoCreado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el concepto" });
  }
});

// PUT - Update an existing Concepto by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { concepto, detalle, estado } = req.body;
  try {
    const conceptoActualizado = await prisma.concepto.update({
      where: { id: Number(id) },
      data: {
        concepto,
        detalle,
        estado,
      },
    });
    res.json(conceptoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el concepto" });
  }
});

// DELETE - Delete a Concepto by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.concepto.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Concepto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el concepto" });
  }
});

export default router;
