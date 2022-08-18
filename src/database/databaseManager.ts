import { DataSource } from "typeorm";
import { CharacterDao } from "../Daos/characterDao";
import { Character } from "../swgoh-api/jsonModels/static/character/character";
import { ShipDao } from "../Daos/shipDao";
import { Ship } from "../swgoh-api/jsonModels/static/ship/ship";
import { AbilityDao } from "../Daos/abilityDao";
import { Ability } from "../swgoh-api/jsonModels/static/shared/ability";
import { ProfileDao } from "../Daos/profileDao";
import { Profile } from "../models/profile";

export class DatabaseManager {
  private _database: DataSource;
  private characterDao: CharacterDao;
  private shipDao: ShipDao;
  private abilityDao: AbilityDao;
  private profileDao: ProfileDao;
  constructor(database: DataSource) {
    this._database = database;
    this.characterDao = new CharacterDao(this._database.getRepository(Character));
    this.shipDao = new ShipDao(this._database.getRepository(Ship));
    this.abilityDao = new AbilityDao(this._database.getRepository(Ability));
    this.profileDao = new ProfileDao(this._database.getRepository(Profile));
  }

  public async isCharacter(baseId: string): Promise<boolean> {
    return await this.characterDao.exists(baseId);
  }

  public async isShip(baseId: string): Promise<boolean> {
    return await this.shipDao.exists(baseId);
  }

  public get Profiles() {
    return this.profileDao;
  }

  public get Characters() {
    return this.characterDao;
  }

  public get Ships() {
    return this.shipDao;
  }

  public get Ability() {
    return this.abilityDao;
  }
}
