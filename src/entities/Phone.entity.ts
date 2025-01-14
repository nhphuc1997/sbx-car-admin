/* eslint-disable indent */
import {
  Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

import { File } from './File.entity.js';

@Entity('phones')
export class Phones extends File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  categoryName: string;

  @Column()
  price: string;

  @Column()
  description: string;
}
