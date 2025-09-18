import "./Uniform.css";
import { useCart } from "../ShoppingCar/CartContext";
import camisetaSesi from "../../assets/images/camisetaSesi.png";
import calca from "../../assets/images/calca.png";
import moletom from "../../assets/images/moletom.png";
import sacolaIcon from "../../assets/icons/sacolaIcon.png";
import { useState } from "react";
import ShoppingCart from "../ShoppingCar/ShoppingCar";

function SchoolMaterial() {
  const { addToCart } = useCart();
   const [isCartOpen, setIsCartOpen] = useState(false); 

  return (
    <section className="uniformSection">
       <div className="materialHeader">
        <h1 className="uniformTitle">Uniformes</h1>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
        </button>
      </div>
      <div className="uniformCategoria">
        <div className="shirt">
          <img src={camisetaSesi} alt="" />
          <p className="camiseta">
            Camiseta do SESI: <br />
            Leve, confortável e prática para o dia a dia escolar.
          </p>
          <p className="uniformDescription">Tamanho: M</p>
            <button
              type="button"
              className="btn-add"
              onClick={() =>{
                addToCart({
                  id: 6,
                  name: "Camiseta SESI",
                  description:
                    "Leve, confortável e prática para o dia a dia escolar.",
                  image: camisetaSesi,
                })
                setIsCartOpen(true);
              }}
            >
              Adicionar a sacola
            </button>
        </div>
        <div className="pants">
          <img src={calca} alt="" />
          <p className="calcas">
            Calça do SESI: <br />
            Resistente e confortável, feita para a rotina escolar.
          </p>
          <p className="uniformDescription">Tamanho: M</p>
            <button
              type="button"
              className="btn-add"
              onClick={() =>{
                addToCart({
                  id: 6,
                  name: "Calça SESI",
                  description:
                    "Resistente e confortável, feita para a rotina escolar.",
                  image: calca,
                })
                setIsCartOpen(true);
              }}
            >
              Adicionar a sacola
            </button>
        </div>
        <div
          className="sweatshirt"
        >
          <img src={moletom} alt="" />
          <p className="moletons">
            Moletom do SESI: <br />
            Macio e quentinho, ideal para os dias frios.
          </p>
          <p className="uniformDescription">Tamanho: P</p>
            <button
              type="button"
              className="btn-add"
              onClick={() =>{
                addToCart({
                  id: 6,
                  name: "Moletom SESI",
                  description: "Macio e quentinho, ideal para os dias frios.",
                  image: moletom,
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
