import { DataTypes } from "sequelize";

import { db } from "../config/db.js"
import Criterio from "./criterios.js";
import Evaluacion from "./evaluacion.js";

const DetalleEvaluacion = db.define("DetalleEvaluacion", {
    id_detalle: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    puntaje: { type: DataTypes.INTEGER, allowNull: false },
}, {
    tableName: "detalle_evaluaciones",
    timestamps: false,
});

DetalleEvaluacion.belongsTo(Evaluacion, { foreignKey: "id_evaluacion" });
Evaluacion.hasMany(DetalleEvaluacion, { foreignKey: "id_evaluacion" });

DetalleEvaluacion.belongsTo(Criterio, { foreignKey: "id_criterio" });
Criterio.hasMany(DetalleEvaluacion, { foreignKey: "id_criterio" });

export default DetalleEvaluacion;