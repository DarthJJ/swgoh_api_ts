import { Config } from "./config";
import { DatabaseManager } from "./database/databaseManager";
import { ApiManager, ToUpdate } from "./swgoh-api/apiManager";
export class SwgohApi {
  private _databaseManager: DatabaseManager;
  private _apiManager: ApiManager;
  constructor(config: Config) {
    this._databaseManager = new DatabaseManager(config.database);
    this._apiManager = new ApiManager(this._databaseManager);
  }

  public get Characters() {
    return this._databaseManager.Characters;
  }

  public async updateStaticData(toUpdate: ToUpdate): Promise<void> {
    await this._apiManager.updateAll(toUpdate);
  }
}
