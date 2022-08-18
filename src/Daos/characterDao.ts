import { Repository } from "typeorm";
import { DbRetrieveException } from "../exceptions/dbRetrieveException";
import { DbSaveException } from "../exceptions/dbSaveException";
import { Character } from "../swgoh-api/jsonModels/static/character/character";
import { iDao } from "./iDao";

export class CharacterDao implements iDao<Character> {
  private readonly _database: Repository<Character>;

  constructor(database: Repository<Character>) {
    this._database = database;
  }

  async exists(id: string): Promise<boolean> {
    try {
      const data = await this.getById(id);
      return data != null;
    } catch {
      return false;
    }
  }

  async getById(id: string): Promise<Character | null> {
    try {
      return await this._database.createQueryBuilder("findCharacter").where("BaseId = :id", { id }).getOne();
    } catch (exception: unknown) {
      throw new DbRetrieveException("Something went wrong retrieving the character", exception);
    }
  }
  async save(object: Character): Promise<void> {
    try {
      await this._database.save(object);
    } catch (exception: unknown) {
      throw new DbSaveException("Something went wrong saving the character", exception);
    }
  }

  async saveAll(object: Character[]): Promise<void> {
    for (var character of object) {
      await this.save(character);
    }
  }

  async delete(id: string | number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
