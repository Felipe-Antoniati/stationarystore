import Card from "../components/Card";

import imgOne from "../images/products/1.png";
import imgTwo from "../images/products/2.png";
import imgThree from "../images/products/3.png";
import imgFour from "../images/products/4.png";
import imgFive from "../images/products/5.png";
import imgSix from "../images/products/6.png";
import imgSeven from "../images/products/7.png";
import imgEight from "../images/products/8.png";
import imgNine from "../images/products/9.png";

export default function Home() {
  return (
    <>
      <main className="highlights">
        <div className="featured-items w33">
          <Card
            dir={imgOne}
            title="LAPIS 12 CORES TONS PASTEL TRIS"
            subtitle="R$ 19, 90"
          />
          <Card
            dir={imgTwo}
            title="CANETA CIS BRUSH DUAL TIP COM 10 UNIDADES"
            subtitle="R$ 49, 90"
          />
          <Card
            dir={imgThree}
            title="CANETA CIS BRUSH TONS DE CINZA  COM 6 UNIDADES"
            subtitle="R$ 89, 90"
          />
        </div>
        <div className="featured-items w33">
          <Card
            dir={imgFour}
            title="CANETA CIS BRUSH TONS DE PELE COM 6 UNIDADES"
            subtitle="R$ 89, 90"
          />
          <Card
            dir={imgFive}
            title="CANETA CIS BRUSH METALICA COM 6 UNIDADES"
            subtitle="R$ 18, 90"
          />
          <Card
            dir={imgSix}
            title="CANETA MARCA TEXTO STABILO BOSS"
            subtitle="R$ 9, 90"
          />
        </div>
        <div className="featured-items w33">
          <Card
            dir={imgSeven}
            title="LAPIS 12 CORES MULTICOLOR NOVAS CORES"
            subtitle="R$ 9, 90"
          />
          <Card
            dir={imgEight}
            title="LAPIS 36 CORES MULTICOLOR NOVAS CORES"
            subtitle="R$ 27, 90"
          />
          <Card
            dir={imgNine}
            title="LAPIS 24 CORES MULTICOLOR NOVAS CORES"
            subtitle="R$ 18, 90"
          />
        </div>
      </main>
    </>
  );
}
