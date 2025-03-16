import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true },
  rulebook: { type: String },
  registerLink: { type: String },
  eventType: { type: String, enum: ["upcoming", "past"], default: "upcoming" },
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
