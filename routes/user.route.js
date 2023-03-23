const { Router } = require("express");
const user = require("../controllers/user.controller");
const auth = require("../middleware/auth");

const route = Router();

route.get("/user", auth, user.getAll);
route.post("/user", user.register);
route.post("/user/login", user.login);

// route.post("/user", user.register);
// route.post("/login", user.login);
// route.post("/userall", auth, user.getAll);

module.exports = route;
