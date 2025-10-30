// Uniform.tsx
import "./Uniform.css";
import { useCart } from "../ShoppingCar/CartContext";
import camisetaSesi from "../../assets/images/camisetaSesi.png";
import calca from "../../assets/images/calca.png";
import moletom from "../../assets/images/moletom.png";
import sacolaIcon from "../../assets/icons/sacolaIcon.png";
import { useState } from "react";
import ShoppingCart from "../ShoppingCar/ShoppingCar";
import { Link } from "react-router-dom";

function Uniform() {
  const { addToCart, isPurchased } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 7,
      name: "Camiseta SESI",
      description: "Leve, confortável e prática para o dia a dia escolar.",
      image: camisetaSesi,
      className: "shirt",
      pClass: "camiseta",
      size: "M",
    },
    {
      id: 8,
      name: "Calça SESI",
      description: "Resistente e confortável, feita para a rotina escolar.",
      image: calca,
      className: "pants",
      pClass: "calcas",
      size: "M",
    },
    {
      id: 9,
      name: "Moletom SESI",
      description: "Macio e quentinho, ideal para os dias frios.",
      image: moletom,
      className: "sweatshirt",
      pClass: "moletons",
      size: "P",
    },
  ];

  return (
    <section className="uniformSection">
      <div className="materialHeader">
        <h1 className="uniformTitle">Uniformes</h1>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
        </button>
      </div>
      <div className="uniformCategoria">
        {products
          .filter((p) => !isPurchased(p.id))
          .map((p) => (
            <div key={p.id} className={p.className}>
              <img src={p.image} alt={p.name} />
              <p className={p.pClass}>
                {p.name}: <br />
                {p.description}
              </p>
              <p className="uniformDescription">Tamanho: {p.size}</p>
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
      </div>
      <Link to="/Receiver" className="arrow-button"></Link>

      {isCartOpen && <ShoppingCart onClose={() => setIsCartOpen(false)} />}
    </section>
  );
}

export default Uniform;
