import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { BaseModel } from "../../baseModel";
import { Ability } from "../shared/ability";

@Entity("Ships")
export class Ship extends BaseModel {
  @PrimaryColumn({ name: "BaseId" })
  private _base_id: string;
  @Column({ name: "Name" })
  private _name: string;
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
  @Column({ name: "Alignment" })
  private _alignment: string;
  @Column({ name: "Categories", type: "simple-array" })
  private _categories: string[];
  @Column({ name: "AbilityClasses", type: "simple-array" })
  private _ability_classes: string[];
  @Column({ name: "Role" })
  private _role: string;
  @Column({ name: "CapitalShip" })
  private _capital_ship: boolean;
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
   * Getter capital_ship
   * @return {boolean}
   */
  public get capital_ship(): boolean {
    return this._capital_ship;
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
   * Setter capital_ship
   * @param {boolean} value
   */
  public set capital_ship(value: boolean) {
    this._capital_ship = value;
  }

  /**
   * Setter activate_shard_count
   * @param {number} value
   */
  public set activate_shard_count(value: number) {
    this._activate_shard_count = value;
  }
}
