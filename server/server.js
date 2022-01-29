const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();
connectDB();

// middelwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.get("/", (req, res) => {
  return res.status(200).json({ status: 200, message: "Successful" });
});
const PORT = process.env.PORT || 5000;

// Error Handler
app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`Server up and running at ${PORT}`)
);

// error handeling
process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged error ${error}`);
  server.close(() => process.exit(1));
});
