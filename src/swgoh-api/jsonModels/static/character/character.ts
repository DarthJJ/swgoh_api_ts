import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { BaseModel } from "../../baseModel";
import { GearLevel } from "./gearLevel";
import { Ability } from "../shared/ability";

@Entity()
export class Character extends BaseModel {
  @PrimaryColumn()
  base_id: string;
  @Column()
  name: string;
  @Column()
  pk: number;
  @Column()
  url: string;
  @Column()
  image: string;
  @Column()
  power: number;
  @Column()
  description: string;
  @Column()
  combat_type: number;
  @OneToMany(() => GearLevel, (gearLevel) => gearLevel.character_base_id, { cascade: true })
  gear_levels: GearLevel[];
  @Column()
  alignment: string;
  @Column({ type: "simple-array" })
  categories: string[];
  @Column({ type: "simple-array" })
  ability_classes: string[];
  @Column()
  role: string;
  @Column({ nullable: true })
  ship: string;
  @Column({ nullable: true })
  ship_slot: string;
  @Column()
  activate_shard_count: number;
  @OneToMany(() => Ability, (ability) => ability.character_base_id, { cascade: true })
  abilities: Ability[];
}
