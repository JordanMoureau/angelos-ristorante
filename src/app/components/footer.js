"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const restref = "287317";

const OPEN_DAYS = [2, 3, 4, 5, 6];

function generateTimeSlots() {
  const slots = [];
  for (let hour = 16; hour <= 21; hour++) {
    for (let min = 0; min < 60; min += 15) {
      if (hour === 21 && min > 0) break;
      const h = hour.toString().padStart(2, "0");
      const m = min.toString().padStart(2, "0");
      const value = `${h}:${m}`;
      const displayHour = hour > 12 ? hour - 12 : hour;
      const ampm = "PM";
      slots.push({ value, label: `${displayHour}:${m} ${ampm}` });
    }
  }
  return slots;
}

const timeSlots = generateTimeSlots();

function isDateAvailable(dateString) {
  if (!dateString) return true;
  const date = new Date(dateString + "T12:00:00");
  return OPEN_DAYS.includes(date.getDay());
}

function getMinDate() {
  return new Date().toISOString().split("T")[0];
}

export default function Footer() {
  const [partySize, setPartySize] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dateError, setDateError] = useState("");

  function handleDateChange(e) {
    const val = e.target.value;
    setDate(val);
    if (val && !isDateAvailable(val)) {
      setDateError("We're closed that day. We're open Tuesday–Saturday.");
    } else {
      setDateError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!partySize || !date || !time || !isDateAvailable(date)) return;
    const reservationUrl = `https://www.opentable.com/restref/client/?restref=${restref}&datetime=${date}T${time}&covers=${partySize}`;
    window.open(reservationUrl, "_blank");
  }

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <h2>Reserve A Table</h2>

          <form onSubmit={handleSubmit}>
            <div className="reserve">
              <select
                name="partySize"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                required
              >
                <option value="">Party size</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>

              <input
                type="date"
                name="date"
                value={date}
                min={getMinDate()}
                onChange={handleDateChange}
                required
              />

              <select
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Time</option>
                {timeSlots.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>

            {dateError && <p className="date-error">{dateError}</p>}

            <button type="submit" disabled={!!dateError}>
              Find A Table
            </button>
          </form>
        </div>

        <div className="footer-right">
          <h3 className="script">Angelo's Ristorante</h3>
          <p>
            846 North 4th Street <br />
            Coeur d'Alene, ID 83814
          </p>
          <div className="socials">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
