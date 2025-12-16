import Alumno from '../models/alumnos.js';
import Docente from '../models/docentes.js';

import jwt from 'jsonwebtoken';
export const getDocentes = async (req, res) => {
    try {
        const docentes = await Docente.findAll({where: {activo: true}});
        res.json(docentes);
    } catch (error) {
        const err = new Error ('Error al obtener los docentes');
        return res.status(500).json({msg: err.message});
    }    
}

export const getDocenteById = async (req, res) => {
    const { id_docente } = req.params;  
    try {
        const docente = await Docente.findOne({where: {id_docente, activo: true}})
        if (!docente){
            const err = new Error ('Docente no encontrado');
            return res.status(404).json({msg: err.message})
        }
        res.status(200).json({msg: 'Docente encontrado', docente})
    }
    catch (error){
        const err = new Error ('Error al obtener el docente por ID');
        return res.status(500).json({msg: err.message});
    }
}

export const loginDocente = async (req, res) => {
    try {
        const { email, password } = req.body;

        const docente = await Docente.findOne({where: { email, activo: true }});
        if (!docente) {
            return res.status(404).json({ msg: "Docente no encontrado" });
        }

        // const validPassword = await bcrypt.compare(password, docente.password);
        const validPassword = password === docente.password;
        if (!validPassword) {
            return res.status(401).json({ message: 'password incorrecta' });
        }

        const token = jwt.sign(
            {
                id_docente: docente.id_docente
            },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        )
        return res.status(200).json({
            msg: "Docente inicio de sesion exitoso",
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error en el login", error: error.message });
    }
}

export const getDocenteProfile = async (req, res) => {
    try {
        const docente = await Docente.findByPk(req.id_docente, {
            attributes: { exclude: ['password'] }
        });
        if (!docente) {
            return res.status(404).json({ msg: "Docente no encontrado" });
        }
        return res.status(200).json({ docente });
    } catch (error) {
        return res.status(500).json({ msg: "Error al obtener el perfil del docente", error: error.message });
    }
}


