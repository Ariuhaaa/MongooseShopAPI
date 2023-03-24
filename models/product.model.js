const { default: mongoose, Schema } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // id:
    categoryId: { type: Schema.Types.ObjectId, ref: "" },
    productName: {
      type: String,
    },
    price: Number,
    salePercent: Number,
    quantityInStock: Number,
    description: String,
    image: [String],
    thumbImage: String,
  },
  { collection: "product", timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

//id, categoryId, productName, price, salePercent, quantity, description, image, thumbImage
