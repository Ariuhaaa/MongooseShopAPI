const { Router } = require("express");
const menu = require("../controllers/menu.controller");
const auth = require("../middleware/auth");

const route = Router();

route.get("/menu", auth, menu.getAll);
route.get("/menu", auth, menu.getOne);
route.post("/menu", auth, menu.createMenu);
route.put("/menu/:id", auth, menu.updateMenu);
route.delete("/menu/:id", auth, menu.deleteMenu);

module.exports = route;
