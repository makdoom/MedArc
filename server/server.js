const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
require("dotenv").config({ path: "./config.env" });

const app = express();
connectDB();

// middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server up and running at ${PORT}`)
);

// error handeling
process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged error ${error}`);
  server.close(() => process.exit(1));
});
