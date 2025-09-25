import express from 'express';
import { getDocenteById, getDocentes } from '../handler/docentes.js';
import { getCriterios, getCriteriosById } from '../handler/criterios.js';
import { crearEvaluacion, getEvaluacionesByDocente } from '../handler/evaluacion.js';

const router = express.Router()

router.get ('/docentes', getDocentes)
router.get ('/docentes/:id_docente', getDocenteById)
router.get ('/docentes/:id_docente/evaluaciones', getEvaluacionesByDocente)
router.post ('/docentes/:id_docente/evaluaciones', crearEvaluacion)


router.get ('/criterios', getCriterios)
router.get ('/criterios/:id_criterio', getCriteriosById)

export default router