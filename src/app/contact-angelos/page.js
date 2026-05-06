import ContactForm from "../components/contactForm";
import FiveStarsBar from "../components/fiveStars";

export const metadata = {
  title: "Contact Angelo’s Ristorante | Coeur d’Alene Italian Restaurant",
  description:
    "Contact Angelo’s Ristorante in Coeur d’Alene. Call for reservations, takeout, or private dining. Visit our organic Italian restaurant in downtown CDA.",
  keywords: [
    "contact angelos ristorante",
    "italian restaurant coeur d alene contact",
    "restaurant phone number cda",
    "organic restaurant coeur d alene contact",
    "angelos ristorante reservations phone",
  ],
  alternates: {
    canonical: "https://www.angeloscda.com/contact-angelos",
  },
  openGraph: {
    title: "Contact Angelo’s Ristorante",
    description:
      "Call or visit Angelo’s Ristorante in Coeur d’Alene for reservations, takeout, and organic Italian dining.",
    url: "https://www.angeloscda.com/contact-angelos",
    siteName: "Angelo’s Ristorante",
    images: [
      {
        url: "https://www.angeloscda.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Angelo’s Ristorante Coeur d’Alene",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Angelo’s Ristorante",
    description:
      "Get in touch with Angelo’s Ristorante in Coeur d’Alene for reservations and inquiries.",
    images: ["https://www.angeloscda.com/og-image.jpg"],
  },
};

export default function ContactPage() {
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
              url: "https://www.angeloscda.com/contact-angelos",
              telephone: "+12087652850",
              servesCuisine: ["Italian", "Organic", "Steakhouse"],
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
              "@type": "ContactPage",
              name: "Contact Angelo’s Ristorante",
              url: "https://www.angeloscda.com/contact-angelos",
            },
          ]),
        }}
      />

      <main>
        <FiveStarsBar textColor="#f5f1eb" bgColor="#1e1c1b" />
        <ContactForm bgColor="#1e1c1b" />
      </main>
    </>
  );
}
