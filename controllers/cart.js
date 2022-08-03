import Cart from "../models/cart.js"

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.json(cart)
  } catch (error) {
    console.error(error);
  }
};


export const createCart = async (req, res) => {
  try {
    const { price, productNumber, productName, photoSrc } = req.body

    const cart = new Cart({
      "productNumber": productNumber,
      "productName": productName,
      "photoSrc": photoSrc,
      "price": price,
      "quantity": 1,
      "totalPrice": price
    })
    await cart.save();
    res.json(cart)
  } catch (error) {
    console.error(error);
  }
};

export const updateCart = async (req, res) => {
  try {
    // const { id } = req.params;
    const { productNumber, quantity } = req.body
    const cart = await Cart.findOneAndUpdate({ productNumber: productNumber }, {
      "quantity": quantity
    })
    cart.totalPrice *= quantity
    res.json(cart)
    //edge case quantity === 0, delete product

  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { productNumber } = req.body;
    const deleted = await Cart.findOneAndDelete(productNumber);

    if (deleted) {
      return res.status(200).send("Product deleted!");
    }
    throw new Error("Product not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};