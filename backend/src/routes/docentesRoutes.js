import express from "express";

import {
    getDocentes,
    getDocenteById,
    loginDocente,
    getDocenteProfile,
    getDocentesBySede
} from "../handler/docentes.js";

import { getCriterios, getCriteriosById } from "../handler/criterios.js";
import { createEvaluacion, getEvaluacionesByDocente } from "../handler/evaluacion.js";

import { authDocente } from "../middlewares/authValidation.js";
import { handleInputErrors } from "../middlewares/handleInputErrors.js";

const docentesRoutes = express.Router();

docentesRoutes.post("/docentes/login", loginDocente);

docentesRoutes.get("/docentes", authDocente, handleInputErrors, getDocentes);
docentesRoutes.get("/docentes/profile", authDocente, handleInputErrors, getDocenteProfile);
docentesRoutes.get("/docentes/:id_docente", authDocente, handleInputErrors, getDocenteById);

// Docente → alumnos
docentesRoutes.get(
    "/docentes/:id_docente/alumnos",
    authDocente,
    handleInputErrors,
    getAlumnosByDocente
);

// Docente → evaluaciones
docentesRoutes.get(
    "/docentes/:id_docente/evaluaciones",
    authDocente,
    handleInputErrors,
    getEvaluacionesByDocente
);

docentesRoutes.post(
    "/docentes/:id_docente/evaluaciones",
    authAlumno,
    handleInputErrors,
    createEvaluacion
);

docentesRoutes.get("/docentes/sede/:sede", authDocente, handleInputErrors, getDocentesBySede);

docentesRoutes.get("/criterios", authDocente, handleInputErrors, getCriterios);
docentesRoutes.get("/criterios/:id_criterio", authDocente, handleInputErrors, getCriteriosById);

export default docentesRoutes;
