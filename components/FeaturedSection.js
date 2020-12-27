import Card from "./Card";
import * as ProductData from "./ProductData";

import imgOne from "../images/products/1.png";
import imgTwo from "../images/products/2.png";
import imgThree from "../images/products/3.png";
import imgFour from "../images/products/4.png";
import imgFive from "../images/products/5.png";
import imgSix from "../images/products/6.png";
import imgSeven from "../images/products/7.png";
import imgEight from "../images/products/8.png";
import imgNine from "../images/products/9.png";

export default function FeaturedSection() {
  return (
    <section className="featured-container">    
      <div className="featured-items w33">
      {ProductData.row1.map((image) => {
        return (
            <Card
              key={image.id}
              dir={image.productImage}
              title={image.productName}
              subtitle={image.price}
              altName={image.tag}
            />
            );
          })}
        </div>      
        <div className="featured-items w33">
      {ProductData.row2.map((image) => {
        return (
            <Card
              key={image.id}
              dir={image.productImage}
              title={image.productName}
              subtitle={image.price}
              altName={image.tag}
            />
            );
          })}
        </div>      
        <div className="featured-items w33">
      {ProductData.row3.map((image) => {
        return (
            <Card
              key={image.id}
              dir={image.productImage}
              title={image.productName}
              subtitle={image.price}
              altName={image.tag}
            />
            );
          })}
        </div>
    </section>
  );
}
