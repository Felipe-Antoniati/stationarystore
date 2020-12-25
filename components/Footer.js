import Link from "next/link";

import aguiarLogo from "../images/logo.svg";

import googlePlayImg from "../images/google-play.png";
import appleStoreImg from "../images/app-store.png";

import * as AiIcons from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content grid grid-3">
        <div className="left-footer">
          <h2>Sobre nós</h2>
          <p>
            Somos uma empresa familiar, que presa pela qualidade e o bom
            atentimento. Fundada em 1999 estamos a mais de 20 anos no mercado,
            com milhares de clientes satisfeitos!
          </p>
        </div>

        <div className="middle-footer">
          <div>
            <h3>Baixe o Aplicativo</h3>
            <div className="apps-platforms">
              <div className="g-play">
                <img src={googlePlayImg} alt="Google Play" />
              </div>
              <div className="a-store">
                <img src={appleStoreImg} alt="Google Play" />
              </div>
            </div>
          </div>
          <div className="social">
            <h3>Siga a gente</h3>
            <div className="social-medias">
              <Link href="/">
                <a className="facebook">
                  <AiIcons.AiOutlineFacebook size={40} />
                </a>
              </Link>
              <Link href="/">
                <a className="instagram">
                  <AiIcons.AiOutlineInstagram size={40} />
                </a>
              </Link>
              <Link href="/">
                <a className="twitter">
                  <AiIcons.AiOutlineTwitter size={40} />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="right-footer">
          <img src={aguiarLogo} alt="Aguiar Papelaria" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
