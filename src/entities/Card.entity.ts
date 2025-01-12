import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('card')
export class Card extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  cardNumber: string

  @Column({ nullable: true })
  nameOnCard: string

  @Column({ nullable: true })
  expDate: string

  @Column({ nullable: true })
  cvv: string
}
