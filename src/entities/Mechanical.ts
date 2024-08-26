import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Car } from "./Car.entity.js";
import { File } from "./File.entity.js";

@Entity("mechanical")
export class Mechanical extends File {
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
