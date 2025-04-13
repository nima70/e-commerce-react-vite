import { Router } from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

export default router;
