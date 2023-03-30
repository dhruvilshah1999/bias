const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryCreatorId: {
      type: String,
    },
    // Inventory Details
    itemName: {
      type: String,
      required: [true, "Item name is required"],
    },
    itemCategory: {
      type: String,
      required: [true, "Item Category is required"],
    },
    manuDate: {
        type: Date,
        required: [true, "Manufacturing date is required"],
    },
    manuCmp: {
        type: String,
        required: [true, "Manufacturer or Company Name is required"],
    },
    expDate: {
        type: Date,
    },
    dealersFName: {
      type: String,
      required: [true, "Dealers First Name is required"],
    },
    dealersLName: {
      type: String,
      required: [true, "Dealers Last Name is required"],
    },
    dealersCntNum: {
      type: String,
      required: [true, "Dealers Contact Number is required"],
    },
    dealersEmail: {
      type: String,
      required: [true, "Dealers Email Address is require"],
    },
    dealersCmpName: {
      type: String,
      required: [true, "Dealers Company Name is require"],
    },
    dealersCmpAdd: {
      type: String,
      required: [true, "Dealers Company Address is require"],
    },
    buyPrice: {
        type: Number,
        required: [true, "Item Buying Price is require"],
    },
    sellPrice: {
        type: Number,
        required: [true, "Item Selling Price is require"],
    },
    stock: {
        type: Number,
        required: [true, "Item Stock is require"],
    },
    status: {
        type: String,
        default: 'valid',
    },
    },
    { timestamps: true }
);

const InventoryModel = mongoose.model("inventory", inventorySchema);
module.exports = InventoryModel; 