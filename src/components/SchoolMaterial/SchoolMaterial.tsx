import "./SchoolMaterial.css";
import { useCart } from "../ShoppingCar/CartContext"; 
import caderno from "../../assets/images/caderno.png";
import mochilas from "../../assets/images/mochila.png";
import livro from "../../assets/images/livro.png";
import sacolaIcon from "../../assets/icons/sacolaIcon.png";
import { useState } from "react";
import ShoppingCart from "../ShoppingCar/ShoppingCar";
import { Link } from "react-router-dom";

function SchoolMaterial() {
  const { addToCart, isPurchased } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const products = [
    {
      id: 1,
      name: "Mochila + Estojo",
      description:
        "Usados, mas super bem cuidados, perfeitos para acompanhar a rotina escolar ou do dia a dia.",
      image: mochilas,
      className: "bag",
      pClass: "mochila",
    },
    {
      id: 2,
      name: "Livro Paradidático 1984",
      description:
        "Leitura enriquecedora, ideal para estudantes e amantes da literatura.",
      image: livro,
      className: "book",
      pClass: "livro",
    },
    {
      id: 3,
      name: "Conjunto de cadernos",
      description:
        "Já utilizados parcialmente, mas com bastante espaço livre para novas anotações.",
      image: caderno,
      className: "notebook",
      pClass: "cadernos",
    },
  ];

  return (
    <section className="materialSection">
      <div className="materialHeader">
        <h1 className="materialTitle">Material Escolar</h1>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
        </button>
      </div>

      <div className="materialCategoria">
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
                Adicionar à sacola
              </button>
            </div>
          ))}
      </div>
      <Link to="/Receiver" className="arrow-button"></Link>

      {isCartOpen && <ShoppingCart onClose={() => setIsCartOpen(false)} />}
    </section>
  );
}

export default SchoolMaterial;
