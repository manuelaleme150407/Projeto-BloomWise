import React from "react";
import "./DoacaoCard.css";

interface DoacaoCardProps {
  doacao:{
  titulo: string;
  categoria: string;
  descricao: string;
  selectedFile: File;
  previewImage: string;
  };
}

const DoacaoCard: React.FC<DoacaoCardProps> = ({doacao}) => {
  return(
    <div className="doacao-card">
      <img src={doacao.previewImage} alt="" />
      <h3>{doacao.titulo}</h3>
      <p><strong>Categoria:</strong> {doacao.categoria}</p>
      <p><strong>Descrição:</strong> {doacao.descricao}</p>
      </div>
  )
}

export default DoacaoCard;