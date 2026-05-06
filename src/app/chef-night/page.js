import ContactForm from "../components/contactForm";
import FiveStarsBar from "../components/fiveStars";
import MenuSlider from "../components/menuTeaser";
import PrivateChef from "../components/privateDining";
import TextBlock from "../components/textBlock";

export const metadata = {
  title: "Private Chef Night | Angelo’s Ristorante Coeur d’Alene",
  description:
    "Experience a private chef night with Angelo’s Ristorante in Coeur d’Alene. Organic Italian dining, custom menus, and an elevated in-home fine dining experience.",
  keywords: [
    "private chef coeur d alene",
    "chef for hire cda",
    "private dining experience coeur d alene",
    "in home chef coeur d alene",
    "organic private chef idaho",
    "angelos private chef night",
  ],
  alternates: {
    canonical: "https://www.angeloscda.com/chef-night",
  },
  openGraph: {
    title: "Private Chef Night | Angelo’s Ristorante",
    description:
      "Book a private chef experience with Angelo’s Ristorante. Organic Italian cuisine prepared in your home.",
    url: "https://www.angeloscda.com/chef-night",
    siteName: "Angelo’s Ristorante",
    images: [
      {
        url: "https://www.angeloscda.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Private chef night Angelo’s Ristorante",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Chef Night | Angelo’s Ristorante",
    description: "Organic Italian private chef experience in Coeur d’Alene.",
    images: ["https://www.angeloscda.com/og-image.jpg"],
  },
};

export default function ChefNightPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "Angelo’s Ristorante",
              url: "https://www.angeloscda.com/chef-night",
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
              name: "Private Chef Night",
              provider: {
                "@type": "Restaurant",
                name: "Angelo’s Ristorante",
              },
              areaServed: {
                "@type": "Place",
                name: "Coeur d'Alene, Idaho",
              },
              description:
                "Private chef dining experience with organic Italian cuisine prepared in your home.",
            },
          ]),
        }}
      />

      <main>
        <TextBlock
          image={"/angelo.jpg"}
          eyebrow="Coeur D'Alene & Spokane Area"
          title={"Angelo's In Your Kitchen"}
          subtitle={"A Personal Chef Experience"}
          content={`Bring the Angelo’s Ristorante experience into your home with a private five-course Italian dinner prepared by Chef Angelo. Each menu is built around seasonal, organic ingredients and tailored to your preferences, creating a meal that feels both personal and elevated. From preparation to plating, every detail is handled—so you can relax, enjoy your guests, and experience restaurant-quality dining without ever leaving your table.`}
          primaryLink={{
            href: "/contact-angelos",
            label: "Reserve A Night",
          }}
          secondaryLink={{
            href: "/menu",
            label: "See The Menu",
          }}
          borderColor={"#af2f1b"}
        />

        <PrivateChef />

        <MenuSlider />
        <FiveStarsBar bgColor="#1e1c1b" />
        <ContactForm bgColor="#1e1c1b" />
      </main>
    </>
  );
}
