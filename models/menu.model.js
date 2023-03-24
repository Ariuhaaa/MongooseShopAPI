const { default: mongoose } = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    menuName: {
      type: String,
    },
    link: String,
    position: String,
  },
  { collection: "menu" }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;

// id, menuName, link, position
