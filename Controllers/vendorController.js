import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
//see all vendors


    const getAllVendors = async (req, res) => {
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
    }
 

    //see vendors by id


//create vendor
const createVendor = async (req, res) => {
    const { userId, shopName, user,  locale_id } = req.body; // Extract data from request body
  
    try {
      const vendor = await prisma.vendor.create({
        data: {
          userId,
          shopName,
          user, 
          locale_id 
        //   locale: { connect: { id: localeId } }, // Connect to existing locale
        },
      });
      res.json(vendor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating vendor' });
    }
  };
  


//see vendors by id

const getVendorById = async (req, res) => {
  const vendorId = parseInt(req.params.id); // Extract vendor ID from URL params

  try {
    const vendor = await prisma.vendor.findUnique({
      where: { id: vendorId },
      include: {
        user: true,
        locale: true, 
      },
    });
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching vendor' });
  }
};

//update vendor by id

const updateVendorById = async (req, res) => {
    const vendorId = parseInt(req.params.id); // Extract vendor ID from URL params
    const { userId, shopName, localeId } = req.body; // Extract update data from request body
  
    try {
      const updatedVendor = await prisma.vendor.update({
        where: { id: vendorId },
        data: {
          userId, // Update fields if provided
          shopName,
          locale: { connect: { id: localeId } }, // Update locale if provided
        },
      });
      if (!updatedVendor) {
        return res.status(404).json({ message: 'Vendor not found' });
      }
      res.json(updatedVendor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating vendor' });
    }
  };

//delete vendor by id
const deleteVendorById = async (req, res) => {
  const vendorId = parseInt(req.params.id); // Extract vendor ID from URL params

  try {
    const deletedVendor = await prisma.vendor.delete({ where: { id: vendorId } });
    if (!deletedVendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting vendor' });
  }
};

export { getAllVendors, createVendor, getVendorById, updateVendorById   };