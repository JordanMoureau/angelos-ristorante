import ContactForm from "./components/contactForm";
import FiveStarsBar from "./components/fiveStars";
import TextBlock from "./components/textBlock";

import MenuSlider from "./components/menuTeaser";
import CateringBlock from "./components/cateringBlock";
import HomeHero from "./components/homeHero";
import SteakAndWine from "./components/steakAndWine";

export const metadata = {
  title: "Angelo’s Ristorante | Organic Italian Restaurant Coeur d’Alene ",
  description:
    "Angelo’s Ristorante is Coeur d’Alene’s only fully organic restaurant. Handmade pasta, organic steaks, and fine dining in downtown CDA. Reserve your table today.",
  keywords: [
    "organic restaurant coeur d alene",
    "italian restaurant coeur d alene",
    "organic italian restaurant cda",
    "steakhouse coeur d alene",
    "fine dining coeur d alene",
  ],
  alternates: {
    canonical: "https://www.angelosristorante.net",
  },
  openGraph: {
    title: "Angelo’s Ristorante | Organic Italian Dining in Coeur d’Alene",
    description:
      "Coeur d’Alene’s only fully organic restaurant. Fresh pasta, organic steaks, and elevated Italian cuisine.",
    url: "https://www.angelosristorante.net",
    siteName: "Angelo’s Ristorante",
    images: [
      {
        url: "https://www.angelosristorante.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angelo’s Ristorante organic Italian dining",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Italian Restaurant in Coeur d’Alene | Angelo’s",
    description:
      "Handmade pasta, organic steaks, and fine dining in Coeur d’Alene.",
    images: ["https://www.angelosristorante.net/og-image.jpg"],
  },
};

export default function HomePage() {
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
            image: "https://www.angelosristorante.net/og-image.jpg",
            "@id": "https://www.angelosristorante.net",
            url: "https://www.angelosristorante.net",
            telephone: "+12087652850",
            servesCuisine: ["Italian", "Organic", "Steakhouse"],
            priceRange: "$$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "846 North 4th Street",
              addressLocality: "Coeur d'Alene",
              addressRegion: "ID",
              postalCode: "83814",
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "16:00",
                closes: "21:00",
              },
            ],
            sameAs: [],
          }),
        }}
      />

      {/* PAGE CONTENT */}

      <main>
        <HomeHero />
        <TextBlock
          image={"/mothermary.png"}
          title={"Angelo's Ristorate"}
          eyebrow={"Organic kitchen in cda"}
          subtitle={"An authentic italian dining experience"}
          content={`Angelo’s brings authentic Italian dining to Coeur d’Alene with a level of quality you can taste in every bite. From imported Italian pastas and rich, slow-simmered red sauce to premium steaks, fresh seafood, and classic Italian favorites, every dish is thoughtfully prepared with care and attention to flavor. This is Italian cooking the way it’s meant to be: simple, refined, and deeply satisfying, served in a space where every meal feels like something worth lingering over.`}
          primaryLink={{ href: "/reserve-a-table", label: "Reserve a Table" }}
          secondaryLink={{ href: "/menu", label: "See the Menu" }}
          borderColor={"#16392f"}
        />

        <MenuSlider />

        <CateringBlock />
        <SteakAndWine />
        <TextBlock
          image={"/angelo.jpg"}
          eyebrow="CDA Headline:"
          title={"ANGELO CAUGHT"}
          subtitle={"Moonlighting As In-Home Chef"}
          content={`Reserve an unforgettable evening in the comfort of your own home, where every detail is handled with care and intention. Chef Angelo brings the heart of Angelo’s Ristorante directly to your table, crafting a five-course authentic, organic Italian dinner designed around your tastes and our five star menu. From the first course to the final pour of wine, your night becomes less about hosting and more about savoring—good food, good company, and a truly one-of-a-kind experience you don’t have to lift a finger to enjoy.`}
          primaryLink={{
            href: "/chef-night",
            label: "More About Chef Night",
          }}
          secondaryLink={{
            href: "/menu",
            label: "See The Menu",
          }}
          borderColor={"#af2f1b"}
        />

        <FiveStarsBar />
        <ContactForm />
      </main>
    </>
  );
}

// <TextBlock
// image={"/steak.jpg"}
// eyebrow="Coeur d’Alene Dining:"
// title={"STEAKS, DONE RIGHT"}
// subtitle={"Italian classics meet premium Northwest cuts"}
// content={`Looking for a great steak in Coeur d’Alene without giving up authentic Italian? Angelo’s Ristorante brings both to the table. Alongside imported Italian pastas and classic dishes, you’ll find grass-fed, Washington-raised steaks cooked with precision and served in a refined, welcoming setting. It’s a Coeur d’Alene restaurant where steak lovers and pasta fans can agree—perfect for date nights, celebrations, or anyone searching for a standout steakhouse experience in the CDA and Spokane area.`}
// primaryLink={{
//   href: "/menu",
//   label: "See The Menu",
// }}
// secondaryLink={{
//   href: "/reserve-a-table",
//   label: "Reserve a Table",
// }}
// borderColor={"#af2f1b"}
// />
