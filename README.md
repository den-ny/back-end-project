Base url: https://cat-co.herokuapp.com/api
## Routes
### Product
`/products/all` 
- returns all product

`/products/:id`
- return product by id 

`/products?name=bed` 
- returns all products with bed in name

`/products/?cat=food`
- will return all food in product category

`/products/?cat=food&name=bed`
- wil return all categories in food and any products with bed
### Product Categories
`/category/all`
- will return all categories in store

`/category?name=furniture`
- will return all furniture categories

### Cart
`GET /cart`
- will return all items current in the cart

`POST /cart`
- will add new item to cart schema

```
({
  "productNumber": productNumber,
  "productName": productName,
  "photoSrc": photoSrc,
  "price": price,
  "quantity": 1,
  "totalPrice": price
})
```

`PUT /cart`
- will find productNumber and increment or decrement the quantity of item
```
Cart.findOneAndUpdate (
  { "productNumber": productNumber },
    { "quantity": quantity,
      "totalPrice": price * quantity }
)
```

`DELETE /cart`
- will attempt to locate the product in the Cart Schema and delete matching item
