
import "./SchoolMaterial.css";
import { useCart } from "../ShoppingCar/CartContext"; 
import caderno from "../../assets/images/caderno.png";
import mochilas from "../../assets/images/mochila.png";
import livro from "../../assets/images/livro.png";
import sacolaIcon from "../../assets/icons/sacolaIcon.png";
import { useState } from "react";
import ShoppingCart from "../ShoppingCar/ShoppingCar";

function SchoolMaterial() {
  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false); 

  return (
    <section className="materialSection">
      <div className="materialHeader">
        <h1 className="materialTitle">Material Escolar</h1>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
        </button>
      </div>

      <div className="materialCategoria">
        <div className="bag">
          <img src={mochilas} alt="Mochila + Estojo" />
          <p className="mochila">
            Mochila + Estojo: <br />
            Usados, mas super bem cuidados, perfeitos para acompanhar a rotina escolar ou do dia a dia.
          </p>
          <button
            type="button"
            className="btn-add"
            onClick={() => {
              addToCart({
                id: 1,
                name: "Mochila + Estojo",
                description:
                  "Usados, mas super bem cuidados, perfeitos para acompanhar a rotina escolar ou do dia a dia.",
                image: mochilas,
              });
              setIsCartOpen(true);
            }}
          >
            Adicionar à sacola
          </button>
        </div>

        <div className="book">
          <img src={livro} alt="Livro Paradidático 1984" />
          <p className="livro">
            Livro Paradidático “1984”: <br />
            Leitura enriquecedora, ideal para estudantes e amantes da literatura.
          </p>
          <button
            type="button"
            className="btn-add"
            onClick={() => {
              addToCart({
                id: 2,
                name: "Livro Paradidático 1984",
                description:
                  "Leitura enriquecedora, ideal para estudantes e amantes da literatura.",
                image: livro,
              });
              setIsCartOpen(true);
            }}
          >
            Adicionar à sacola
          </button>
        </div>

        <div className="notebook">
          <img src={caderno} alt="Conjunto de cadernos" />
          <p className="cadernos">
            Conjunto de cadernos: <br />
            Já utilizados parcialmente, mas com bastante espaço livre para novas anotações.
          </p>
          <button
            type="button"
            className="btn-add"
            onClick={() => {
              addToCart({
                id: 3,
                name: "Conjunto de cadernos",
                description:
                  "Já utilizados parcialmente, mas com bastante espaço livre para novas anotações.",
                image: caderno,
              });
              setIsCartOpen(true);
            }}
          >
            Adicionar à sacola
          </button>
        </div>
      </div>

      {isCartOpen && <ShoppingCart onClose={() => setIsCartOpen(false)} />}
    </section>
  );
}

export default SchoolMaterial;
