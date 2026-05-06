import Link from "next/link";

export default function CateringBlock() {
  return (
    <section>
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
            Let Angelo’s cater your next event with the same passion,
            craftsmanship, and organic integrity that define every dish at
            Angelo’s Ristorante. From intimate gatherings to weddings and large
            celebrations, Angelo’s brings a true farm-to-table Italian
            experience straight to your table—featuring imported italian pastas,
            organic ingredients, and menus tailored to your vision.
          </p>

          <Link href="/catering" className="catering-button">
            Catering With Angelo’s
          </Link>
        </div>
      </div>
      <div className="catering-bottom-bar">
        Real Italian Food. Real Organic Ingredients. Really Good Nights.
      </div>
    </section>
  );
}
