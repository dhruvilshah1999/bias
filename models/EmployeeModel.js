const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is require"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is require"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    salaryPerHour: {
      type: Number,
      required: [true, "fee is required"],
    },
    status: {
      type: String,
      default: 'valid',
    },
    isEmployee: {
      type: Boolean,
      default: true,
    },
    timings: {
      type: Object,
      required: [true, "wrok timing is required"],
    },
  },
  { timestamps: true }
);

const EmployeeModel = mongoose.model("employee", employeeSchema);
module.exports = EmployeeModel;