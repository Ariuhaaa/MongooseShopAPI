const { Router } = require("express");
const product = require("../controllers/product.controller");
const auth = require("../middleware/auth");

const route = Router();

route.get("/product", auth, product.getAll);
route.get("/product", auth, product.getOne);
route.post("/product", auth, product.createProduct);
route.put("/product/:id", auth, product.updateProduct);
route.delete("/product/:id", auth, product.deleteProduct);

module.exports = route;
