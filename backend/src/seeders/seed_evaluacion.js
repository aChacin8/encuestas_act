import { db } from "../config/db.js";
import Evaluacion from "../models/Evaluacion.js";

const seedEvaluaciones = async () => {
  try {
    await db.sync({ force: false });

    const evaluaciones = [
      // Evaluaciones COMPLETADAS
      {
        codigo_estudiante: "A001",
        id_docente: 1,
        id_periodo: 1,
        id_encuesta: 1,
        fecha_evaluacion: new Date(),
        puntaje_total: 92.50,
        completada: true
      },
      {
        codigo_estudiante: "A002",
        id_docente: 1,
        id_periodo: 1,
        id_encuesta: 1,
        fecha_evaluacion: new Date(),
        puntaje_total: 85.00,
        completada: true
      },
      {
        codigo_estudiante: "A003",
        id_docente: 2,
        id_periodo: 1,
        id_encuesta: 1,
        fecha_evaluacion: new Date(),
        puntaje_total: 78.30,
        completada: true
      },

      // Evaluaciones INICIADAS pero NO COMPLETADAS
      {
        codigo_estudiante: "A004",
        id_docente: 2,
        id_periodo: 1,
        id_encuesta: 1,
        fecha_evaluacion: new Date(),
        puntaje_total: null,
        completada: false
      },
      {
        codigo_estudiante: "A005",
        id_docente: 3,
        id_periodo: 1,
        id_encuesta: 1,
        fecha_evaluacion: new Date(),
        puntaje_total: null,
        completada: false
      },

      // Evaluación NO INICIADA
      // A006, A007, A008 NO TIENEN REGISTRO
      // El admin verá que NO han evaluado

      // Más evaluaciones completadas
      {
        codigo_estudiante: "A009",
        id_docente: 4,
        id_periodo: 1,
        id_encuesta: 1,
        fecha_evaluacion: new Date(),
        puntaje_total: 90.00,
        completada: true
      },
      {
        codigo_estudiante: "A010",
        id_docente: 5,
        id_periodo: 1,
        id_encuesta: 1,
        fecha_evaluacion: new Date(),
        puntaje_total: 88.75,
        completada: true
      }
    ];

    await Evaluacion.bulkCreate(evaluaciones);

    console.log("✅ Evaluaciones sembradas correctamente");

  } catch (error) {
    console.error("❌ Error al sembrar evaluaciones:", error);
  }
};

seedEvaluaciones();
