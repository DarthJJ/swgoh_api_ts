import { Player } from "../swgoh-api/jsonModels/player/player";
import { Profile } from "./profile";
import { Data } from "../swgoh-api/jsonModels/player/data/data";
import { Unit } from "../swgoh-api/jsonModels/player/units/unit";
import { DatabaseManager } from "../database/databaseManager";
import { PlayerCharacter } from "./playerCharacter";
import { PlayerShip } from "./playerShip";

export class ModelConverter {
  private _database: DatabaseManager;
  constructor(database: DatabaseManager) {
    this._database = database;
  }
  public async convert(input: Player): Promise<Profile> {
    const profile: Profile = new Profile();
    profile.init();
    this.convertData(input.data, profile);
    await this.convertUnits(input.units, profile);
    return profile;
  }

  private convertData(input: Data, output: Profile): void {
    output.allycode = input.ally_code;
  }

  private async convertUnits(input: Unit[], output: Profile): Promise<void> {
    for (const unit of input) {
      if (await this._database.isCharacter(unit.data.base_id)) {
        const converted = this.convertCharacter(unit);
        converted.profile = output;
        output.characters.push(converted);
        continue;
      }
      if (await this._database.isShip(unit.data.base_id)) {
        const converted = this.convertShip(unit);
        converted.profile = output;
        output.ships.push(converted);
        continue;
      }
    }
  }

  private convertShip(input: Unit): PlayerShip {
    const ship: PlayerShip = new PlayerShip();
    ship.baseId = input.data.base_id;
    return ship;
  }

  private convertCharacter(input: Unit): PlayerCharacter {
    const character: PlayerCharacter = new PlayerCharacter();
    character.baseId = input.data.base_id;
    return character;
  }
}
