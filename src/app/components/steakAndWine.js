import Link from "next/link";
import TextBlock from "./textBlock";

export default function SteakAndWine() {
  return (
    <div className="steaks-wines-widge">
      <div className="steaks">
        <div className="text-block-content">
          <h4>Organic Grass-Fed</h4>

          <h2>Steaks at Angelo's</h2>

          <h3>He may want steak, she may want pasta</h3>

          <p>
            Angelo's has both. You never need to worry about where your meat or
            seafood came from at Angelo's—everything is thoughtfully sourced,
            from organic, grass-fed, prime beef to fresh wild caught seafood,
            chosen for quality you can taste in every bite. It's the kind of
            place where the ingredients speak first, the cooking respects them,
            and the result is a plate that feels as good as it tastes.
          </p>
          <div className="text-block-actions">
            <Link href="/menu" className="btn-primary">
              See the Menu
            </Link>

            <Link href="/reserve-a-table" className="btn-secondary">
              Reserve A Table
            </Link>
          </div>
        </div>
      </div>

      <div className="wines">
        <div className="text-block-content">
          <h4>Thoughtfully Curated</h4>

          <h2>Wine at Angelo's</h2>

          <h3>A glass for every palate, a bottle for every occasion</h3>

          <p>
            Angelo's wine program is as intentional as the food. From bold Old
            World reds to crisp organic whites, the cellar is stocked with
            sustainable and biodynamic selections chosen for their character and
            provenance. Whether you're pairing with a ribeye or lingering over
            pasta, there's something here worth discovering — and a staff that
            genuinely loves helping you find it.
          </p>

          <div className="text-block-actions">
            <Link href="/menu" className="btn-primary">
              See the Menu
            </Link>

            <Link href="/reserve-a-table" className="btn-secondary">
              Reserve A Table
            </Link>
          </div>
        </div>

        <img src="/wine.jpg" />
      </div>
    </div>
  );
}
