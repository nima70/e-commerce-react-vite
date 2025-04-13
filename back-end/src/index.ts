import "module-alias/register";
import express, { Express, Request, Response } from "express";
import productRoutes from "./routes/product.route";
import { AppDataSource } from "./data-source";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.route";
import cookieParser from "cookie-parser";
export interface testRequest {
  id: string;
}

dotenv.config();
const app: Express = express();
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:3001", // ✅ Vite dev server
    credentials: true, // ✅ if you ever use cookies/auth headers
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/users", userRoutes);
app.use("/products", productRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Data Source has been initialized!");
    app.listen(port, () =>
      console.log(`🚀 Server at http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.error("❌ Error during Data Source initialization:", err);
  });
console.log("test2");
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
