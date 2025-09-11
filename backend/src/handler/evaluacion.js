import Evaluacion from "../models/evaluacion.js";
import DetalleEvaluacion from "../models/detalle_evaluacion.js";
import Comentario from "../models/comentarios.js";

export const crearEvaluacion = async (req, res) => {
    try {
        const { codigo_estudiante, id_docente, id_periodo, id_encuesta, detalles, comentario } = req.body;

        const evaluacion = await Evaluacion.create({
            codigo_estudiante,
            id_docente,
            id_periodo,
            id_encuesta,
            completada: true,
            fecha_evaluacion: new Date()
        });

        if (detalles && Array.isArray(detalles)) {
            await Promise.all(
                detalles.map(det =>
                    DetalleEvaluacion.create({
                        id_evaluacion: evaluacion.id_evaluacion,
                        id_criterio: det.id_criterio,
                        puntaje: det.puntaje
                    })
                )
            );
        }

        if (comentario) {
            await Comentario.create({
                id_evaluacion: evaluacion.id_evaluacion,
                comentario
            });
        }

        return res.status(201).json({
            msg: "Evaluación registrada correctamente",
            evaluacion
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al registrar la evaluación" });
    }
};

export const getEvaluacionesByDocente = async (req, res) => {
    try {
        const { id_docente } = req.params;

        const evaluaciones = await Evaluacion.findAll({
            where: { id_docente },
            include: [DetalleEvaluacion, Comentario]
        });

        return res.status(200).json(evaluaciones);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al obtener las evaluaciones" });
    }
};
