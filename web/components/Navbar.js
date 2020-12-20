import { useState } from "react";
import Link from "next/link";
import { SidebarData } from "./SidebarData";

import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import aguiarLogo from "../images/logo.svg";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left w33">
          <div className="menu-navbar" onClick={showSidebar}>
            <a>
              <AiIcons.AiOutlineMenu size={25} />
            </a>
          </div>
          <div className="logo">
            <img src={aguiarLogo} alt="Aguiar Papelaria" />
          </div>
        </div>

        <div className="nav-middle w33">
          <form action="" className="nav-search-bar">
            <div className="nav-fill">
              <div className="nav-search-field">
                <input type="text" className="nav-input" />
              </div>
              <div className="nav-search-submit">
                <AiIcons.AiOutlineSearch size={25} color="#FBFBFF"/>
              </div>
            </div>
          </form>
        </div>

        <div className="nav-right w33">
          <div className="nav-link-acount">
            <CgIcons.CgProfile size={30} />
            <div className="nav-link-text">
              <span className="nav-line-one">Seja bem vindo</span>
              <span className="nav-line-two">Faça seu Login</span>
            </div>
          </div>
          <div className="cart">
            <AiIcons.AiOutlineShoppingCart size={30} />
            <div className="nav-link-text">
              <span className="nav-line-one">Carrinho</span>              
            </div>
          </div>
        </div>
      </nav>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link href="#">
              <a className="menu-bars">
                <AiIcons.AiOutlineClose />
              </a>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link href={item.path}>
                  <a>
                    <span className="cName">{item.title}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
