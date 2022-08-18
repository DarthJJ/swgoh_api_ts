import { Repository } from "typeorm";

import { iDao } from "./iDao";
import { Ability } from "../swgoh-api/jsonModels/static/shared/ability";
import { DbSaveException } from "../exceptions/dbSaveException";
import { DbRetrieveException } from "../exceptions/dbRetrieveException";

export class AbilityDao implements iDao<Ability> {
  private readonly _database: Repository<Ability>;

  constructor(database: Repository<Ability>) {
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

  async getById(id: string): Promise<Ability | null> {
    try {
      return await this._database.findOne({
        where: {
          base_id: id,
        },
      });
    } catch (exception: unknown) {
      throw new DbRetrieveException("Something went wrong retrieving the character", exception);
    }
  }
  async save(object: Ability): Promise<void> {
    try {
      await this._database.save(object);
    } catch (exception: unknown) {
      throw new DbSaveException("Something went wrong saving the ability", exception);
    }
  }

  async saveAll(object: Ability[]): Promise<void> {
    for (var ability of object) {
      await this.save(ability);
    }
  }

  delete(id: string | number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
