import { DataTypes } from "sequelize";
import { db } from "../config/db.js"
import Alumno from "./alumnos.js";

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
        type: DataTypes.ENUM('UVM Reforma', 'UVM Coyoacan', 'UVM Mixcoac', 'UVM Lindavista', 'UVM Cuernavaca', 'UVM Pachuca', 'UVM Toluca'),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    id_alumno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'alumnos',
            key: 'codigo_estudiante'
        }
    }
}, {
    tableName: "docentes",
    timestamps: false
});

Docente.belongsTo(Alumno, { foreignKey: 'id_alumno' });  
Alumno.hasMany(Docente, { foreignKey: 'id_alumno' });  

export default Docente