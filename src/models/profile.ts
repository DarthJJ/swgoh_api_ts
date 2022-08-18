import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { PlayerCharacter } from "./playerCharacter";
import { PlayerShip } from "./playerShip";

@Entity("Profile")
export class Profile {
  @PrimaryColumn({ name: "allycode" })
  allycode: number;
  @OneToMany(() => PlayerCharacter, (playerCharacter) => playerCharacter.id, { eager: true, cascade: true })
  private _characters: PlayerCharacter[];
  @OneToMany(() => PlayerShip, (playerShip) => playerShip.id, { cascade: true })
  private _ships: PlayerShip[];

  public init() {
    this._characters = [];
    this.ships = [];
  }

  // /**
  //  * Getter allycode
  //  * @return {number}
  //  */
  // public get allycode(): number {
  //   return this._allycode;
  // }

  /**
   * Getter characters
   * @return {PlayerCharacter[]}
   */
  public get characters(): PlayerCharacter[] {
    return this._characters;
  }

  /**
   * Getter ships
   * @return {PlayerShip[]}
   */
  public get ships(): PlayerShip[] {
    return this._ships;
  }

  // /**
  //  * Setter allycode
  //  * @param {number} value
  //  */
  // public set allycode(value: number) {
  //   this._allycode = value;
  // }

  /**
   * Setter characters
   * @param {PlayerCharacter[]} value
   */
  public set characters(value: PlayerCharacter[]) {
    this._characters = value;
  }

  /**
   * Setter ships
   * @param {PlayerShip[]} value
   */
  public set ships(value: PlayerShip[]) {
    this._ships = value;
  }
}
