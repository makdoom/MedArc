const express = require("express");
const morgan = require("morgan");
require("dotenv").config({ path: "./config.env" });

const app = express();

// middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up and running at ${PORT}`));
