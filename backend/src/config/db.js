import { Sequelize } from "sequelize";

export const db = new Sequelize("encuestas", "root", "root", {
  logging: false,
  host: "localhost",
  dialect: "mysql",
  
});


