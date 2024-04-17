import express from 'express'
import { createProduct, getSingleProduct, getAllProducts, updateProduct, deleteProduct } from "../controllers/productController.js"

const router = express.Router()

router.post("/", createProduct)
router.get("/", getAllProducts)
router.get("/:id", getSingleProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router