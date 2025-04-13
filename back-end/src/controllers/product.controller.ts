import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import { ObjectId } from "mongodb";
import asyncHandler from "../middleware/asyncHandler";
const productRepo = AppDataSource.getRepository(Product);

export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const products = await productRepo.find();
    res.json(products);
  }
);

export const getProductById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id);
    const product = await productRepo.findOneBy({ id });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  }
);
