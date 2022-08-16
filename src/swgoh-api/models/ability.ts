import { BaseModel } from "./baseModel.js";

export class Ability extends BaseModel {
  private _base_id: string;
  private _name: string;
  private _image: string;
  private _url: string;
  private _tier_max: number;
  private _is_zeta: boolean;
  private _is_omega: boolean;
  private _is_omicron: boolean;
  private _description: string;
  private _combat_type: number;
  private _omicron_mode: number;
  private _type: number;
  private _character_base_id: string;
  private _ship_base_id: string;
  private _omicron_battle_types: string[];

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
   * Getter image
   * @return {string}
   */
  public get image(): string {
    return this._image;
  }

  /**
   * Getter url
   * @return {string}
   */
  public get url(): string {
    return this._url;
  }

  /**
   * Getter tier_max
   * @return {number}
   */
  public get tier_max(): number {
    return this._tier_max;
  }

  /**
   * Getter is_zeta
   * @return {boolean}
   */
  public get is_zeta(): boolean {
    return this._is_zeta;
  }

  /**
   * Getter is_omega
   * @return {boolean}
   */
  public get is_omega(): boolean {
    return this._is_omega;
  }

  /**
   * Getter is_omicron
   * @return {boolean}
   */
  public get is_omicron(): boolean {
    return this._is_omicron;
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
   * Getter omicron_mode
   * @return {number}
   */
  public get omicron_mode(): number {
    return this._omicron_mode;
  }

  /**
   * Getter type
   * @return {number}
   */
  public get type(): number {
    return this._type;
  }

  /**
   * Getter character_base_id
   * @return {string}
   */
  public get character_base_id(): string {
    return this._character_base_id;
  }

  /**
   * Getter ship_base_id
   * @return {string}
   */
  public get ship_base_id(): string {
    return this._ship_base_id;
  }

  /**
   * Getter omicron_battle_types
   * @return {string[]}
   */
  public get omicron_battle_types(): string[] {
    return this._omicron_battle_types;
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
   * Setter image
   * @param {string} value
   */
  public set image(value: string) {
    this._image = value;
  }

  /**
   * Setter url
   * @param {string} value
   */
  public set url(value: string) {
    this._url = value;
  }

  /**
   * Setter tier_max
   * @param {number} value
   */
  public set tier_max(value: number) {
    this._tier_max = value;
  }

  /**
   * Setter is_zeta
   * @param {boolean} value
   */
  public set is_zeta(value: boolean) {
    this._is_zeta = value;
  }

  /**
   * Setter is_omega
   * @param {boolean} value
   */
  public set is_omega(value: boolean) {
    this._is_omega = value;
  }

  /**
   * Setter is_omicron
   * @param {boolean} value
   */
  public set is_omicron(value: boolean) {
    this._is_omicron = value;
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
   * Setter omicron_mode
   * @param {number} value
   */
  public set omicron_mode(value: number) {
    this._omicron_mode = value;
  }

  /**
   * Setter type
   * @param {number} value
   */
  public set type(value: number) {
    this._type = value;
  }

  /**
   * Setter character_base_id
   * @param {string} value
   */
  public set character_base_id(value: string) {
    this._character_base_id = value;
  }

  /**
   * Setter ship_base_id
   * @param {string} value
   */
  public set ship_base_id(value: string) {
    this._ship_base_id = value;
  }

  /**
   * Setter omicron_battle_types
   * @param {string[]} value
   */
  public set omicron_battle_types(value: string[]) {
    this._omicron_battle_types = value;
  }
}
