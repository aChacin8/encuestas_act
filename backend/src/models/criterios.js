import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

const Criterio = db.define("Criterio", {
    id_criterio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_criterio: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    peso: {
        type: DataTypes.DECIMAL(3,2),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: "criterios",
    timestamps: false
})

export default Criterio