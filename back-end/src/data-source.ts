// src/data-source.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";
import { User } from "./entities/Users";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_PORT, MONGO_DB } =
  process.env;

export const AppDataSource = new DataSource({
  type: "sqlite", // ✅ Switch to SQLite
  database: "db.sqlite", // ✅ File name for local DB
  synchronize: true, // ✅ Auto-create tables (OK for dev)
  logging: true, // ✅ Logs SQL queries
  entities: [Product, User], // ✅ Include your entities
});
