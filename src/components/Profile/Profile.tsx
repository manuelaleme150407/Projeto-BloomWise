import "./Profile.css";
import React from "react";
import { useCart } from "../../components/ShoppingCar/CartContext";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/icons/sacolaIcon.png";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { purchasedItems } = useCart();

  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const usuario = usuarioLogado ? JSON.parse(usuarioLogado) : null;

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-left">
          <h1>
            Olá, <span className="username">{usuario?.nome || "Usuário"}</span>.
          </h1>
          <p className="selected-items">Itens selecionados:</p>

          <div className="items-grid">
            {purchasedItems.length > 0 ? (
              purchasedItems.map((item) => (
                <div key={item.id} className="item-box">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                  <p className="item-name">{item.name}</p>
                </div>
              ))
            ) : (
              <p className="no-items">Nenhum item selecionado.</p>
            )}
          </div>
        </div>

        <div className="profile-right">
          <div className="user-circle">
            <img src={userIcon} alt="Usuário" />
          </div>
          <button className="logout-btn" onClick={() => navigate("/whoAreYou")}>
            Voltar
          </button>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("usuarioLogado");
              navigate("/");
            }}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
