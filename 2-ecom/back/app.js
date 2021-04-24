const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors");

const authRoutes = require("./src/routes/auth");
const userRouter = require("./src/routes/user");
const categoryRoutes = require("./src/routes/category");
const productRoutes = require("./src/routes/productRoutes");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRouter);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

module.exports = app;
