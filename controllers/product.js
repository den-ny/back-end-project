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

export const searchProducts = async (req, res) => {
  try {
    const { name } = req.query;
    const { cat } = req.query;
    const search = await Product.find({
      $or: [
        { productName: { "$regex": `${name}`, "$options": "i" } },
        { category: { $regex: `${cat}`, $options: "i" } }
      ]
    })
    if (search.length === 0) {
      return res.json("Product not found")
    }
    else
      return res.send(search)
  } catch (error) {
    console.error(error)
    res.json(error)
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
      res.json("Product does not exist")
    }
  } catch (error) {
    console.error(error)
    res.json(error)
  }
}