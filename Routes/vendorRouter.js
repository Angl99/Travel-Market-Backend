import express from 'express'
import { getAllVendors } from '../Controllers/vendorController.js';
const router = express.Router();

router.get("/", getAllVendors);

export default router