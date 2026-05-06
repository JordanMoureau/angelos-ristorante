"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const items = [
  { title: "Lobster", image: "/lobsterrav.jpg" },
  { title: "Tiramisu", image: "/tiramisu.jpg" },
  { title: "rib-eye", image: "/steak.jpg" },
  { title: "Clams", image: "/clams.jpg" },
  { title: "Cheesecake", image: "/cheesecake.jpg" },
  { title: "Bruschetta", image: "/bruchetta.jpg" },
  { title: "filet", image: "/fillet.jpg" },
  { title: "alfredo", image: "/alfredo.jpg" },
  { title: "pesto", image: "/pesto.jpg" },
  { title: "scampi", image: "/scampi.jpg" },
  { title: "Positano", image: "/bucatini.jpg" },
  { title: "Caesar", image: "/caesar.jpg" },
  { title: "crab cakes", image: "/crabcakes.jpg" },
  { title: "brulee", image: "/brulee.jpg" },
  { title: "Lobster", image: "/lobsterrav.jpg" },
  { title: "Tiramisu", image: "/tiramisu.jpg" },
  { title: "rib-eye", image: "/steak.jpg" },
  { title: "Clams", image: "/clams.jpg" },
  { title: "Cheesecake", image: "/cheesecake.jpg" },
  { title: "Bruschetta", image: "/bruchetta.jpg" },
  { title: "filet", image: "/fillet.jpg" },
  { title: "alfredo", image: "/alfredo.jpg" },
  { title: "pesto", image: "/pesto.jpg" },
  { title: "scampi", image: "/scampi.jpg" },
  { title: "Positano", image: "/bucatini.jpg" },
  { title: "Caesar", image: "/caesar.jpg" },
  { title: "crab cakes", image: "/crabcakes.jpg" },
  { title: "brulee", image: "/brulee.jpg" },
];

// duplicate items so the loop feels seamless
const sliderItems = [...items, ...items];

export default function MenuSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // reset once halfway through so it loops invisibly
  useEffect(() => {
    if (index >= items.length) {
      setIndex(0);
    }
  }, [index]);

  return (
    <section className="menu-slider">
      <div
        className="menu-slider-track"
        style={{
          transform: `translateX(-${index * (100 / 3)}%)`,
          transition: index >= items.length ? "none" : "transform 0.7s ease",
        }}
      >
        {sliderItems.map((item, i) => (
          <div
            key={i}
            className="menu-slide"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="menu-slider-footer">
        <Link href="/menu">
          <span>See The Menu</span>
          <span className="menu-line"></span>
          <span className="menu-arrow"></span>
        </Link>
      </div>
    </section>
  );
}
