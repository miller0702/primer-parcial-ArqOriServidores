import { Router } from "express";
import {
  getAll,
  postProducto,
  updateProducto,
  deleteProducto,
  getProducto,
} from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  postProductoValidator,
  updateProductoValidator,
  deleteProductoValidator,
} from "../validators/producto.validator.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getProducto);
router.post("/", validate(postProductoValidator), postProducto);
router.put("/:id", validate(updateProductoValidator), updateProducto);
router.delete("/:id", validate(deleteProductoValidator), deleteProducto);

export default router;