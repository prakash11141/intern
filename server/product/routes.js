import Router from "express";
import {
  getProducts,
  getProductByID,
  addProduct,
  byCategory,
  deleteProduct,
  updateProduct,
} from "./controller.js";
const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductByID);
router.get("/category/:id", byCategory);
router.post("/", addProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export const productRoutes = router; // Named export
