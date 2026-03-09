import React, { useEffect, useState } from "react";
import axios from "axios";

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut?: string;
  nights?: number;
  guests?: number;
  createdAt: string;
}

export default function AdminBookings() {

  // 🔐 Admin password protection
  const password = prompt("Enter Admin Password");

  if (password !== "uviadmin123") {
    alert("❌ Wrong Password");
    window.location.href = "/";
  }

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/booking")
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // 🔹 Auto calculate nights
  const getNights = (b: Booking) => {
    if (b.nights && b.nights > 0) return b.nights;

    if (b.checkIn && b.checkOut) {
      const inDate = new Date(b.checkIn);
      const outDate = new Date(b.checkOut);
      const diff =
        (outDate.getTime() - inDate.getTime()) /
        (1000 * 60 * 60 * 24);
      return diff > 0 ? diff : "-";
    }

    return "-";
  };

  // 🔹 Auto guests fallback
  const getGuests = (b: Booking) => {
    const g = Number(b.guests);
    if (!isNaN(g) && g > 0) return g;
    return 1;
  };

  if (loading) {
    return <p style={{ padding: 20 }}>Loading bookings...</p>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        📋 Uvi Hotel – Booking List
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#020617",
          color: "white",
        }}
      >
        <thead>
          <tr style={{ background: "#0f172a" }}>
            <th style={th}>Name</th>
            <th style={th}>Email</th>
            <th style={th}>Phone</th>
            <th style={th}>Room</th>
            <th style={th}>Check-In</th>
            <th style={th}>Check-Out</th>
            <th style={th}>Nights</th>
            <th style={th}>Guests</th>
            <th style={th}>Booked At</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td style={td}>{b.name}</td>
              <td style={td}>{b.email}</td>
              <td style={td}>{b.phone}</td>
              <td style={td}>{b.roomType}</td>
              <td style={td}>{b.checkIn || "-"}</td>
              <td style={td}>{b.checkOut || "-"}</td>
              <td style={td}>{getNights(b)}</td>
              <td style={td}>{getGuests(b)}</td>
              <td style={td}>
                {new Date(b.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th: React.CSSProperties = {
  padding: "12px",
  borderBottom: "1px solid #334155",
  textAlign: "left",
};

const td: React.CSSProperties = {
  padding: "10px",
  borderBottom: "1px solid #1e293b",
};