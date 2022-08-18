import { Repository } from "typeorm";
import { iDao } from "./iDao";
import { Ship } from "../swgoh-api/jsonModels/static/ship/ship";
import { DbSaveException } from "../exceptions/dbSaveException";
import { DbRetrieveException } from "../exceptions/dbRetrieveException";

export class ShipDao implements iDao<Ship> {
  private readonly _database: Repository<Ship>;
  constructor(databse: Repository<Ship>) {
    this._database = databse;
  }

  async exists(id: string): Promise<boolean> {
    try {
      const data = await this.getById(id);
      return data != null;
    } catch {
      return false;
    }
  }

  async getById(id: string): Promise<Ship | null> {
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
  async save(object: Ship): Promise<void> {
    try {
      await this._database.save(object);
    } catch (exception: unknown) {
      throw new DbSaveException("Something went wrong saving the Ship", exception);
    }
  }

  async saveAll(object: Ship[]): Promise<void> {
    for (var ship of object) {
      await this.save(ship);
    }
  }

  delete(id: string | number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
