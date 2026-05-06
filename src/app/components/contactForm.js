"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm({ bgColor = "rgba(177, 42, 28, 0.9)" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mojrvnpg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-widge" style={{ backgroundColor: bgColor }}>
      <div className="main-form-container">
        {!submitted ? (
          <>
            <h2>Contact Angelo’s</h2>
            <h3>To reserve an event, table, or private chef night</h3>

            <form onSubmit={handleSubmit}>
              <input name="firstName" placeholder="First Name" required />
              <input name="lastName" placeholder="Last Name" required />

              <input name="phone" placeholder="Phone Number" required />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />

              <select name="partySize" defaultValue="">
                <option value="" disabled>
                  Party Size
                </option>
                <option>1-2</option>
                <option>3-4</option>
                <option>5-6</option>
                <option>7+</option>
              </select>

              <input name="date" type="date" />
              <input name="time" type="time" />

              <select name="eventType" defaultValue="">
                <option value="" disabled>
                  Type of Event
                </option>
                <option>Reservation</option>
                <option>Catering</option>
                <option>Private Chef Night</option>
              </select>

              <textarea
                name="message"
                placeholder="Anything else you’d like us to know?"
                rows="7"
              />

              <input
                type="hidden"
                name="_subject"
                value="New Angelo's Contact Form Submission"
              />

              <button
                className="main-contact-button"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </>
        ) : (
          <div className="form-success">
            <div className="form-success">
              <h2>Thank you for the message!</h2>

              <h3>We look forward to serving you.</h3>

              <p>
                Angelo’s Ristorante is a locally loved Italian restaurant in the
                heart of Coeur d’Alene, known for authentic, imported italian
                pasta, premium steaks, fresh seafood, and a thoughtfully curated
                wine selection. Every dish is prepared with organic,
                high-quality ingredients to bring you an authentic fine Italian
                dining experience that’s both elevated and welcoming.
                <br /> <br />
                While you wait, feel free to explore the menu or learn more
                about our private dining and catering options.
              </p>

              <div className="form-success-actions">
                <Link href="/menu" className="btn-primary">
                  See The Menu
                </Link>

                <Link href="/catering" className="btn-secondary">
                  See Catering With Angelo's
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
