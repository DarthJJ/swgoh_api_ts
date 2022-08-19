import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";

@Entity("PlayerShips")
export class PlayerShip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "BaseId" })
  baseId: string;

  @ManyToOne(() => Profile, (profile) => profile.ships, { eager: true })
  profile: Profile;
}
