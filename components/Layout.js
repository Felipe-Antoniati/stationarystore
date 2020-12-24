import Navbar from "./Navbar";
import Footer from "./Footer";
import NavList from "./Navlist";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <NavList />
      {children}
      <Footer />
    </>
  );
}
