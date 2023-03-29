const employeeModel = require("../models/EmployeeModel");
const userModel = require("../models/UserModel");
const appointmentModel = require("../models/AppointmentModel");

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

module.exports = { getAllEmployeeController, getAllCustomersController, getAllAppointmentsController };