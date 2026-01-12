import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    roomType: String,
    checkIn: String,
    checkOut: String,
    nights: Number,
    guests: Number,   // ✅ THIS WAS MISSING
  },
  { timestamps: true }
);

export default mongoose.model("customer_details", bookingSchema);
