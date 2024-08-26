import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Car } from "./Car.entity.js";
import { Base } from "./Base.entity.js";

@Entity("video")
export class Video extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column()
  carId: Relation<Car>

  @ManyToOne(() => Car, car => car)
  @JoinColumn()
  car: Relation<Car>
}
