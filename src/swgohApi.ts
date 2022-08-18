import { SwgohApiConfig } from "./callInterfaces/swgohApiConfig";
import { AbilityDao } from "./Daos/abilityDao";
import { CharacterDao } from "./Daos/characterDao";
import { ShipDao } from "./Daos/shipDao";
import { DatabaseManager } from "./database/databaseManager";
import { ModelConverter } from "./models/modelConverter";
import { Profile } from "./models/profile";
import { ApiManager, ToUpdate } from "./swgoh-api/apiManager";
import { Player } from "./swgoh-api/jsonModels/player/player";
import { GetPlayerConfig } from "./callInterfaces/getPlayerConfig";
export class SwgohApi {
  private _databaseManager: DatabaseManager;
  private _apiManager: ApiManager;
  constructor(config: SwgohApiConfig) {
    this._databaseManager = new DatabaseManager(config.database);
    this._apiManager = new ApiManager(this._databaseManager);
  }

  public get characters(): CharacterDao {
    return this._databaseManager.Characters;
  }

  public get ships(): ShipDao {
    return this._databaseManager.Ships;
  }

  public get abilities(): AbilityDao {
    return this._databaseManager.Ability;
  }

  public async getPlayer(getPlayerConfig: GetPlayerConfig): Promise<Profile> {
    if (getPlayerConfig.update) {
      const player: Player = await this._apiManager.getPlayer(getPlayerConfig.allycode);
      const profile: Profile = await new ModelConverter(this._databaseManager).convert(player);
      await this._databaseManager.Profiles.save(profile);
    }
    return this._databaseManager.Profiles.getById(getPlayerConfig.allycode);
  }

  public async updateStaticData(toUpdate: ToUpdate): Promise<void> {
    await this._apiManager.updateAll(toUpdate);
  }
}
