import express from 'express'
import { createProduct, getSingleProduct, getAllProducts, updateProduct, deleteProduct } from "../controllers/productController.js"

const router = express.Router()

router.post("/create", createProduct)
router.get("/", getAllProducts)
router.get("/product", getSingleProduct)
router.put("/update", updateProduct)
router.delete("/remove", deleteProduct)

export default router