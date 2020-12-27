import Link from "next/link";
import {row1, row2, row3} from "./ProductData";

export default function Card({ title, subtitle, dir, altName }) {
  return (
    <div className="card">
      <div className="image-card">
        <Link href="/product-details">
          <a>
            <img src={dir} alt={altName} />
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
