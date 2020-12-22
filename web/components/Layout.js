import Navbar from "./Navbar";
import NavList from "./Navlist";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <NavList />
      {children}
    </>
  );
}
