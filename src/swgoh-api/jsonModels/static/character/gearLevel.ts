import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "../../baseModel";
import { Character } from "./character";

@Entity({ name: "GearLevel" })
export class GearLevel extends BaseModel {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;
  @ManyToOne(() => Character, (character) => character.gear_levels)
  // @JoinColumn([{ name: "character_id", referencedColumnName: "base_id" }])
  character_base_id: string;
  @Column({ name: "Tier" })
  tier: number;
  @Column({ name: "Gear", type: "simple-array" })
  gear: string[];
}
