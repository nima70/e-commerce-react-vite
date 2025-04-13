// src/seed/seedUsers.ts
import dotenv from "dotenv";
import { AppDataSource } from "../data-source";
import { User } from "../entities/Users";
import users from "../../data/users";

dotenv.config();

async function seedUsers() {
  try {
    await AppDataSource.initialize();
    const repo = AppDataSource.getRepository(User);

    console.log("🔄 Clearing old user data...");
    await repo.clear(); // Removes all users

    console.log("🌱 Inserting users...");
    await repo.save(users); // Insert users with hashed passwords

    console.log("✅ User seeding complete!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding users:", error);
    process.exit(1);
  }
}

seedUsers();
