// src/entities/Product.ts
import {
  Entity,
  ObjectIdColumn,
  ObjectId,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  image!: string;

  @Column()
  description!: string;

  @Column()
  brand!: string;

  @Column()
  category!: string;

  @Column("double") // Use 'double' for decimal values in Mongo
  price!: number;

  @Column()
  countInStock!: number;

  @Column("double")
  rating!: number;

  @Column()
  numReviews!: number;
}
