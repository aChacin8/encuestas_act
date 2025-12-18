import express from "express";
import {
    getAlumnosAdmin,
    getDocentesAdmin,
    getEstadoEvaluacionAlumno,
    loginAdmin,
    notificarAlumnosPendientes
} from "../handler/admin.js"
import { authAdmin } from "../middlewares/authValidation.js";

const adminRoutes = express.Router();

adminRoutes.post("/admin", loginAdmin);
adminRoutes.get("/admin/alumnos", authAdmin, getAlumnosAdmin);
adminRoutes.get("/admin/docentes", authAdmin, getDocentesAdmin);
adminRoutes.get("/admin/alumnos/:codigo_estudiante/evaluacion", authAdmin, getEstadoEvaluacionAlumno);
adminRoutes.post("/admin/notificar-alumnos-pendientes", authAdmin, notificarAlumnosPendientes)

export default adminRoutes;
