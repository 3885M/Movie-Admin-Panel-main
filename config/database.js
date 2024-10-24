const mongoose = require("mongoose")

const database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shaikhmukhtar2141:12345@cluster0.ruubnx8.mongodb.net/Movie"
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = database;
