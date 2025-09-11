import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

const Periodo = db.define("Periodo", {
    id_periodo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_periodo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull:false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull:false
    },
    activo : {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
}, {
    tableName: "periodo",
    timestamps: false
})

export default Periodo