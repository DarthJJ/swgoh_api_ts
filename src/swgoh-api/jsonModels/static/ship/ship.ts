import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { BaseModel } from "../../baseModel";
import { Ability } from "../shared/ability";

@Entity("Ships")
export class Ship extends BaseModel {
  @PrimaryColumn()
  base_id: string;
  @Column()
  name: string;
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
  @Column()
  alignment: string;
  @Column({ type: "simple-array" })
  categories: string[];
  @Column({ type: "simple-array" })
  ability_classes: string[];
  @Column()
  role: string;
  @Column()
  capital_ship: boolean;
  @Column()
  activate_shard_count: number;
  @OneToMany(() => Ability, (ability) => ability.ship_base_id, { cascade: true })
  abilities: Ability[];
}
