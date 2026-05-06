import Link from "next/link";

export default function Topper() {
  return (
    <div className="topper">
      <Link href="/reserve">
        <h5>Reserve A Table for Tonight</h5>
      </Link>
    </div>
  );
}
