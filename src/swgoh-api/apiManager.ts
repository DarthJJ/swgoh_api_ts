import { DatabaseManager } from "../database/databaseManager";
import { Retriever } from "./http/retriever";
import { Player } from "./jsonModels/player/player";
import { Character } from "./jsonModels/static/character/character";
import { Ability } from "./jsonModels/static/shared/ability";
import { Ship } from "./jsonModels/static/ship/ship";

export enum ToUpdate {
  ALL = 1,
  CHARACTERS = 2,
  SHIPS = 3,
  ABILITIES = 4,
}
export class ApiManager {
  private _databaseManager: DatabaseManager;
  private _retriever: Retriever;
  constructor(databaseManager: DatabaseManager) {
    this._databaseManager = databaseManager;
    this._retriever = new Retriever();
  }

  public async updateAll(toUpdate: ToUpdate): Promise<void> {
    switch (toUpdate) {
      case ToUpdate.CHARACTERS:
        await this.updateStaticCharacterData();
        break;
      case ToUpdate.SHIPS:
        await this.updateStaticShipData();
        break;
      case ToUpdate.ABILITIES:
        await this.updateStaticAbilityData();
        break;
      case ToUpdate.ALL:
        await this.updateStaticCharacterData();
        await this.updateStaticShipData();
        await this.updateStaticAbilityData();
      default:
        break;
    }
  }

  public async getPlayer(allycode: number): Promise<Player> {
    try {
      return this._retriever.player(allycode);
    } catch (exception: unknown) {
      throw exception;
    }
  }

  private async updateStaticAbilityData(): Promise<void> {
    try {
      const data: Ability[] = await this._retriever.abilities();
      await this._databaseManager.Ability.saveAll(data);
    } catch (exception: unknown) {
      throw exception;
    }
  }

  private async updateStaticShipData(): Promise<void> {
    try {
      const data: Ship[] = await this._retriever.ships();
      await this._databaseManager.Ships.saveAll(data);
    } catch (exception: unknown) {
      throw exception;
    }
  }

  private async updateStaticCharacterData(): Promise<void> {
    try {
      const data: Character[] = await this._retriever.characters();
      await this._databaseManager.Characters.saveAll(data);
    } catch (exception: unknown) {
      throw exception;
    }
  }
}
