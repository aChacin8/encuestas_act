import { db } from "./db.js";
import Docente  from "../models/docentes.js";
import  Encuesta  from "../models/encuestas.js";
import  Evaluacion  from "../models/evaluacion.js";
import  Criterio  from "../models/criterios.js";
import  DetalleEvaluacion  from "../models/detalle_evaluación.js";
import Comentario from "../models/comentarios.js";
import  Periodo  from "../models/periodo.js";

async function init() {
  try {
    await db.sync({ force: true }); // fuerza la creación de tablas
    console.log("Tablas creadas correctamente");
  } catch (err) {
    console.error("Error creando tablas:", err);
  } finally {
    await db.close();
  }
}

init();
