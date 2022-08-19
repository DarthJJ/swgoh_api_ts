import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { BaseModel } from "../../baseModel";
import { Character } from "../character/character";
import { Ship } from "../ship/ship";

@Entity()
export class Ability extends BaseModel {
  @PrimaryColumn()
  base_id: string;
  @Column()
  name: string;
  @Column()
  image: string;
  @Column({ nullable: true })
  url: string;
  @Column()
  tier_max: number;
  @Column()
  is_zeta: boolean;
  @Column()
  is_omega: boolean;
  @Column()
  is_omicron: boolean;
  @Column({ type: "longtext" })
  description: string;
  @Column()
  combat_type: number;
  @Column({ nullable: true })
  omicron_mode: number;
  @Column({ nullable: true })
  type: number;
  @ManyToOne(() => Character, (character) => character.abilities, { nullable: true })
  character_base_id: string;
  @ManyToOne(() => Ship, (ship) => ship.abilities, { nullable: true })
  ship_base_id: string;
  @Column({ type: "simple-array" })
  omicron_battle_types: string[];
}
