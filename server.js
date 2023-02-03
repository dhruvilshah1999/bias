const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// config dotenv
dotenv.config();

// MongoDB Connection
connectDB();

// REST object
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/user", require("./routes/userRoutes"))

// Listen Port form Routes/.env
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`Server running ${process.env.NODE_MODE} mode on port ${process.env.PORT}`);
}) 