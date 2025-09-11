// src/seeders/20250910162820-seed_criterios.js
import { db } from "../config/db.js";
import  Criterio from "../models/criterios.js"; 

export const up = async () => {
  await Criterio.bulkCreate([
    {
      nombre_criterio: "Claridad",
      descripcion: "Explica de forma clara y comprensible los temas",
      peso: 1.0,
      activo: true
    },
    {
      nombre_criterio: "Dominio",
      descripcion: "Demuestra dominio del tema durante la clase",
      peso: 1.0,
      activo: true
    },
    {
      nombre_criterio: "Ayuda",
      descripcion: "Resuelve dudas y brinda apoyo al estudiante",
      peso: 1.0,
      activo: true
    },
    {
      nombre_criterio: "Material",
      descripcion: "Utiliza material de apoyo adecuado y actualizado",
      peso: 1.0,
      activo: true
    },
    {
      nombre_criterio: "Manejo",
      descripcion: "Gestiona adecuadamente la dinámica de la clase",
      peso: 1.0,
      activo: true
    }
  ]);
};

export const down = async () => {
  await Criterio.destroy({ where: {}, truncate: true });
};
