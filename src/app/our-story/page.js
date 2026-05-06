export const metadata = {
  title: "Our Story | Angelo’s Ristorante Coeur d’Alene",
  description:
    "Learn the story behind Angelo’s Ristorante, Coeur d’Alene’s only fully organic Italian restaurant. From scratch-made pasta to organic ingredients, discover our passion for real food.",
  keywords: [
    "about angelos ristorante",
    "organic restaurant coeur d alene",
    "italian restaurant cda story",
    "organic italian restaurant idaho",
    "about italian restaurant coeur d alene",
  ],
  alternates: {
    canonical: "https://www.angeloscda.com/our-story",
  },
  openGraph: {
    title: "Our Story | Angelo’s Ristorante",
    description:
      "Discover the passion behind Coeur d’Alene’s only fully organic Italian restaurant.",
    url: "https://www.angeloscda.com/our-story",
    siteName: "Angelo’s Ristorante",
    images: [
      {
        url: "https://www.angeloscda.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angelo’s Ristorante organic Italian dining",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Angelo’s Ristorante",
    description:
      "The story behind Angelo’s organic Italian restaurant in Coeur d’Alene.",
    images: ["https://www.angeloscda.com/og-image.jpg"],
  },
};

export default function OurStoryPage() {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Angelo’s Ristorante",
              url: "https://www.angeloscda.com/our-story",
              telephone: "+12087652850",
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
              "@type": "AboutPage",
              name: "Our Story | Angelo’s Ristorante",
              url: "https://www.angeloscda.com/our-story",
            },
          ]),
        }}
      />

      <main>
        <h1>Our Story</h1>

        <p>
          Angelo’s Ristorante was built around a simple idea: real food should
          come from real ingredients. As Coeur d’Alene’s only fully organic
          restaurant, our focus has always been on quality, authenticity, and
          the kind of dining experience that feels both elevated and genuine.
        </p>

        <h2>Rooted in Organic Ingredients</h2>
        <p>
          Every dish at Angelo’s starts with carefully selected organic
          ingredients. From fresh vegetables to responsibly sourced meats, our
          kitchen is committed to serving food that is clean, flavorful, and
          crafted with intention.
        </p>

        <h2>Handmade Italian Tradition</h2>
        <p>
          Our menu reflects classic Italian techniques with a modern approach.
          House-made pasta, scratch sauces, and thoughtfully prepared dishes
          create a dining experience that honors tradition while embracing
          quality at every level.
        </p>

        <h2>A Different Kind of Dining in Coeur d’Alene</h2>
        <p>
          Angelo’s offers something unique in Coeur d’Alene: a fully organic,
          fine dining experience that doesn’t sacrifice comfort. Whether you're
          joining us for a quiet dinner or a special occasion, our goal is to
          create a space where great food and great company come together.
        </p>

        <h2>Visit Us</h2>
        <p>
          Angelo’s Ristorante is located at 846 North 4th Street in downtown
          Coeur d’Alene. We are open Tuesday through Saturday from 4:00 PM to
          9:00 PM.
        </p>
      </main>
    </>
  );
}
