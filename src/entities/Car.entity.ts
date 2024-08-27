import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { File } from "./File.entity.js";
import { Category } from "./Category.entity.js";

@Entity('car')
export class Car extends File {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  manufactureYear: number

  @Column({ nullable: true })
  subTitle: string

  @Column({ nullable: true })
  shortTitle: string

  @Column({ nullable: true })
  price: number

  @Column({ nullable: true })
  color: string

  @Column({ nullable: true })
  location: string

  @Column({ nullable: true })
  seller: string

  @Column({ nullable: true })
  sellerType: string

  @Column({ nullable: true })
  lot: string

  @Column({ nullable: true })
  vehicleMake: string

  @Column({ nullable: true })
  interiorName: string

  @Column({ nullable: true })
  exteriorName: string

  @Column({ type: "longtext", nullable: true })
  description: string

  @Column({ nullable: true })
  video: string

  @Column({ nullable: true, default: 0 })
  auctionViews: number

  @Column({ nullable: true, default: 0 })
  watching: number

  @ManyToOne(() => Category)
  @JoinColumn()
  category: Relation<Category>

  @Column()
  categoryId: Relation<Category>
}
