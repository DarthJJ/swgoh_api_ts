import { BaseModel } from "../baseModel";
import { Data } from "./data/data";
import { Datacron } from "./datacrons/datacron";
import { Mod } from "./mods/mod";
import { Unit } from "./units/unit";

export class Player extends BaseModel {
  units: Unit[];
  mods: Mod[];
  datacrons: Datacron[];
  data: Data;
}
