import { DataTypes, ForeignKeyConstraintError } from "sequelize";

import { db } from "../config/db.js";
import Docente from "./docentes.js";

const Alumno = db.define("Alumno", {
    codigo_estudiante: { 
        type: DataTypes.STRING(20),
        primaryKey: true,  
        allowNull: false 
    },
    nombre_estudiante: { 
        type: DataTypes.STRING(100), 
        allowNull: false 
    },
    apellido_estudiante: { 
        type: DataTypes.STRING(100), 
        allowNull: false 
    },
    sede: {
        type: DataTypes.ENUM('UVM_Reforma', 'UVM_Coyoacan', 'UVM_Mixcoac', 'UVM_Lindavista', 'UVM_Cuernavaca', 'UVM_Pachuca', 'UVM_Toluca'),
        allowNull: false
    },
    carrera: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: { 
        type: DataTypes.STRING(200),
        allowNull: false 
    },
    id_docente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'docentes',
            key: 'id_docente'
        }
    }
}, {
    tableName: "alumnos",
    timestamps: false,
});

// Relación: un docente tiene muchos alumnos
Alumno.belongsTo(Docente, { foreignKey: 'id_docente' });  
Docente.hasMany(Alumno, { foreignKey: 'id_docente' });  

export default Alumno