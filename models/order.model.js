const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderDetail: [{ productId: String, amount: Number, currentPrice: Number }],
    userId: String,
    price: Number,
    orderStatus: { type: String, enum: ["Shipping", "Confirmed", "Delivered"] },
  },
  { collection: "order" }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
