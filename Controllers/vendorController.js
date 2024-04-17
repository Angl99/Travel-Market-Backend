const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();
//see all vendors

const VendorController = {
    getAllVendors: async (req, res) => {
      try {
        const vendors = await prisma.vendor.findMany({
          include: {
            user: true, // Include user details for each vendor
            locale: true, // Include vendor location details (assuming Locale model exists)
          },
        });
        res.json(vendors);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching vendors' });
      }
    },
  };
  
  module.exports = { getAllVendors };


//see vendors by id
//create vendor
//update vendor by id
//delete vendor by id