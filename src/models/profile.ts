import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { PlayerCharacter } from "./playerCharacter";
import { PlayerShip } from "./playerShip";

@Entity("Profile")
export class Profile {
  @PrimaryColumn()
  allycode: number;
  @OneToMany(() => PlayerCharacter, (playerCharacter) => playerCharacter.profileAllycode, { cascade: true })
  characters: PlayerCharacter[];
  @OneToMany(() => PlayerShip, (playerShip) => playerShip.profileAllycode, { cascade: true })
  ships: PlayerShip[];

  public init() {
    this.characters = [];
    this.ships = [];
  }
}
