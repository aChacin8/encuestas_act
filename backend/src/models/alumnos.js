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
    sede: {
        type: DataTypes.ENUM('UVM Reforma', 'UVM Coyoacan', 'UVM Mixcoac', 'UVM Lindavista', 'UVM Cuernavaca', 'UVM Pachuca', 'UVM Toluca'),
        allowNull: false
    },
    carrera: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    contraseña: { 
        type: DataTypes.STRING(200),
        allowNull: false 
    }
}, {
    tableName: "alumnos",
    timestamps: false,
});


export default Alumno