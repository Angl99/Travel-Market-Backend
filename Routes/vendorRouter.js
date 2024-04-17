import express from 'express'
import { getAllVendors, createVendor, getVendorById, updateVendorById  } from '../Controllers/vendorController.js';
const router = express.Router();

router.get("/", getAllVendors); // sell all vendors
router.get("/:id", getVendorById); //get vendor by id
router.post("/", createVendor); //create vendor
router.put("/:id", updateVendorById);  //update vendor


export default router