import Link from "next/link";

export default function Card({ title, subtitle, dir }) {
  return (
    <div className="card">
      <div className="image-card">
        <Link href="/product-details">
          <a>
            <img src={dir} alt="Lapis" />
          </a>
        </Link>
      </div>
      <div className="footer-card">
        <div className="title-card">
          <h3>{title}</h3>
        </div>
        <div className="price-cart">
          <h4>{subtitle}</h4>
        </div>
      </div>
    </div>
  );
}
