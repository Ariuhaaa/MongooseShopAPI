const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const categoryRoute = require("./routes/category.route");
const menuRoute = require("./routes/menu.route");
const productRoute = require("./routes/product.route");
const userRoute = require("./routes/user.route");
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err));

// app.use("/api", foodRoute);
app.use("/api", categoryRoute);
app.use("/api", userRoute);
app.use("/api", menuRoute);
app.use("/api", productRoute);

app.get("/api", (req, res) => {
  res.json("Welcome to API");
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});
