import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

/**
 * ✅ CREATE BOOKING
 * POST /api/booking
 */
router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: "Booking create failed",
      error: error.message,
    });
  }
});

/**
 * ✅ GET ALL BOOKINGS (ADMIN)
 * GET /api/booking
 */
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
});

export default router;
