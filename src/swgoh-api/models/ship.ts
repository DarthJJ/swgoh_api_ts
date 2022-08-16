import { BaseModel } from "./baseModel.js";

export class Ship extends BaseModel {
  private _name: string;
  private _base_id: string;
  private _url: string;
  private _image: string;
  private _power: number;
  private _description: string;
  private _combat_tpe: number;
  private _alignment: string;
  private _categories: string[];
  private _ability_classes: string[];
  private _role: string;
  private _capital_ship: boolean;
  private _active_shard_count: number;

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
   * Getter combat_tpe
   * @return {number}
   */
  public get combat_tpe(): number {
    return this._combat_tpe;
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
   * Getter active_shard_count
   * @return {number}
   */
  public get active_shard_count(): number {
    return this._active_shard_count;
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
   * Setter combat_tpe
   * @param {number} value
   */
  public set combat_tpe(value: number) {
    this._combat_tpe = value;
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
   * Setter active_shard_count
   * @param {number} value
   */
  public set active_shard_count(value: number) {
    this._active_shard_count = value;
  }
}
