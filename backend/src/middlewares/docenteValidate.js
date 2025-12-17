import { body } from "express-validator";
import { SEDES } from "../../utils/sedes";

export const validateAlumno = async (req, res, next) => {

    await body('codigo_estudiante')
        .notEmpty().withMessage('El código del estudiante es obligatorio')
        .isLength({ min: 9, max: 15 })
        .withMessage('El código del estudiante debe tener entre 9 y 15 caracteres')
        .matches(/\d/)
        .withMessage('El código del estudiante debe contener al menos un número')
        .run(req);

    await body('nombre_estudiante')
        .notEmpty().withMessage('El nombre del estudiante es obligatorio')
        .isLength({ min: 2, max: 100 })
        .withMessage('El nombre del estudiante debe tener entre 2 y 100 caracteres')
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .withMessage('El nombre solo debe contener letras y espacios')
        .run(req);

    await body('apellido_estudiante')
        .notEmpty().withMessage('El apellido del estudiante es obligatorio')
        .isLength({ min: 2, max: 100 })
        .withMessage('El apellido debe tener entre 2 y 100 caracteres')
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .withMessage('El apellido solo debe contener letras y espacios')
        .run(req);

    await body('sede')
        .notEmpty().withMessage('La sede es obligatoria')
        .isIn(SEDES)
        .withMessage('La sede no es válida')
        .run(req);

    await body('carrera')
        .notEmpty().withMessage('La carrera es obligatoria')
        .isLength({ min: 2, max: 100 })
        .withMessage('La carrera debe tener entre 2 y 100 caracteres')
        .run(req);

    await body('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres')
        .matches(/\d/)
        .withMessage('La contraseña debe contener al menos un número')
        .matches(/[A-Z]/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula')
        .run(req);

    next();
};
