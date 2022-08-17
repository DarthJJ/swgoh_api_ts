import { DataSource } from "typeorm";

export interface Config {
  database: DataSource;
}
