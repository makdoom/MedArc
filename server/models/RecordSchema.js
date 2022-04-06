const mongoose = require("mongoose");

const RecordsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide full name"],
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  complaint: {
    type: String,
  },
  duration: {
    type: String,
  },
  treatmentDate: {
    type: String,
  },
});

const Records = mongoose.model("records", RecordsSchema);

module.exports = Records;
