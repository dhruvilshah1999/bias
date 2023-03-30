const employeeModel = require("../models/EmployeeModel");
const userModel = require("../models/UserModel");
const appointmentModel = require("../models/AppointmentModel");
const InventoryModel = require("../models/InventoryModel");

const getAllCustomersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "users data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching users",
      error,
    });
  }
};

const getAllEmployeeController = async (req, res) => {
  try {
    const employee = await employeeModel.find({});
    res.status(200).send({
      success: true,
      message: "Employee Data list",
      data: employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting Employee data",
      error,
    });
  }
};

const getAllAppointmentsController = async (req, res) => {
  try {
    const users = await appointmentModel.find({});
    res.status(200).send({
      success: true,
      message: "users data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching users",
      error,
    });
  }
};

const getAllInventoryController = async (req, res) => {
  try {
    const list = await InventoryModel.find({});
    res.status(200).send({
      success: true,
      message: "Inventory data list",
      data: list,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching Inventory",
      error,
    });
  }
};

const createInventory = async (req,res) => {
  try {
    console.log("Reached-----------------")
    const newInventory = await InventoryModel({ ...req.body, status: 'valid' });
    await newInventory.save();
    const adminUser = await userModel.findOne({ isAdmin: true });
    const notifcation = adminUser.notifcation;
    notifcation.push({
      type: "Inventory-creation",
      message: `${newInventory.manuCmp}'s ${newInventory.itemName} of ${newInventory.itemCategory} is Booked with ${newInventory.dealersFName} ${newInventory.dealersLName} Dealer`,
      data: {
        inventoryId: newInventory._id,
        itemName: newInventory.manuCmp + "'s " + newInventory.itemName + " of " + newInventory.itemCategory + " with " + newInventory.stock + " stock",
        dealerName: newInventory.dealersFName + " " + newInventory.dealersLName,
        onClickPath: "/admin/inventory",
      },
    });
    await userModel.findByIdAndUpdate(adminUser._id, { notifcation });
    res.status(201).send({
      success: true,
      message: "Inventory Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Creating a Inventory",
    });
  }
};

module.exports = { getAllEmployeeController, getAllCustomersController, getAllAppointmentsController, createInventory, getAllInventoryController };