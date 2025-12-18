import { verifyToken } from "../services/jwt.js";

export const authAlumno = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "Token requerido" });

    try {
        const decoded = verifyToken(token);
        req.user = { codigo_estudiante: decoded.codigo_estudiante, rol: "ALUMNO" };
        next();
    } catch {
        res.status(401).json({ msg: "Token inválido" });
    }
};

export const authDocente = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "Token requerido" });

    try {
        const decoded = verifyToken(token);
        req.user = { id_docente: decoded.id_docente, rol: "DOCENTE" };
        next();
    } catch {
        res.status(401).json({ msg: "Token inválido" });
    }
};

export const authAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "Token requerido" });

    try {
        const decoded = verifyToken(token);
        req.user = { id_admin: decoded.id_admin, rol: "ADMIN" };
        next();
    } catch {
        res.status(401).json({ msg: "Token inválido" });
    }
};

