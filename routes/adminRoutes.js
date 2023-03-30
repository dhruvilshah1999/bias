const express = require("express");

const {
    getAllEmployeeController,
    getAllCustomersController,
    getAllAppointmentsController,
    createInventory,
    getAllInventoryController,
  } = require("../controllers/adminCtrl");

const authMiddleware = require("../middleware/authMiddleware");

//router onject
const router = express.Router();

// Get all Employees
console.log("in adminROute")
router.get("/getAllEmployee", authMiddleware, getAllEmployeeController);
router.get("/getAllCustomers", authMiddleware, getAllCustomersController);
router.get("/getAllAppointment", authMiddleware, getAllAppointmentsController);
router.get("/getAllInventory", authMiddleware, getAllInventoryController);

router.post("/create-inventory", authMiddleware, createInventory);



module.exports = router;
