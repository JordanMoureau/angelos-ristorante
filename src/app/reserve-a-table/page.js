import TextBlock from "../components/textBlock";
import Reserve from "../components/reserveWidget";
import MenuSlider from "../components/menuTeaser";

export const metadata = {
  title: "Reserve a Table | Angelo’s Ristorante Coeur d’Alene",
  description:
    "Reserve a table at Angelo’s Ristorante, Coeur d’Alene’s only fully organic Italian restaurant. Book your table for fine dining, organic pasta, and steak.",
  keywords: [
    "reserve a table coeur d alene",
    "italian restaurant reservations cda",
    "book restaurant coeur d alene",
    "fine dining reservations coeur d alene",
    "angelos ristorante reservations",
  ],
  alternates: {
    canonical: "https://angelosristorante.net/reserve-a-table",
  },
  openGraph: {
    title: "Reserve a Table at Angelo’s Ristorante",
    description:
      "Book your table at Coeur d’Alene’s only fully organic Italian restaurant.",
    url: "https://angelosristorante.net/reserve-a-table",
    siteName: "Angelo’s Ristorante",
    images: [
      {
        url: "https://www.angeloscda.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reserve a table at Angelo’s Ristorante",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve a Table | Angelo’s Ristorante",
    description:
      "Reserve your table for organic Italian fine dining in Coeur d’Alene.",
    images: ["https://www.angeloscda.com/og-image.jpg"],
  },
};

export default function ReservePage() {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Angelo’s Ristorante",
            url: "https://angelosristorante.net/reserve-a-table",
            telephone: "+12087652850",
            acceptsReservations: "True",
            address: {
              "@type": "PostalAddress",
              streetAddress: "846 North 4th Street",
              addressLocality: "Coeur d'Alene",
              addressRegion: "ID",
              postalCode: "83814",
              addressCountry: "US",
            },
          }),
        }}
      />
      <div
        className="catering-block reserve-page"
        style={{
          backgroundImage: "url('/catering.jpg')",
        }}
      >
        <div className="catering-inner">
          <h2>Reserve a Table At Angelo's</h2>
        </div>
      </div>
      <div className="catering-bottom-bar">
        Real Italian Food. Real Organic Ingredients. Really Good Nights.
      </div>
      <TextBlock
        image={"/interiortall.jpg"}
        eyebrow="Reserve An"
        title={"EVENING WITH US"}
        subtitle={"Organic-Inspired Italian Fine Dining"}
        content={`Angelo’s brings authentic Italian dining to the heart of Coeur d’Alene with a level of quality you can taste in every bite. From imported Italian pastas to premium steaks and fresh seafood, every dish is thoughtfully prepared using high-quality ingredients, with an emphasis on organic sourcing where it matters most. This is Italian cooking the way it’s meant to be—refined, inviting, and deeply satisfying, served in a space where every meal feels like something worth lingering over.`}
        primaryLink={{
          href: "/contact-angelos",
          label: "Contact Us",
        }}
        secondaryLink={{
          href: "tel:+12087652850",
          label: "Or Call Directly",
        }}
        direction="row"
        borderColor={"#7a1f0c"}
      />

      <Reserve />
      <MenuSlider />
    </>
  );
}
