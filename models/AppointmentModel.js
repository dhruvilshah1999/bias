const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    appointmentCreatorId: {
      type: String,
    },
    // Users Details
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    date: {
        type: Date,
        required: [true, "birth date is required"],
    },
    age: {
        type: Number,
        required: [true, "age is required"],
    },
    gender: {
        type: String,
        required: [true, "gender is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },

    //Employee Details
    empFirstName: {
      type: String,
      required: [true, "first name is require"],
    },
    empLastName: {
      type: String,
      required: [true, "last name is require"],
    },
    empCntNum: {
      type: String,
      required: [true, "phone num is require"],
    },

    //Service Details
    serviceCategory: {
        type: String,
        required: [true, "Servie Category is require"],
    },
    serviceName: {
        type: String,
        required: [true, "Service Name is require"],
    },
    price: {
        type: String,
        required: [true, "Final Price is require"],
    },
    status: {
      type: String,
      default: 'valid',
    },
    bookingTimings: {
      type: Object,
      required: [true, "booking time is required"],
    },
  },
  { timestamps: true }
);

const AppointmentModel = mongoose.model("appointment", appointmentSchema);
module.exports = AppointmentModel;