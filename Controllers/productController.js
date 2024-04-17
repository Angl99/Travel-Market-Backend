import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

 const getAllProducts = async (req,res) => {
    const allProducts = await prisma.product.findMany()
    res.json(allProducts)
}

export {getAllProducts}
