import "./Receiver.css";
import fundoReceptor from "../../assets/images/fundoReceiver.png";
import pinceis from "../../assets/images/pinceis.png";
import criancas from "../../assets/images/criancas.png";
import computador from "../../assets/images/computador.png";
import { Link } from "react-router-dom";

function Receiver() {
  return (
    <section className="receiver-container">
      <div className="fundo">
        <img
          src={fundoReceptor}
          alt="imagem receptor"
          className="fundoReceiver"
        />
        <h1 className="mensagem">Olá, receptor.</h1>
      </div>
      <div className="receiverInformation">
        <p className="receiverText">
          Clique na <span className="differentWord">categoria</span> desejada.
        </p>
      </div>
      <div className="categoria">
        <Link to="/SchoolMaterial">
          <div
            className="material"
            style={{overflow: "hidden", backgroundImage: `url(${pinceis})`}}
          >
            <p className="categoria-title">Material Escolar</p>
          </div>
        </Link>
        <Link to={"/Uniform"}>
          <div
            className="criancas"
            style={{ backgroundImage: `url(${criancas})` }}
          >
            <p className="categoria-title">Uniformes</p>
          </div>
        </Link>
        <Link to="/Eletronics">
          <div
            className="computador"
            style={{ backgroundImage: `url(${computador})` }}
          >
            <p className="categoria-title">
              Aparelhos <br />
              eletrônicos
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Receiver;
