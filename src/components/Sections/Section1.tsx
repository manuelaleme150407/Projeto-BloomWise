import mesa from "../../assets/images/mesa.png";
import menina from "../../assets/images/menina.png";
import roupas from "../../assets/images/roupas.png";
import "./Section1.css";

function Section1() {
  return (
    <div className="secoes">
      <h1>
        Seções <span className="coloredLetter">d</span>isponíveis
      </h1>
      <div className="card">
        <div className="uniforme">
          <img src={roupas} alt="" />
          <h2 className="titleSecoes">Uniformes e Roupas</h2>
          <p>
            Uniformes escolares e <br />
            roupas no geral
          </p>
        </div>
        <div className="material">
          <img src={mesa} alt="" />
          <h2 className="titleSecoes">Material Escolar</h2>
          <p>Mochilas, cadernos, estojos, lápis, borrachas e muito mais!</p>
        </div>
        <div className="acessorios">
          <img src={menina} alt="" />
          <h2 className="titleSecoes">Acessórios Eletrônicos</h2>
          <p>Mouse, fones de ouvido, teclado, entre outros</p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
