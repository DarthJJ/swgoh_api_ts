import { iDao } from "./iDao";
import { Profile } from "../models/profile";
import { Repository } from "typeorm";
import { DbSaveException } from "../exceptions/dbSaveException";
import { DbRetrieveException } from "../exceptions/dbRetrieveException";

export class ProfileDao implements iDao<Profile> {
  private readonly _database: Repository<Profile>;

  constructor(database: Repository<Profile>) {
    this._database = database;
  }

  async getById(id: number): Promise<Profile> {
    try {
      // return await this._database.createQueryBuilder("profile").leftJoinAndSelect("profile.characters", "character").where("Allycode = :id", { id }).getOne();
      return await this._database.findOne({
        where: { allycode: id },
        relations: {
          characters: true,
          ships: true,
        },
      });
    } catch (exception: unknown) {
      throw new DbRetrieveException("Something went wrong retrieving the profile", exception);
    }
  }
  async save(object: Profile): Promise<void> {
    try {
      await this._database.save(object);
    } catch (exception: unknown) {
      throw new DbSaveException("Something went wrong saving the profile", exception);
    }
  }
  async saveAll(object: Profile[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string | number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async exists(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
