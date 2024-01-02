import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mern-db");
    console.log(">>>>> DB is connected");
  } catch (error) {
    console.error(error);
  }
};
