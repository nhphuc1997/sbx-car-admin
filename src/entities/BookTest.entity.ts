import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Car } from "./Car.entity.js";

@Entity('book_test')
export class BookTest extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user: string

  @Column()
  phoneNumber: string

  @Column()
  code: string

  @Column({ type: "datetime", default: () => 'NOW()' })
  date: Date

  @ManyToOne(() => Car)
  @JoinColumn()
  car: Relation<Car>

  @Column()
  carId: Relation<Car>
}
