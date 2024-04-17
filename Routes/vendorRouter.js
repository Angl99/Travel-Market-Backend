const express = require('express');
const { getAllVendors } = require('../Controllers/vendorController.js');
const router = express.Router();

router.get("/", getAllVendors);

module.exports = vendorRouter;