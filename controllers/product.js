import Product from "../models/product.js"

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    console.error(error)
    res.json(error.message)
  }
}

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findOne({
      productNumber: id

    })
    if (product) {
      return res.json(product)
    }
    else {
      res.send("Product does not exist")
    }
  } catch (error) {
    console.error(error)
    res.json(error)
  }
}

