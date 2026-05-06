import Link from "next/link";

export default function MainNav() {
  return (
    <nav>
      {/* Top Bar */}

      {/* Main Nav */}
      <div className="main-nav-bar">
        {/* Logo */}
        <div className="script logo">
          <Link href="/">Angelo’s Ristorante</Link>
        </div>

        {/* Links */}
        <div className="main-nav">
          <div className="main-nav-links">
            {/* <Link href="/our-story">Our Story</Link> */}
            <Link href="/menu">Menu</Link>
            <Link href="/catering">Catering</Link>
            <Link href="/reserve-a-table">Reserve</Link>
            <Link href="/contact-angelos">Contact</Link>
          </div>
          <div className="main-nav-tel">
            <a href="tel:+12087652850">(208) 765-2850</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
