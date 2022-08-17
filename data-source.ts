import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  entities: ["src/swgoh-api/apiModels/static/**/*.ts"],
  migrations: ["./migrations/**/*.ts"],
  database: "testlib",
  dropSchema: true,
  synchronize: true,
  host: "localhost",
  port: 3306,
  username: "testlib",
  password: "testlib",
  logging: ["error", "warn", "query"],
});
