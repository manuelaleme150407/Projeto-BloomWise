import "./ThankYouPage.css";
import agradecimento from "../../assets/images/agradecimento.png";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <section className="thank-you-container">
      <div className="thank-you-content"  style={{ backgroundImage: `url(${agradecimento})`}} >
        <h1 className="thank-you-message">Obrigado por sua doação!</h1>
        <Link to="/Giver">
              <p className="thank-you-text">
                Deseja doar mais itens? <a href="#">Clique aqui</a>
              </p>
            </Link>
            <button className="btn-thank-you"><Link to="/Home">Voltar para tela inicial</Link></button>
      </div>
    </section>
  );
}

export default ThankYouPage;