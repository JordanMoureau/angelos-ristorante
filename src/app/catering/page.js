import ContactForm from "../components/contactForm";
import FiveStarsBar from "../components/fiveStars";
import Link from "next/link";
import TextBlock from "../components/textBlock";

export const metadata = {
  title: "Catering | Angelo’s Ristorante Coeur d’Alene",
  description:
    "Let Angelo’s Ristorante cater your next event in Coeur d’Alene. Organic Italian catering with handmade pasta, organic steaks, and fine dining for weddings, parties, and private events.",
  keywords: [
    "catering coeur d alene",
    "italian catering cda",
    "organic catering coeur d alene",
    "wedding catering coeur d alene",
    "private event catering cda",
    "angelos ristorante catering",
  ],
  alternates: {
    canonical: "https://www.angeloscda.com/catering",
  },
  openGraph: {
    title: "Catering | Angelo’s Ristorante",
    description:
      "Organic Italian catering in Coeur d’Alene for weddings, events, and private dining.",
    url: "https://www.angeloscda.com/catering",
    siteName: "Angelo’s Ristorante",
    images: [
      {
        url: "https://www.angeloscda.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angelo’s Ristorante catering Coeur d’Alene",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering | Angelo’s Ristorante",
    description: "Organic Italian catering for events in Coeur d’Alene.",
    images: ["https://www.angeloscda.com/og-image.jpg"],
  },
};

export default function CateringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Angelo’s Ristorante",
              url: "https://www.angeloscda.com/catering",
              telephone: "+12087652850",
              servesCuisine: ["Italian", "Organic"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "846 North 4th Street",
                addressLocality: "Coeur d'Alene",
                addressRegion: "ID",
                postalCode: "83814",
                addressCountry: "US",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Catering",
              provider: {
                "@type": "Restaurant",
                name: "Angelo’s Ristorante",
              },
              areaServed: {
                "@type": "Place",
                name: "Coeur d'Alene, Idaho",
              },
              description:
                "Organic Italian catering for weddings, private events, and special occasions.",
            },
          ]),
        }}
      />

      <main>
        <div
          className="catering-block"
          style={{
            backgroundImage: "url('/catering.jpg')",
          }}
        >
          <div className="catering-inner">
            <h2>
              Let Angelo’s Cater <br /> Your Next Event
            </h2>

            <p>
              Let Angelo’s cater your next event with the same passion and
              attention to quality that define every dish at Angelo’s
              Ristorante. Serving Coeur d’Alene, Spokane, and the surrounding
              North Idaho area, Angelo’s delivers authentic Italian catering for
              everything from intimate gatherings to weddings and large
              celebrations. Featuring imported Italian pastas, premium steaks,
              fresh seafood, and crowd-favorite classics, our catering brings a
              refined, memorable dining experience straight to your table—with
              food your guests will actually talk about long after the event
              ends.
            </p>
          </div>
        </div>
        <div className="catering-bottom-bar">
          Real Italian Food. Real Organic Ingredients. Really Good Nights.
        </div>

        <TextBlock
          image={"/mothermary.png"}
          eyebrow={"ANGELO's, OFF-SITE"}
          title={"Catering in CDA"}
          subtitle={"Authentic Italian Catering for Any Occasion"}
          content={`Bring the experience of Angelo’s Ristorante to your next event with catering designed to impress without the stress. From imported Italian pastas to premium steaks, fresh seafood, and crowd-favorite classics, every dish is prepared with the same attention to quality and flavor guests expect in-house. Whether you're hosting an intimate gathering or a larger celebration, our catering makes it easy to serve exceptional food that people actually remember.`}
          primaryLink={{
            href: "/catering/catering-menu",
            label: "Catering Menu",
          }}
          secondaryLink={{
            href: "/contact-angelos",
            label: "Contact Us",
          }}
          direction="row-reverse"
          borderColor={"#af2f1b"}
        />
        <FiveStarsBar bgColor="#f5f1eb" textColor="#af2f1b" />
        <ContactForm bgColor="#1e1c1b" />
      </main>
    </>
  );
}
