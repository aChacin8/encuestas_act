import jwt from "jsonwebtoken";
import { body } from "express-validator";

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

export const validateAlumno = async (req, res, next ) => {
    await body('codigo_estudiante')
        .notEmpty().withMessage('El codigo del estudiante es obligatorio')
        .matches(/[0-9]/).withMessage('El codigo del estudiante debe contener al menos un número')
        .isLength({ min: 9, max: 15 }).withMessage('El codigo del estudiante debe tener entre 9 y 15 caracteres')
        .run(req);
    await body('nombre_estudiante')
        .notEmpty().withMessage('El nombre del estudiante es obligatorio')
        .isLength({ min: 2, max: 100 }).withMessage('El nombre del estudiante debe tener entre 2 y 100 caracteres')
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/).withMessage('El nombre del estudiante solo debe contener letras y espacios')
        .run(req);
    await body('apellido_estudiante')
        .notEmpty().withMessage('El apellido del estudiante es obligatorio')
        .isLength({ min: 2, max: 100 }).withMessage('El apellido del estudiante debe tener entre 2 y 100 caracteres')
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/).withMessage('El apellido del estudiante solo debe contener letras y espacios')
        .run(req);
    await body('sede')
        .notEmpty().withMessage('La sede es obligatoria')
        .isIn(['UVM Reforma', 'UVM Coyoacan', 'UVM Mixcoac', 'UVM Lindavista', 'UVM Cuernavaca', 'UVM Pachuca', 'UVM Toluca']).withMessage('La sede no es válida')
        .run(req);
    await body('carrera')
        .notEmpty().withMessage('La carrera es obligatoria')
        .isLength({ min: 10, max: 100 }).withMessage('La carrera debe tener entre 2 y 100 caracteres')
        .run(req);
    await body('fecha_nacimiento')
        .notEmpty().withMessage('La fecha de nacimiento es obligatoria')
        .isLength({min:8, max: 8}).withMessage('La fecha de nacimiento debe tener minimo y máximo 8 caracteres')
        .matches(/[0-9]/).withMessage('La fecha de nacimienito debe tener numeros')
        .matches(/^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/).withMessage('La fecha de nacimiento debe tener el formato AAAAMMDD')
        .run(req);
    }