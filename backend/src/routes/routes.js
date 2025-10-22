import express from 'express';
import { getDocenteById, getDocentes } from '../handler/docentes.js';
import { getCriterios, getCriteriosById } from '../handler/criterios.js';
import { createEvaluacion, getEvaluacionesByDocente } from '../handler/evaluacion.js';
import { createAlumno, getAlumnoById, loginAlumno } from '../handler/alumnos.js';
import {alumnoValidate, validateAlumno} from '../middleware/alumnoValidate.js'
import { handleInputErrors } from '../middleware/handleInputErrors.js';

const router = express.Router()

router.get ('/docentes', getDocentes)
router.get ('/docentes/:id_docente', getDocenteById)

router.get ('/docentes/:id_docente/evaluaciones', getEvaluacionesByDocente)
router.post ('/docentes/:id_docente/evaluaciones', alumnoValidate ,createEvaluacion)

router.get ('/criterios', getCriterios)
router.get ('/criterios/:id_criterio', getCriteriosById)

router.post ('/alumnos', 
            
                    createAlumno
                )
router.post ('/alumnos/login', loginAlumno )
router.get('/alumnos/:id_alumno', getAlumnoById)

export default router