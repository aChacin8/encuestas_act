import { DataTypes } from "sequelize";

import { db } from "../config/db.js";

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
    fecha_nacimiento: { 
        type: DataTypes.DATEONLY,
        allowNull: false 
    }
}, {
    tableName: "alumnos",
    timestamps: false,
});


export default Alumno