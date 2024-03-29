//Centralizar conexão com o database

import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  //Se true, identifica mudanças e recria database, então não da pra controlar db
  synchronize: false,
  //Recebimento de feedbacks dos processos do typeorm
  logging: true,
  entities: [User],
  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => console.log("Data source initialized"))
  .catch((err) =>
    console.error("Error during data source initialization", err)
  );
