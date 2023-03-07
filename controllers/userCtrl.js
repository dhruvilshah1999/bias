const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const employeeModel = require("../models/EmployeeModel");
const AppointmentModel = require("../models/AppointmentModel")

//register callback
const registerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

// login callback
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invlid Email or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log("Login UserCtrl Page Token", token);
    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};

// Authentication 
const authController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.userId })
    user.password = undefined;
    console.log("user is found", user);
    if (!user) {
      return res.status(200).send({
        message: 'User not Found',
        success: false
      });
    } else {
      res.status(200).send({
        success: true,
        data: user
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: 'auth failed',
      success: false,
      err
    });
  }
};

// Adding a new employee
const createEmployeeController = async (req, res) => {
  try {
    const newEmployee = await employeeModel({ ...req.body, status: 'valid' });
    await newEmployee.save();
    // const adminUser = await userModel.findOne({ isAdmin: true });
    // const notifcation = adminUser.notifcation;
    // notifcation.push({
    //   type: "apply-doctor-request",
    //   message: `${newDoctor.firstName} ${newDoctor.lastName} Has Applied For A Doctor Account`,
    //   data: {
    //     doctorId: newDoctor._id,
    //     name: newDoctor.firstName + " " + newDoctor.lastName,
    //     onClickPath: "/admin/employees",
    //   },
    // });
    // await userModel.findByIdAndUpdate(adminUser._id, { notifcation });
    res.status(201).send({
      success: true,
      message: "Employee Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Creating a Employee",
    });
  }
};

// Adding a new Appointment
const createAppointmentController = async (req, res) => {
  try {
    const newAppointment = await AppointmentModel({ ...req.body, status: 'valid' });
    await newAppointment.save();
    const adminUser = await userModel.findOne({ isAdmin: true });
    const notifcation = adminUser.notifcation;
    notifcation.push({
      type: "appointment-creation",
      message: `${newAppointment.firstName} ${newAppointment.lastName} Appointment is Booked Successfully with ${newAppointment.empFirstName} ${newAppointment.empLastName}`,
      data: {
        appointmentId: newAppointment._id,
        userName: newAppointment.firstName + " " + newAppointment.lastName,
        employeeName: newAppointment.empFirstName + " " + newAppointment.empLastName,
        onClickPath: "/admin/appointments",
      },
    });
    await userModel.findByIdAndUpdate(adminUser._id, { notifcation });
    res.status(201).send({
      success: true,
      message: "Appointment Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Creating a Appointment",
    });
  }
};

// Delete all Notification
const deleteAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    user.notifcation = [];
    user.seennotification = [];
    const updatedUser = await user.save();
    updatedUser.password = undefined;
    res.status(200).send({
      success: true,
      message: "Notifications Deleted successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "unable to delete all notifications",
      error,
    });
  }
}
module.exports = {
  loginController,
  registerController,
  authController,
  createEmployeeController,
  createAppointmentController,
  getAllNotificationController,
  deleteAllNotificationController
};