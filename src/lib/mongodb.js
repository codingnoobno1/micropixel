import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://pixelusersdb1:pixelusersdb1@cluster0.xkcas.mongodb.net/pixel?retryWrites=true&w=majority";

let isConnected = false; // To prevent multiple connections

export const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
};
