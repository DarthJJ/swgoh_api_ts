import { NoDataException } from "../exceptions/noDataException.js";
import { RetrieveException } from "../exceptions/retrieveException.js";
import { SerializeException } from "../exceptions/serializeException.js";
import { BaseModel } from "../models/baseModel.js";
import { Character } from "../models/character.js";
import { EndPoints } from "./endPoints.js";
import { injectable } from "tsyringe";
import { Ship } from "../models/ship.js";
import { Ability } from "../models/ability.js";

@injectable()
export class Retriever {
  private readonly baseApiUrl: string = "https://swgoh.gg/api/";

  public async getCharacters(): Promise<Character[]> {
    const endpoint = this.baseApiUrl + EndPoints.CHARACTERS;
    const data = await this.apiCall(endpoint);
    return this.transformData<Character>(data, Character);
  }

  public async getShips(): Promise<Ship[]> {
    const endpoint = this.baseApiUrl + EndPoints.SHIPS;
    const data = await this.apiCall(endpoint);
    return this.transformData<Ship>(data, Ship);
  }

  public async getAbilities(): Promise<Ability[]> {
    const endpoint = this.baseApiUrl + EndPoints.ABILITIES;
    const data = await this.apiCall(endpoint);
    return this.transformData<Ability>(data, Ability);
  }

  private async apiCall(url: string): Promise<object[]> {
    return await fetch(url).then((response) => {
      if (!response) {
        throw new RetrieveException("Error retrieving data: " + response);
      }
      return response.json();
    });
  }

  private transformData<T extends BaseModel>(data: object[], type: new () => T): T[] {
    if (!data || data.length! < 1) {
      throw new NoDataException("The retrieved data is empty");
    }
    try {
      const returnData: T[] = [];
      for (const index in data) {
        returnData.push(new type().createFromJSON(data[index]));
      }
      return returnData;
    } catch (exception: unknown) {
      throw new SerializeException("Error Serializing data", exception);
    }
  }
}
