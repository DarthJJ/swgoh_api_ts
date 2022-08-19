import { DataSource, Repository } from "typeorm";
import { DbRetrieveException } from "../exceptions/dbRetrieveException";
import { DbSaveException } from "../exceptions/dbSaveException";
import { Character } from "../swgoh-api/jsonModels/static/character/character";
import { iDao } from "./iDao";
import { Ability } from "../swgoh-api/jsonModels/static/shared/ability";
import { GearLevel } from "../swgoh-api/jsonModels/static/character/gearLevel";

export class CharacterDao implements iDao<Character> {
  private readonly _database: Repository<Character>;

  constructor(database: Repository<Character>) {
    this._database = database;
  }

  async exists(id: string): Promise<boolean> {
    try {
      return (await this.getById(id, false)) != null;
    } catch {
      return false;
    }
  }

  async getById(id: string, eager: boolean): Promise<Character | null> {
    try {
      const char = await this._database.findOne({
        where: {
          base_id: id,
        },
        relations: {
          gear_levels: eager,
          abilities: eager,
        },
      });
      return char;
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
