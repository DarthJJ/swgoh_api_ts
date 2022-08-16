import "reflect-metadata";
import { NoDataException } from "../exceptions/noDataException";
import { RetrieveException } from "../exceptions/retrieveException";
import { SerializeException } from "../exceptions/serializeException";
import { BaseModel } from "../models/baseModel";
import { Character } from "../models/character";
import { EndPoints } from "./endPoints";
import { Ship } from "../models/ship";
import { Ability } from "../models/ability";

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

  private transformData<T extends BaseModel>(
    data: object[],
    type: new () => T
  ): T[] {
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
