import { BaseModel } from "../../baseModel";
import { Tier } from "./tier";
export class Datacron extends BaseModel {
  id: string;
  set_id: number;
  template_base_id: string;
  reroll_count: number;
  reroll_index: number;
  locked: boolean;
  tier: number;
  tiers: Tier[];
  url: string;
}
