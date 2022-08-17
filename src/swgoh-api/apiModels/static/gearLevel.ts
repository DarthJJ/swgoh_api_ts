import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "../baseModel";
import { Character } from "./character";

@Entity({ name: "GearLevel" })
export class GearLevel extends BaseModel {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;
  @ManyToOne(() => Character, (character) => character.gear_levels, { eager: true })
  @JoinColumn([{ name: "character_id", referencedColumnName: "_base_id" }])
  character: Character;
  @Column({ name: "Tier" })
  tier: number;
  @Column({ name: "Gear", type: "simple-array" })
  gear: string[];
}
