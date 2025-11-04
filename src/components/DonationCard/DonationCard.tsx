// import React from "react";
import "./DonationCard.css";

interface DoacaoCardProps {
  titulo: string;
  descricao: string;
  imagemUrl: string;
  addToCart: () => void;
}

export default function DonationCard({ titulo, descricao, imagemUrl, addToCart }: DoacaoCardProps) {
  return (
    <div className="card-doacao">
      <img src={imagemUrl} alt={titulo} className="card-imagem" />
      <p className="card-titulo">{titulo}</p>
      <p className="card-descricao">{descricao}</p>
      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  );
}

