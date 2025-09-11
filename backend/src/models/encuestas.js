import { DataTypes } from "sequelize";

import { db } from "../config/db.js";
import Docente from "./docentes.js";

const Encuesta = db.define("Encuesta", {
    id_encuesta: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    codigo_estudiante: { 
        type: DataTypes.STRING(20), 
    },
    nombre_docente: { 
        type: DataTypes.STRING(100) 
    },
    apellido_docente: { 
        type: DataTypes.STRING(100)
    },
    email_docente: { 
        type: DataTypes.STRING(150) 
    },
    periodo_evaluado: { 
        type: DataTypes.STRING(50) 
    },
    comentario: { 
        type: DataTypes.TEXT 
    },
    fecha_encuesta: { 
        type: DataTypes.DATE, defaultValue: DataTypes.NOW 
    },
    procesada: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: false 
    },
    ip_usuario: { 
        type: DataTypes.STRING(45) 
    },
    navegador: { 
        type: DataTypes.STRING(255) 

    },
}, {
    tableName: "encuestas",
    timestamps: false,
});

Encuesta.belongsTo(Docente, { foreignKey: "id_docente" });
Docente.hasMany(Encuesta, { foreignKey: "id_docente" });

export default Encuesta