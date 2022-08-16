import { BaseModel } from "../../baseModel";
export class Tier extends BaseModel {
  scope_identifier: number;
  scope_icon: string;
  scope_target_name: string;
  target_rule_id: string;
  ability_id: string;
  stat_type: number;
  stat_value: number;
  required_unit_tier: number;
  required_relic_tier: number;
  ability_description: string;
}
