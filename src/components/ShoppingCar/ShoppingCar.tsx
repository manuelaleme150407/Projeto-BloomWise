// ShoppingCar.tsx
import React from "react";
import { useCart } from "./CartContext";
import "./ShoppingCar.css";
import { Link } from "react-router-dom";

type Props = {
  onClose: () => void;
};

function ShoppingCart({ onClose }: Props) {
  const { cart, finalizePurchase } = useCart();

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-panel">
        <button className="cart-close" onClick={onClose}>✖</button>
        <h2>MINHA SACOLA</h2>

        {cart.length === 0 ? (
          <p>Sua sacola está vazia.</p>
        ) : (
          <>
            <div className="cart-items-container">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p><strong>Quantidade de produtos:</strong> {cart.length}</p>
            <p><strong>Total:</strong> R$ 0,00</p>
            <Link to="/Maps">
              <button className="cart-finalizar" onClick={finalizePurchase}>
                FINALIZAR COMPRA
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
