import { BaseModel } from "../../baseModel";
export class Arena extends BaseModel {
  rank: number;
  leader: string;
  members: string[];
}
