import "reflect-metadata";
import { NoDataException } from "../../exceptions/noDataException";
import { RetrieveException } from "../../exceptions/retrieveException";
import { SerializeException } from "../../exceptions/serializeException";
import { BaseModel } from "../jsonModels/baseModel";
import { Player } from "../jsonModels/player/player";
import { Ability } from "../jsonModels/static/shared/ability";
import { Character } from "../jsonModels/static/character/character";
import { Ship } from "../jsonModels/static/ship/ship";
import { EndPoints } from "./endPoints";

export class Retriever {
  private readonly baseApiUrl: string = "https://swgoh.gg/api/";

  public async player(allycode: number): Promise<Player> {
    const endPoint = this.baseApiUrl + EndPoints.PLAYER.replace("$1", allycode.toString());
    const data = await this.apiCall(endPoint);
    return this.transformData<Player>(data, Player);
  }

  public async characters(): Promise<Character[]> {
    const endpoint = this.baseApiUrl + EndPoints.CHARACTERS;
    const data = await this.apiCall(endpoint);
    return this.transformArrayData<Character>(data, Character);
  }

  public async ships(): Promise<Ship[]> {
    const endpoint = this.baseApiUrl + EndPoints.SHIPS;
    const data = await this.apiCall(endpoint);
    return this.transformArrayData<Ship>(data, Ship);
  }

  public async abilities(): Promise<Ability[]> {
    const endpoint = this.baseApiUrl + EndPoints.ABILITIES;
    const data = await this.apiCall(endpoint);
    return this.transformArrayData<Ability>(data, Ability);
  }

  private async apiCall(url: string): Promise<object[]> {
    return await fetch(url).then((response) => {
      if (!response) {
        throw new RetrieveException("Error retrieving data: " + response);
      }
      return response.json();
    });
  }
  private transformData<T extends BaseModel>(data: object, type: new () => T): T {
    if (!data) {
      throw new NoDataException("The retrieved data is empty");
    }
    try {
      return new type().createFromJSON(data);
    } catch (exception: unknown) {
      throw new SerializeException("Error Serializing data", exception);
    }
  }

  private transformArrayData<T extends BaseModel>(data: object[], type: new () => T): T[] {
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
