// Make this with props for Content, image and links, direction

import Link from "next/link";

export default function TextBlock({
  eyebrow,
  title,
  subtitle,
  content,
  image,
  primaryLink,
  secondaryLink,
  borderColor,
}) {
  return (
    <section className="block-container">
      <div className="text-block">
        {/* Image */}
        <div className="text-block-image">
          <img src={image} style={{ borderColor: borderColor }} alt={title} />
        </div>

        {/* Content */}
        <div className="text-block-content">
          <h4>{eyebrow}</h4>

          <h2>{title}</h2>

          <h3>{subtitle}</h3>

          <p>{content}</p>

          <div className="text-block-actions">
            <Link href={primaryLink.href} className="btn-primary">
              {primaryLink.label}
            </Link>

            <Link href={secondaryLink.href} className="btn-secondary">
              {secondaryLink.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
