import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
import 'dotenv/config'

import Alumno from "../models/alumnos.js";

export const createAlumno = async (req, res) => {
    try {
        const { codigo_estudiante, nombre_estudiante, apellido_estudiante, fecha_nacimiento } = req.body;

        const alumnoExistente = await Alumno.findByPk(codigo_estudiante);
        if (alumnoExistente) {
            return res.status(400).json({ msg: "El alumno ya existe" });
        }

        const hashPassword = await bcrypt.hash(fecha_nacimiento, 10)

        const alumno = await Alumno.create({
            codigo_estudiante,
            nombre_estudiante,
            apellido_estudiante,
            fecha_nacimiento: hashPassword,
        });

        return res.status(201).json({
            msg: "Alumno registrado correctamente",
            alumno
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al registrar el alumno", error: error.message });
    }
};

export const loginAlumno = async (req, res) => {
    try {
        const { codigo_estudiante, fecha_nacimiento } = req.body;

        const alumno = await Alumno.findByPk(codigo_estudiante);
        if (!alumno) {
            return res.status(404).json({ msg: "Alumno no encontrado" });
        }

        if (alumno.fecha_nacimiento !== fecha_nacimiento) {
            return res.status(401).json({ msg: "Credenciales incorrectas" });
        }

        const validPassword = await bcrypt.compare(fecha_nacimiento, alumno.fecha_nacimiento);
        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        } 

        const token = jwt.sign (
            {
                codigo_estudiante: alumno.codigo_estudiante
            },
            process.env.JWT_SECRET, 
            {expiresIn: '8h'}
        )
        return res.status(200).json({
            msg: "Login exitoso",
            alumno,
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error en el login", error: error.message });
    }
};