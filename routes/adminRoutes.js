const express = require("express");

const {
    getAllEmployeeController,
    getAllCustomersController,
    getAllAppointmentsController,
  } = require("../controllers/adminCtrl");

const authMiddleware = require("../middleware/authMiddleware");

//router onject
const router = express.Router();

// Get all Employees
router.get("/getAllEmployee", authMiddleware, getAllEmployeeController);
router.get("/getAllCustomers", authMiddleware, getAllCustomersController);
router.get("/getAllAppointment", authMiddleware, getAllAppointmentsController);



module.exports = router;
