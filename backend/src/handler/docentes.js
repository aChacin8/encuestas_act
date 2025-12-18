import Docente from "../models/Docentes.js";
import { comparePassword } from "../services/bcrypt.js";
import { generateToken } from "../services/jwt.js";

export const getDocentes = async (req, res) => {
    const docentes = await Docente.findAll({
        where: { activo: true },
        attributes: { exclude: ["password"] }
    });
    res.json(docentes);
};

export const getDocenteById = async (req, res) => {
    const { id_docente } = req.params;

    const docente = await Docente.findOne({
        where: { id_docente, activo: true },
        attributes: { exclude: ["password"] }
    });

    if (!docente) return res.status(404).json({ msg: "Docente no encontrado" });

    res.json({ docente });
};

export const loginDocente = async (req, res) => {
    const { email, password } = req.body;

    const docente = await Docente.findOne({ where: { email, activo: true } });
    if (!docente) return res.status(404).json({ msg: "Docente no encontrado" });

    const valid = await comparePassword(password, docente.password);
    if (!valid) return res.status(401).json({ msg: "Credenciales inválidas" });

    const token = generateToken({ id_docente: docente.id_docente });
    res.json({ token });
};

export const getDocenteProfile = async (req, res) => {
    const docente = await Docente.findByPk(req.user.id_docente, {
        attributes: { exclude: ["password"] }
    });

    res.json({ docente });
};

export const getDocentesBySede = async (req, res) => {
    const { sede } = req.params;

    try {
        const docentes = await Docente.findAll({
            where: {
                sede,
                activo: true
            },
            attributes: { exclude: ["password"] }
        });

        res.status(200).json({ docentes });
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener docentes por sede" });
    }
};