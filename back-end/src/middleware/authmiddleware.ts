import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "./asyncHandler";
import { User } from "../entities/Users";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";

const productRepo = AppDataSource.getRepository(User);
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is not defined in environment variables.");
}
const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token = req.cookies.jwt;
    console.log(token);
    console.log(JWT_SECRET);
    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);
        if (typeof decoded === "string" || !("userId" in decoded)) {
          res.status(401);
          throw new Error("Invalid token");
        }

        const user = await productRepo.findOneBy({
          id: (decoded as JwtPayload).userId,
        });
        req.user = user;
        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Not Authorized, token failed");
      }
    } else {
      res.status(401);
      throw new Error("Not Authorized, No Token");
    }
  }
);

const admin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401);
      throw new Error("Not authorized as an admin");
    }
  }
);

export { protect, admin };
