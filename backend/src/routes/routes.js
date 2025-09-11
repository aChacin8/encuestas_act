import express from 'express';
import { getDocenteById, getDocentes } from '../handler/docentes.js';
import { getCriterios, getCriteriosById } from '../handler/criterios.js';

const router = express.Router()

router.get ('/docentes', getDocentes)
router.get ('/docentes/:id_docente', getDocenteById)

router.get ('/criterios', getCriterios)
router.get ('/criterios/:id_criterio', getCriteriosById)

export default router