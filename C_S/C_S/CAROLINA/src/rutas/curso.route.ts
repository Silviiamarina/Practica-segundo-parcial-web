import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Retrieve all Cursos
router.get("/", async (req, res) => {
  try {
    const cursos = await prisma.curso.findMany();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los cursos" });
  }
});

// GET - Retrieve a Curso by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await prisma.curso.findUnique({
      where: { id: Number(id) },
    });
    if (!curso) {
      res.status(404).json({ error: "Curso no encontrado" });
    } else {
      res.json(curso);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el curso" });
  }
});

// POST - Create a new Curso
router.post("/", async (req, res) => {
  const { descripcion, fecha_inicio } = req.body;
  try {
    const cursoCreado = await prisma.curso.create({
      data: {
        descripcion,
        fecha_inicio,
        estado: 'Activo', // El estado se establece por defecto como 'Activo'
      },
    });
    res.status(201).json(cursoCreado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el curso" });
  }
});

// PUT - Update an existing Curso by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { descripcion, fecha_inicio, estado } = req.body;
  try {
    const cursoActualizado = await prisma.curso.update({
      where: { id: Number(id) },
      data: {
        descripcion,
        fecha_inicio,
        estado,
      },
    });
    res.json(cursoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el curso" });
  }
});

// DELETE - Delete a Curso by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.curso.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Curso eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el curso" });
  }
});

export default router;
