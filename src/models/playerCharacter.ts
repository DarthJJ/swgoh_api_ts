import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";

@Entity("PlayerCharacters")
export class PlayerCharacter {
  @PrimaryGeneratedColumn()
  private _id: number;

  @Column({ name: "BaseId" })
  private _baseId: string;

  @ManyToOne(() => Profile, (profile) => profile.characters)
  @JoinColumn({ name: "profileAllycode" })
  private _profile: Profile;

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
   * Getter $profile
   * @return {Profile}
   */
  public get profile(): Profile {
    return this._profile;
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
   * Setter $profile
   * @param {Profile} value
   */
  public set profile(value: Profile) {
    this._profile = value;
  }
}
