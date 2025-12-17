import express from "express";
import {
    getAlumnosAdmin,
    getDocentesAdmin,
    getEstadoEvaluacionAlumno
} from "../handler/admin.js"

const adminRoutes = express.Router();

adminRoutes.get("/admin/alumnos", getAlumnosAdmin);
adminRoutes.get("/admin/docentes", getDocentesAdmin);
adminRoutes.get("/admin/alumnos/:codigo_estudiante/evaluacion", getEstadoEvaluacionAlumno);

export default adminRoutes;
