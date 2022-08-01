import Store from "../models/store.js"

export const getInventory = async (req, res) => {
  try {
    const products = await Store.find()
    res.json(products)
  } catch (error) {
    console.error(error)
    res.json(error.message)
  }
}

export const getCategory = async (req, res) => {
  try {
    const { name } = req.query;

    const search = await Store.find({
      $or: [
        { category: { "$regex": `${name}`, "$options": "i" } },
      ]
    })
    if (search.length === 0) {
      return res.send("Category not found")
    }
    else
      return res.send(search)
  } catch (error) {
    console.error(error)
    res.json(error.message)
  }

}
