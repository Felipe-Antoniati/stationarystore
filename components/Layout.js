import Navbar from "./Navbar";
import Footer from "./Footer";
import NavList from "./Navlist";

export default function Layout({ children }) {
  return (
    <>
      <header className="header-content">
        <Navbar />
        <NavList />
      </header>
      {children}
        <Footer />
    </>
  );
}
