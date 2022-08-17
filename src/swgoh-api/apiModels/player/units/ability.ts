import { BaseModel } from "../../baseModel";
export class Ability extends BaseModel {
  id: string;
  ability_tier: number;
  is_omega: boolean;
  is_zeta: boolean;
  is_omicron: boolean;
  has_omicron_learned: boolean;
  has_zeta_learned: boolean;
  name: string;
  tier_max: number;
}
