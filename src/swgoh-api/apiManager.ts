import { DatabaseManager } from "../database/databaseManager";
import { Retriever } from "./http/retriever";
import { Character } from "./apiModels/static/character";
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
      case ToUpdate.ALL:
      default:
        break;
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
