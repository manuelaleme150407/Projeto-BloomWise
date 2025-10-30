// Eletronics.tsx
import "./Eletronics.css";
import { useCart } from "../ShoppingCar/CartContext";
import foneOuvido from "../../assets/images/fone.png";
import calculadora from "../../assets/images/calculadora.png";
import mouseImagem from "../../assets/images/mouse.png";
import sacolaIcon from "../../assets/icons/sacolaIcon.png";
import { useState } from "react";
import ShoppingCart from "../ShoppingCar/ShoppingCar";
import { Link } from "react-router-dom";

function Eletronics() {
  const { addToCart, isPurchased } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 4,
      name: "Fone de ouvido (Beats)",
      description: "Som de qualidade e conforto para estudos e foco.",
      image: foneOuvido,
      className: "earphone",
      pClass: "fones",
    },
    {
      id: 5,
      name: "Calculadora científica",
      description: "Ferramenta prática para cálculos avançados em T.I. e exatas.",
      image: calculadora,
      className: "calculator",
      pClass: "calculadoras",
    },
    {
      id: 6,
      name: "Mouse",
      description: "Agilidade e precisão no uso diário do computador.",
      image: mouseImagem,
      className: "mouse",
      pClass: "mouses",
    },
  ];

  return (
    <section className="eletronicsSection">
      <div className="materialHeader">
        <h1 className="eletronicsTitle">Aparelhos Eletrônicos</h1>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
        </button>
      </div>
      <div className="eletronicsCategoria">
        {products
          .filter((p) => !isPurchased(p.id))
          .map((p) => (
            <div key={p.id} className={p.className}>
              <img src={p.image} alt={p.name} />
              <p className={p.pClass}>
                {p.name}: <br />
                {p.description}
              </p>
              <button
                type="button"
                className="btn-add"
                onClick={() => {
                  addToCart({
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    image: p.image,
                  });
                  setIsCartOpen(true);
                }}
              >
                Adicionar a sacola
              </button>
            </div>
          ))}
          <Link to="/Receiver" className="arrow-button"></Link>

      </div>

      {isCartOpen && <ShoppingCart onClose={() => setIsCartOpen(false)} />}
    </section>
  );
}

export default Eletronics;
