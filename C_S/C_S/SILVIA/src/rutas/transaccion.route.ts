import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Retrieve all Transacciones
router.get("/", async (req, res) => {
  try {
    const transacciones = await prisma.transaccion.findMany({
      include: {
        caja: true,
        concepto: true,
      },
    });
    res.json(transacciones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las transacciones" });
  }
});

// GET - Retrieve a Transaccion by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const transaccion = await prisma.transaccion.findUnique({
      where: { id: Number(id) },
      include: {
        caja: true,
        concepto: true,
      },
    });
    if (!transaccion) {
      res.status(404).json({ error: "Transaccion no encontrada" });
    } else {
      res.json(transaccion);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la transaccion" });
  }
});

// POST - Create a new Transaccion
router.post("/", async (req, res) => {
  const { id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion, estado } = req.body;
  try {
    const transaccionCreada = await prisma.transaccion.create({
      data: {
        caja: { connect: { id: id_Caja } },
        concepto: { connect: { id: id_Concepto } },
        fecha,
        ingreso,
        egreso,
        observacion,
        transaccion,
        estado,
      },
      include: {
        caja: true,
        concepto: true,
      },
    });
    res.status(201).json(transaccionCreada);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la transaccion" });
  }
});

// PUT - Update an existing Transaccion by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion, estado } = req.body;
  try {
    const transaccionActualizada = await prisma.transaccion.update({
      where: { id: Number(id) },
      data: {
        caja: { connect: { id: id_Caja } },
        concepto: { connect: { id: id_Concepto } },
        fecha,
        ingreso,
        egreso,
        observacion,
        transaccion,
        estado,
      },
      include: {
        caja: true,
        concepto: true,
      },
    });
    res.json(transaccionActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la transaccion" });
  }
});

// DELETE - Delete a Transaccion by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.transaccion.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Transaccion eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la transaccion" });
  }
});

export default router;
