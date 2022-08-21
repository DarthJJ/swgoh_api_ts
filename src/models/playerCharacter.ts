import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";

@Entity("PlayerCharacters")
export class PlayerCharacter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  baseId: string;

  @ManyToOne(() => Profile, (profile) => profile.allycode)
  profileAllycode: number;
}
