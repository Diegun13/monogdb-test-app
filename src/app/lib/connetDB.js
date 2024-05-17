import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URL2);
      console.log("db connected");
    }
  } catch (error) {
    console.log("error here big man connetDb");
  }
};

export default connectDB;