import { BaseModel } from "../../baseModel";
import { Primary_Stat } from "./primary_stat";
import { Secondary_Stat } from "./secondary_stat";
export class Mod extends BaseModel {
  id: string;
  level: number;
  tier: number;
  rarity: number;
  set: number;
  slot: number;
  primary_stat: Primary_Stat;
  character: string;
  secondary_stats: Secondary_Stat[];
}
