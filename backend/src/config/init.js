import { db } from "./db.js";

async function init() {
  try {
    await db.sync({ force: true }); // fuerza la creación de tablas
    console.log("Tablas creadas correctamente");
  } catch (err) {
    console.error("Error creando tablas:", err);
  } finally {
    await db.close();
  }
}

init();
