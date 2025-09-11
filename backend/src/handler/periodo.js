import Periodo from "../models/periodo.js";

export const getPeriodosActivos = async (req, res) => {
    try {
        const periodos = await Periodo.findAll({ where: { activo: true } });
        return res.status(200).json(periodos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al obtener los periodos" });
    }
};
