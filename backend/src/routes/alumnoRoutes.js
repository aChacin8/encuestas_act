import express from 'express'

import {
    createAlumno,
    loginAlumno,
    getAlumnoProfile,
    getAlumnosByDocente,
    getAlumnosBySede
} from "../handler/alumnos.js";

import { authAlumno } from "../middlewares/authValidation.js";
import { validateAlumno } from "../middlewares/alumnoValidate.js";

const alumnosRoutes = express.alumnosRoutes();

alumnosRoutes.post(
    "/alumnos",
    validateAlumno,
    handleInputErrors,
    createAlumno
);

alumnosRoutes.post("/alumnos/login", loginAlumno);

alumnosRoutes.get("/alumnos/profile", authAlumno, getAlumnoProfile);

alumnosRoutes.get(
    "/alumnos/sede/:sede",
    authDocente,
    getAlumnosBySede
);

export default alumnosRoutes;