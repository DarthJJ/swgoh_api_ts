import { DataSource } from "typeorm";
import { CharacterDao } from "../Daos/characterDao";
import { Character } from "../swgoh-api/apiModels/static/character";
export class DatabaseManager {
  private _database: DataSource;
  private characterDao: CharacterDao;
  constructor(database: DataSource) {
    this._database = database;
    this.characterDao = new CharacterDao(this._database.getRepository(Character));
  }

  public get Characters() {
    return this.characterDao;
  }
}
