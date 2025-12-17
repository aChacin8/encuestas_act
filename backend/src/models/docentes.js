import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

const Docente = db.define("Docente", {
    id_docente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    materia: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    sede: {
        type: DataTypes.ENUM(
            'UVM Reforma',
            'UVM Coyoacan',
            'UVM Mixcoac',
            'UVM Lindavista',
            'UVM Cuernavaca',
            'UVM Pachuca',
            'UVM Toluca'
        ),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: "docentes",
    timestamps: false
});

export default Docente;
