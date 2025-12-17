import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import Docente from "./Docentes.js";
import Periodo from "./Periodo.js";
import Encuesta from "./Encuestas.js";
import Alumno from "./Alumnos.js";

const Evaluacion = db.define("Evaluacion", {
    id_evaluacion: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    codigo_estudiante: { 
        type: DataTypes.STRING(20), 
        allowNull: false 
    },
    fecha_evaluacion: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    },
    puntaje_total: { 
        type: DataTypes.DECIMAL(5, 2) 
    },
    completada: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: false 
    }
}, {
    tableName: "evaluaciones",
    timestamps: false
});

/* Relaciones */
Evaluacion.belongsTo(Docente, { foreignKey: "id_docente" });
Docente.hasMany(Evaluacion, { foreignKey: "id_docente" });

Evaluacion.belongsTo(Periodo, { foreignKey: "id_periodo" });
Periodo.hasMany(Evaluacion, { foreignKey: "id_periodo" });

Evaluacion.belongsTo(Encuesta, { foreignKey: "id_encuesta" });
Encuesta.hasMany(Evaluacion, { foreignKey: "id_encuesta" });

Evaluacion.belongsTo(Alumno, { foreignKey: "codigo_estudiante" });
Alumno.hasMany(Evaluacion, { foreignKey: "codigo_estudiante" });

export default Evaluacion;
