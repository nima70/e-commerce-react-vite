// src/types/express/index.d.ts
import { User } from "@/entities/Users";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
