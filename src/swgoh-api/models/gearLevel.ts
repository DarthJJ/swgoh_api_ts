import { BaseModel } from "./baseModel";

export class GearLevel extends BaseModel {
  private _tier: number;
  private _gear: string[];

  /**
   * Getter tier
   * @return {number}
   */
  public get tier(): number {
    return this._tier;
  }

  /**
   * Getter gear
   * @return {string[]}
   */
  public get gear(): string[] {
    return this._gear;
  }

  /**
   * Setter tier
   * @param {number} value
   */
  public set tier(value: number) {
    this._tier = value;
  }

  /**
   * Setter gear
   * @param {string[]} value
   */
  public set gear(value: string[]) {
    this._gear = value;
  }
}
