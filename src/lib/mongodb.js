import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI; // Load from environment variables

if (!MONGO_URI) {
  throw new Error("❌ MongoDB URI is missing. Set MONGO_URI in .env.");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("🔄 Using existing MongoDB connection...");
      return;
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected:", mongoose.connection.host);
    
    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB Disconnected! Attempting Reconnect...");
    });

  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit the process on DB connection failure
  }
};
