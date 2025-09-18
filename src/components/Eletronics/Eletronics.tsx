import "./Eletronics.css";
import { useCart } from "../ShoppingCar/CartContext";
import foneOuvido from "../../assets/images/fone.png";
import calculadora from "../../assets/images/calculadora.png";
import mouseImagem from "../../assets/images/mouse.png";
import sacolaIcon from "../../assets/icons/sacolaIcon.png";
import { useState } from "react";
import ShoppingCart from "../ShoppingCar/ShoppingCar";

function SchoolMaterial() {
  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <section className="eletronicsSection">
      <div className="materialHeader">
        <h1 className="eletronicsTitle">Aparelhos Eletrônicos</h1>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
        </button>
      </div>
      <div className="eletronicsCategoria">
        <div className="earphone">
          <img src={foneOuvido} alt="" />
          <p className="fones">
            Fone de ouvido (Beats): <br />
            Som de qualidade e conforto para estudos e foco.
          </p>
            <button
              type="button"
              className="btn-add"
              onClick={() =>{
                addToCart({
                  id: 6,
                  name: "Fones de ouvido",
                  description:
                    " Som de qualidade e conforto para estudos e foco.",
                  image: foneOuvido,
                })
                 setIsCartOpen(true);
              }}
            >
              Adicionar a sacola
            </button>
        </div>
        <div className="calculator">
          <img src={calculadora} alt="" />
          <p className="calculadoras">
            Calculadora científica: <br />
            Ferramenta prática para calculos avançados em T.I. e exatas.
          </p>
            <button
              type="button"
              className="btn-add"
              onClick={() =>{
                addToCart({
                  id: 6,
                  name: "Calculadora científica",
                  description:
                    "Ferramenta prática para calculos avançados em T.I. e exatas.",
                  image: calculadora,
                })
                 setIsCartOpen(true);
              }}
            >
              Adicionar a sacola
            </button>
        
        </div>
        <div className="mouse">
          <img src={mouseImagem} alt="" />
          <p className="mouses">
            Mouse: <br />
            Agilidade e precisão no uso diário do computador.
          </p>
            <button
              type="button"
              className="btn-add"
              onClick={() =>{
                addToCart({
                  id: 6,
                  name: "Mouse",
                  description:
                    "Agilidade e precisão no uso diário do computador.",
                  image: mouseImagem,
                })
                 setIsCartOpen(true);
              }}
            >
              Adicionar a sacola
            </button>
        </div>
      </div>
      {isCartOpen && <ShoppingCart onClose={() => setIsCartOpen(false)} />}
    </section>
  );
}

export default SchoolMaterial;
