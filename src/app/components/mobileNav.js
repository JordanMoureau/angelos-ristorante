"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <div className="script logo">
        <Link href="/">Angelo’s Ristorante</Link>
      </div>
      {/* Trigger (hamburger) */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay */}
      {open && (
        <div className="mobile-nav-box" onClick={() => setOpen(false)}>
          {/* Close */}

          {/* Links */}
          <div
            className="mobile-nav-links"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <Link href="/our-story" onClick={() => setOpen(false)}>
              Our Story
            </Link> */}
            <Link href="/menu" onClick={() => setOpen(false)}>
              Menu
            </Link>
            <Link href="/catering" onClick={() => setOpen(false)}>
              Catering
            </Link>
            <Link href="/reserve-a-table" onClick={() => setOpen(false)}>
              Reserve
            </Link>
            <Link href="/contact-angelos" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>

          {/* Phone */}
          <div className="mobile-nav-phone">
            <a href="tel:+12087652850">(208) 765-2850</a>
          </div>

          {/* Bottom CTA */}
          <div className="chef-night-mobile">
            <Link href="/chef-night" onClick={() => setOpen(false)}>
              Find Out About Privately Hosted Meals w/ Angelo
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
