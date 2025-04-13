// src/seed/seedProducts.ts
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import products from "../../data/products";
import dotenv from "dotenv";

dotenv.config();

async function seedProducts() {
  try {
    await AppDataSource.initialize();
    const repo = AppDataSource.getRepository(Product);

    console.log("🔄 Clearing old product data...");
    await repo.clear(); // ✅ Clears all records in table

    console.log("🌱 Inserting products...");
    await repo.save(products); // ✅ Insert array of products

    console.log("✅ Product seeding complete!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
}

seedProducts();
