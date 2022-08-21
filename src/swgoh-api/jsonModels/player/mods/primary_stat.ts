import { BaseModel } from "../../baseModel";
export class Primary_Stat extends BaseModel {
  name: string;
  stat_id: number; //TODO translate with /api/stat-definitions
  value: number;
  display_value: string;
}
