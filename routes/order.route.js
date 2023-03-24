const { Router } = require("express");
const order = require("../controllers/order.controller");
const auth = require("../middleware/auth");

const route = Router();

route.get("/order", auth, order.getAll);
route.get("/order", auth, order.getOne);
route.post("/order", auth, order.createOrder);
route.put("/order/:id", auth, order.updateOrder);
route.delete("/order/:id", auth, order.deleteOrder);

module.exports = route;
