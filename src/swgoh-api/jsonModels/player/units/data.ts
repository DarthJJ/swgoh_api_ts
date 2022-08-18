import { BaseModel } from "../../baseModel";
import { Gear } from "./gear";
import { Ability } from "./ability";
export class Data extends BaseModel {
  base_id: string;
  name: string;
  gear_level: number;
  level: number;
  power: number;
  rarity: number;
  gear: Gear[];
  url: string;
  stats: string[];
  stat_diffs: string[];
  zeta_abilitites: string[];
  omicron_abilities: string[];
  ability_data: Ability[];
  mod_set_ids: string[];
  combat_type: number;
  relic_tier: number;
  has_ultimate: boolean;
  is_galactic_legend: boolean;
}
