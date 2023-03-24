// populate
const Order = require("../models/order.model");

exports.getAll = async (req, res) => {
  try {
    const result = await Order.find({}).populate("userId");
    // .populate({
    //   path: "orderDetails.productId",
    //   select: "productId currentPrice",
    // });
    if (result.length > 0) {
      return res.json({ status: true, result });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.getOne = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Order.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.createOrder = async (req, res) => {
  console.log(req.body);

  const result = await Order.create(req.body);
  res.json({ status: true, result });
};

exports.updateOrder = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Order.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.deleteOrder = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Order.deleteOne({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
