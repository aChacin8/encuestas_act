import Alumno from "../models/Alumnos.js";
import Docente from "../models/Docentes.js";
import Evaluacion from "../models/Evaluacion.js";
import Admin from "../models/Admin.js";

export const loginAdmin = async (req, res) => {
    const { email, password, id_admin} = req.body;

    const admin = await Admin.findOne({where: {email}});
    if (!admin) return res.status(404).json({ msg: "Admin no encontrado" });

    const valid = await comparePassword(password, admin.password);
    if (!valid) return res.status(401).json({ msg: "Credenciales inválidas" });

    const token = generateToken({ id_admin, email });
    res.json({ token });
};

export const getAlumnosAdmin = async (req, res) => {
    try {
        const alumnos = await Alumno.findAll({
            attributes: [
                "codigo_estudiante",
                "nombre_estudiante",
                "apellido_estudiante",
                "sede",
                "carrera"
            ]
        });

        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener alumnos" });
    }
};

export const getDocentesAdmin = async (req, res) => {
    try {
        const docentes = await Docente.findAll({
            attributes: [
                "id_docente",
                "nombre_docente",
                "apellido_docente",
                "materia",
                "sede",
                "activo"
            ]
        });

        res.json(docentes);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener docentes" });
    }
};

export const getEstadoEvaluacionAlumno = async (req, res) => {
    try {
        const { codigo_estudiante } = req.params;

        const alumno = await Alumno.findByPk(codigo_estudiante);

        if (!alumno) {
            return res.status(404).json({ message: "Alumno no encontrado" });
        }

        const evaluacion = await Evaluacion.findOne({
            where: { codigo_estudiante },
            attributes: [
                "id_evaluacion",
                "fecha_evaluacion",
                "puntaje_total",
                "completada"
            ]
        });

        if (!evaluacion) {
            return res.json({
                codigo_estudiante,
                nombre: `${alumno.nombre_estudiante} ${alumno.apellido_estudiante}`,
                evaluado: false,
                estado: "No ha iniciado la evaluación"
            });
        }

        if (!evaluacion.completada) {
            return res.json({
                codigo_estudiante,
                nombre: `${alumno.nombre_estudiante} ${alumno.apellido_estudiante}`,
                evaluado: false,
                estado: "Evaluación iniciada pero no finalizada"
            });
        }

        res.json({
            codigo_estudiante,
            nombre: `${alumno.nombre_estudiante} ${alumno.apellido_estudiante}`,
            evaluado: true,
            estado: "Evaluación completada",
            fecha: evaluacion.fecha_evaluacion,
            puntaje: evaluacion.puntaje_total
        });

    } catch (error) {
        res.status(500).json({ message: "Error al consultar evaluación" });
    }
};