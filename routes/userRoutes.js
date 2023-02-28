const express = require("express");
const {
  loginController,
  registerController,
  authController,
  createEmployeeController,
  createAppointmentController,
  getAllNotificationController,
  deleteAllNotificationController
} = require("../controllers/userCtrl");
const authMiddleware = require("../middleware/authMiddleware");

//router onject
const router = express.Router();

//routes
// LOGIN || POST
router.post("/login", loginController);

// REGISTER || POST
router.post("/register", registerController);

// Authentication 
router.post("/getAdminData", authMiddleware, authController)

// Create Employee 
router.post("/create-employee", authMiddleware, createEmployeeController);

// Create Appointment create-appointment
router.post("/create-appointment", authMiddleware, createAppointmentController);

// Get all Notifications
router.post("/get-all-notification", authMiddleware, getAllNotificationController);

// Delete all Notifications
router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController);

module.exports = router;