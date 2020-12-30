import Link from "next/link";

export default function HeaderPage({
  title,
  previous,
  current,
  hrefPrevious,
  hrefCurrent,
  children,
}) {
  return (
    <section className="header-page">
      <div className="header-page-content">
        <div className="header-content-left">
          <div className="nav-link-top">
            <Link href={hrefPrevious}>
              <a className="previous-page">
                <span>{previous}</span>
              </a>
            </Link>
            &gt;
            <span className="current-page">{current}</span>
          </div>
          <h3>{title}</h3>
        </div>
        <div className="header-content-right">{children}</div>
      </div>
    </section>
  );
}
