import Criterio from "../models/criterios.js"

export const getCriterios = async (req, res) => {
    try {
        const criterios = await Criterio.findAll({where: {activo: true}});
        res.status(200).json({msg: 'Criterios encontrados', criterios})
    } catch (error) {
        const err = new Error ('Error al obtener los criterios de evaluación')
        return res.status(500).json({msg: err.message});
    }
}

export const getCriteriosById = async (req, res) => {
    const { id_criterio } = req.params;
    try {
        const criterio = await Criterio.findOne({where: {id_criterio, activo: true}})
        if (!criterio){
            const err = new Error ('Criterio no encontrado');
            return res.status(404).json({msg: err.message})
        }
        res.status(200).json({msg: 'Criterio encontrado', criterio})
    }
    catch (error){
        const err = new Error ('Error al obtener el criterio por ID');
        return res.status(500).json({msg: err.message});
    }
}
