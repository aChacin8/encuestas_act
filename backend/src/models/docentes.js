import { DataTypes } from "sequelize";
import { db } from "../config/db.js"

const Docente = db.define("Docente", {
    id_docente: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre_docente: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido_docente: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    departamento: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: "docentes",
    timestamps: false
})

export default Docente