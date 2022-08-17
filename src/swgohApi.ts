import { Config } from "./config";
import { DatabaseManager } from "./database/databaseManager";
export class SwgohApi {
  private _databaseManager: DatabaseManager;
  constructor(config: Config) {
    this._databaseManager = new DatabaseManager(config.database);
  }

  public get Characters() {
    return this._databaseManager.Characters;
  }
}
