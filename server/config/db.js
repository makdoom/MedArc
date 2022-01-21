const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Mongodb up and running`);
  } catch (error) {
    console.log(`${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
