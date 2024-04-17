import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProduct = async (req, res) => {
  const { id, vendor, name, description, price, image } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        id: id,
        vendorId: { connect: { id: parseInt(vendorId) } },
        name: name,
        description: description,
        price: price,
        image: image,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    console.error("Couldn't create product:", error);
    res.status(500).send("Unable to create a product.");
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const singleProduct = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(singleProduct);
  } catch (error) {
    console.error("Couldn't find a product with that ID:", error);
    res.status(500).send("Unable to find product.");
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await prisma.product.findMany();
    res.status(200).json(allProducts);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).send("Unable to find products.");
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image } = req.body;

  try {
    const updProduct = await prisma.product.update({
      where: {
        vendor: { connect: { id: parseInt(vendorId) } }
      },

      data: {
        name: name,
        description: description,
        price: price,
        image: image,
      },
    });
    res.status(200).json(updProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    if (error.code === "P2025") {
      res.status(404).send("Product not found.");
    } else {
      res.status(500).send("Unable to update product");
    }
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        vendor: { connect: { id: parseInt(vendorId) } },
      },
    });
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
    if (error.code === "P2025") {
      res.status(404).send("Product not found.");
    } else {
      res.status(500).send("Unable to delete product");
    }
  }
};

export {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
