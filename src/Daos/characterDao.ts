import { Repository } from "typeorm";
import { iDao } from "./iDao.js";
import { Character } from "../swgoh-api/apiModels/static/character";
import { DbSaveException } from "../exceptions/dbSaveException";

export class CharacterDao implements iDao<Character> {
  private readonly _database: Repository<Character>;

  constructor(database: Repository<Character>) {
    this._database = database;
  }
  async getById(id: string | number): Promise<Character | null> {
    throw new Error("Method not implemented.");
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
