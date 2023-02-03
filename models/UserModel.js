const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    emial: {
        type: String,
        required: [true, 'email is required'],
    },
    pwd: {
        type: String,
        required: [true, 'password is required'],
    }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;