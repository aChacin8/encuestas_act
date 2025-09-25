import jwt from "jsonwebtoken";

export const alumnoValidate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ msg: "No se proporcionó token" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.codigo_estudiante = decoded.codigo_estudiante;
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Token inválido" });
    }
};
