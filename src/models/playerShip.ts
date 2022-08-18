import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Profile } from "./profile";

@Entity("PlayerShips")
export class PlayerShip {
  @PrimaryGeneratedColumn()
  private _id: number;

  @Column({ name: "BaseId" })
  private _baseId: string;

  @ManyToOne(() => Profile, (profile) => profile.allycode, { eager: true })
  @JoinColumn({ name: "profileAllycode", foreignKeyConstraintName: "FK_profileAllycodeShip" })
  private _profileAllycode: number;

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter baseId
   * @return {string}
   */
  public get baseId(): string {
    return this._baseId;
  }

  /**
   * Getter profileAllycode
   * @return {number}
   */
  public get profileAllycode(): number {
    return this._profileAllycode;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter baseId
   * @param {string} value
   */
  public set baseId(value: string) {
    this._baseId = value;
  }

  /**
   * Setter profileAllycode
   * @param {number} value
   */
  public set profileAllycode(value: number) {
    this._profileAllycode = value;
  }
}
