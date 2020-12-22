import Link from "next/link";

export default function NavList() {
  return (
    <nav className="menu-list">
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/lancamentos" className="nav-link">
            <a>LANÇAMENTOS</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/papelaria" className="nav-link">
            <a>PAPELARIA</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/bolsas" className="nav-link">
            <a>BOLSAS</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/escolar" className="nav-link">
            <a>ESCOLAR</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/escritorio" className="nav-link">
            <a>ESCRITÓRIO</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/informatica" className="nav-link">
            <a>INFORMÁTICA</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contato" className="nav-link">
            <a>CONTATO</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
