import Evaluacion from "../models/evaluacion.js";
import DetalleEvaluacion from "../models/detalle_evaluacion.js";
import Criterio from "../models/criterios.js";
// import Comentario from "../models/comentarios.js"; 

export const createEvaluacion = async (req, res) => {
    console.log("HEADERS", req.headers);
console.log("TOKEN", req.headers.authorization);
console.log("CODIGO ESTUDIANTE", req.codigo_estudiante);

    try {
        const { id_docente, id_periodo, id_encuesta, detalles } = req.body;
        const codigo_estudiante = req.codigo_estudiante; // lo obtenemos del token

        if (!codigo_estudiante) {
            return res.status(401).json({ msg: "No se ha identificado el alumno logueado." });
        }

        const evaluacion = await Evaluacion.create({
            codigo_estudiante,
            id_docente,
            id_periodo,
            id_encuesta,
            completada: true,
            fecha_evaluacion: new Date()
        });

        let totalPonderado = 0;
        let sumaPesos = 0;

        if (detalles && Array.isArray(detalles)) {
            for (const det of detalles) {
                const criterio = await Criterio.findByPk(det.id_criterio);
                if (!criterio) continue;

                const peso = parseFloat(criterio.peso) || 1; 
                totalPonderado += det.puntaje * peso;
                sumaPesos += peso;

                await DetalleEvaluacion.create({
                    id_evaluacion: evaluacion.id_evaluacion,
                    id_criterio: det.id_criterio,
                    puntaje: det.puntaje
                });
            }
        }

        const promedio = sumaPesos > 0 ? (totalPonderado / sumaPesos).toFixed(2) : null;
        evaluacion.puntaje_total = promedio;
        await evaluacion.save();

        const evaluacionesDocente = await Evaluacion.findAll({
            where: { id_docente },
            attributes: ["puntaje_total"]
        });

        let suma = 0;
        let count = 0;
        evaluacionesDocente.forEach(ev => {
            if (ev.puntaje_total) {
                suma += parseFloat(ev.puntaje_total);
                count++;
            }
        });

        const promedioGlobal = count > 0 ? (suma / count).toFixed(2) : null;
        const apto = promedioGlobal !== null && promedioGlobal >= 8;

        return res.status(201).json({
            msg: "Evaluación registrada correctamente",
            evaluacion,
            promedioGlobal,
            docente_apto: apto ? "Sí puede laborar" : "No cumple con el mínimo requerido"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al registrar la evaluación", error: error.message });
    }
};

export const getEvaluacionesByDocente = async (req, res) => {
    const id_docente = parseInt(req.params.id_docente, 10);
    
    if (!id_docente) {
        return res.status(400).json({ msg: "ID de docente inválido" });
    }

    try {
        const evaluaciones = await Evaluacion.findAll({
            where: { id_docente },
            include: [
                { model: DetalleEvaluacion },
            ]
        });
        res.status(200).json(evaluaciones);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
