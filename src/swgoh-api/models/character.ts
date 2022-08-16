import { BaseModel } from "./baseModel.js";
import { GearLevel } from "./gearLevel.js";

export class Character extends BaseModel {
  private _name: string;
  private _base_id: string;
  private _pk: number;
  private _url: string;
  private _image: string;
  private _power: number;
  private _description: string;
  private _combat_type: number;
  private _gear_level: GearLevel[];
  private _alignment: string;
  private _categories: string[];
  private _ability_classes: string[];
  private _role: string;
  private _ship: string;
  private _ship_slot: string;
  private _activate_shard_count: number;

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter base_id
   * @return {string}
   */
  public get base_id(): string {
    return this._base_id;
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
   * Getter gear_level
   * @return {GearLevel[]}
   */
  public get gear_level(): GearLevel[] {
    return this._gear_level;
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
   * @return {any}
   */
  public get ship_slot(): any {
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
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter base_id
   * @param {string} value
   */
  public set base_id(value: string) {
    this._base_id = value;
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
   * Setter gear_level
   * @param {GearLevel[]} value
   */
  public set gear_level(value: GearLevel[]) {
    this._gear_level = value;
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
   * @param {any} value
   */
  public set ship_slot(value: any) {
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
