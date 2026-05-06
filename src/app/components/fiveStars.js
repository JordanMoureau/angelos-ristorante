import { FaStar } from "react-icons/fa";

export default function FiveStarsBar({
  bgColor = "#af2f1b",
  textColor = "#ffffff",
}) {
  return (
    <div
      className="five-stars-bar"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Stars */}
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* Fixed Text */}
      <div>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Angelo's+Ristorante/@47.6815236,-116.7830293,17z/data=!4m10!1m2!2m1!1sangelos+on+google!3m6!1s0x5361c6f3bd117b93:0x886ddfe2d0a5e2e6!8m2!3d47.6815236!4d-116.7804544!15sChFhbmdlbG9zIG9uIGdvb2dsZSIDiAEBkgESaXRhbGlhbl9yZXN0YXVyYW504AEA!16s%2Fg%2F1tn4xv67?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D"
        >
          500+ five Star reviews on Google
        </a>
      </div>
    </div>
  );
}

//   <FiveStarsBar />

// <FiveStarsBar bgColor="#a52a1f" textColor="#fff" />
