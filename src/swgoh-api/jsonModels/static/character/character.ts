import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { BaseModel } from "../../baseModel";
import { GearLevel } from "./gearLevel";
import { Ability } from "../shared/ability";

@Entity("Characters")
export class Character extends BaseModel {
  @PrimaryColumn({ name: "BaseId" })
  private _base_id: string;
  @Column({ name: "Name" })
  private _name: string;
  @Column({ name: "PK" })
  private _pk: number;
  @Column({ name: "URL" })
  private _url: string;
  @Column({ name: "Image" })
  private _image: string;
  @Column({ name: "Power" })
  private _power: number;
  @Column({ name: "Description" })
  private _description: string;
  @Column({ name: "CombatType" })
  private _combat_type: number;
  @OneToMany(() => GearLevel, (gearLevel) => gearLevel.character, { cascade: true })
  private _gear_levels: GearLevel[];
  @Column({ name: "Alignment" })
  private _alignment: string;
  @Column({ name: "Categories", type: "simple-array" })
  private _categories: string[];
  @Column({ name: "AbilityClasses", type: "simple-array" })
  private _ability_classes: string[];
  @Column({ name: "Role" })
  private _role: string;
  @Column({ name: "Ship", nullable: true })
  private _ship: string;
  @Column({ name: "ShipSlot", nullable: true })
  private _ship_slot: string;
  @Column({ name: "ActivateShardCount" })
  private _activate_shard_count: number;
  @OneToMany(() => Ability, (ability) => ability.base_id, { nullable: true, eager: true })
  abilities: Ability[];

  /**
   * Getter base_id
   * @return {string}
   */
  public get base_id(): string {
    return this._base_id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter pk
   * @return {number}
   */
  public get pk(): number {
    return this._pk;
  }

  /**
   * Getter url
   * @return {string}
   */
  public get url(): string {
    return this._url;
  }

  /**
   * Getter image
   * @return {string}
   */
  public get image(): string {
    return this._image;
  }

  /**
   * Getter power
   * @return {number}
   */
  public get power(): number {
    return this._power;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter combat_type
   * @return {number}
   */
  public get combat_type(): number {
    return this._combat_type;
  }

  /**
   * Getter gear_levels
   * @return {GearLevel[]}
   */
  public get gear_levels(): GearLevel[] {
    return this._gear_levels;
  }

  /**
   * Getter alignment
   * @return {string}
   */
  public get alignment(): string {
    return this._alignment;
  }

  /**
   * Getter categories
   * @return {string[]}
   */
  public get categories(): string[] {
    return this._categories;
  }

  /**
   * Getter ability_classes
   * @return {string[]}
   */
  public get ability_classes(): string[] {
    return this._ability_classes;
  }

  /**
   * Getter role
   * @return {string}
   */
  public get role(): string {
    return this._role;
  }

  /**
   * Getter ship
   * @return {string}
   */
  public get ship(): string {
    return this._ship;
  }

  /**
   * Getter ship_slot
   * @return {string}
   */
  public get ship_slot(): string {
    return this._ship_slot;
  }

  /**
   * Getter activate_shard_count
   * @return {number}
   */
  public get activate_shard_count(): number {
    return this._activate_shard_count;
  }

  /**
   * Setter base_id
   * @param {string} value
   */
  public set base_id(value: string) {
    this._base_id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter pk
   * @param {number} value
   */
  public set pk(value: number) {
    this._pk = value;
  }

  /**
   * Setter url
   * @param {string} value
   */
  public set url(value: string) {
    this._url = value;
  }

  /**
   * Setter image
   * @param {string} value
   */
  public set image(value: string) {
    this._image = value;
  }

  /**
   * Setter power
   * @param {number} value
   */
  public set power(value: number) {
    this._power = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter combat_type
   * @param {number} value
   */
  public set combat_type(value: number) {
    this._combat_type = value;
  }

  /**
   * Setter gear_levels
   * @param {GearLevel[]} value
   */
  public set gear_levels(value: GearLevel[]) {
    this._gear_levels = value;
  }

  /**
   * Setter alignment
   * @param {string} value
   */
  public set alignment(value: string) {
    this._alignment = value;
  }

  /**
   * Setter categories
   * @param {string[]} value
   */
  public set categories(value: string[]) {
    this._categories = value;
  }

  /**
   * Setter ability_classes
   * @param {string[]} value
   */
  public set ability_classes(value: string[]) {
    this._ability_classes = value;
  }

  /**
   * Setter role
   * @param {string} value
   */
  public set role(value: string) {
    this._role = value;
  }

  /**
   * Setter ship
   * @param {string} value
   */
  public set ship(value: string) {
    this._ship = value;
  }

  /**
   * Setter ship_slot
   * @param {string} value
   */
  public set ship_slot(value: string) {
    this._ship_slot = value;
  }

  /**
   * Setter activate_shard_count
   * @param {number} value
   */
  public set activate_shard_count(value: number) {
    this._activate_shard_count = value;
  }
}
