import Link from "next/link";
import {MenuData} from "./MenuData";

export default function NavList() {
  return (
    <section className="menu-list">
      <nav className="nav-list">
        {MenuData.map((item, index) => {
          return (
            <li key={index} className="nav-item">
              <Link href={item.path} className="nav-link">
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </nav>
    </section>
  );
}
