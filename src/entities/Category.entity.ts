import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('category')
export class Category extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}