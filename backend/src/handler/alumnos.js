import Alumno from "../models/Alumnos.js";
import AlumnoDocente from "../models/AlumnoDocente.js";
import { hashPassword, comparePassword } from "../services/bcrypt.js";
import { generateToken } from "../services/jwt.js";

export const createAlumno = async (req, res) => {
    const { codigo_estudiante, password, ...data } = req.body;

    const exists = await Alumno.findByPk(codigo_estudiante);
    if (exists) return res.status(400).json({ msg: "Alumno ya existe" });

    const alumno = await Alumno.create({
        codigo_estudiante,
        ...data,
        password: await hashPassword(password)
    });

    res.status(201).json({ msg: "Alumno creado correctamente", alumno });
};

export const loginAlumno = async (req, res) => {
    const { codigo_estudiante, password } = req.body;

    const alumno = await Alumno.findByPk(codigo_estudiante);
    if (!alumno) return res.status(404).json({ msg: "Alumno no encontrado" });

    const valid = await comparePassword(password, alumno.password);
    if (!valid) return res.status(401).json({ msg: "Credenciales inválidas" });

    const token = generateToken({ codigo_estudiante });
    res.json({ token });
};

export const getAlumnoProfile = async (req, res) => {
    const alumno = await Alumno.findByPk(req.user.codigo_estudiante, {
        attributes: { exclude: ["password"] }
    });

    res.json({ alumno });
};

export const getAlumnosByDocente = async (req, res) => {
    const { id_docente } = req.params;

    const alumnos = await Alumno.findAll({
        include: [{
            model: AlumnoDocente,
            where: { id_docente },
            attributes: []
        }]
    });

    res.json({ alumnos });
};

export const getAlumnosBySede = async (req, res) => {
    const { sede } = req.params;

    const alumnos = await Alumno.findAll({ where: { sede } });
    res.json({ alumnos });
};
