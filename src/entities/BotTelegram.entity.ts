import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('bot_telegram')
export class BotTelegram extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  token: string

  @Column({ nullable: true, default: true })
  groupId: string
}
