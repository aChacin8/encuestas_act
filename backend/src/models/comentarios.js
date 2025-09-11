import { DataTypes } from "sequelize";

import { db } from "../config/db.js";
import Evaluacion from "./evaluacion.js";

const Comentario = db.define("Comentario", {
    id_comentario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    comentario: { type: DataTypes.TEXT },
    fecha_comentario: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
    tableName: "comentarios",
    timestamps: false,
});

Comentario.belongsTo(Evaluacion, { foreignKey: "id_evaluacion" });
Evaluacion.hasMany(Comentario, { foreignKey: "id_evaluacion" });

export default Comentario;