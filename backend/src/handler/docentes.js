import Docente from '../models/docentes.js';

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
