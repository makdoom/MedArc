const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");
const cors = require("cors");
const Records = require("./models/RecordSchema");
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

app.use("/api/add-records", async (req, res) => {
  try {
    // // for patient user
    const { name, email, gender, age, complaint, duration, treatmentDate } =
      req.body;
    const newRecord = new Records({
      name,
      email,
      gender,
      age,
      complaint,
      duration,
      treatmentDate,
    });
    await newRecord.save();
    console.log(newRecord);
    res.status(200).json({ success: "true" });
  } catch (error) {
    console.log(error);
  }
});

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
