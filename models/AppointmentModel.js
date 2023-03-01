const mongoose = require("mongoose");

const AppointmentModel = mongoose.model("appointment", appointmentSchema);
module.exports = AppointmentModel;