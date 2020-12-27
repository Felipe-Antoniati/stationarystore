import Link from "next/link";

export default function HeaderPage({
  title,
  children,
  previous,
  current,
  hrefPrevious,
  hrefCurrent,
}) {
  return (
    <section className="header-page">
      <div className="header-content">
        <div className="header-content-left">
          <div className="nav-link-top">
            <Link href={hrefPrevious}>
              <a className="previous-page">
                <span>{previous}</span>
              </a>
            </Link>
            <Link href={hrefCurrent}>
              <a className="current-page">
                <span>{current}</span>
              </a>
            </Link>
          </div>
          <h3>{title}</h3>
        </div>
        <div className="header-content-right">
          {children}
        </div>
      </div>
    </section>
  );
}
