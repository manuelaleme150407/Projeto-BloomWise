import "./Maps.css";
import { Link } from "react-router-dom";

function Maps() {
  return (
    <section className="maps-section">
      <div className="maps-content">
        <h2 className="maps-title">OPÇÕES DE RETIRADA:</h2>

        <p className="maps-text">
          Todos os itens disponibilizados para doação poderão ser retirados
          diretamente na escola SESI Mangal, em Sorocaba, no endereço:
        </p>

        <p className="maps-address">
          Rua Duque de Caxias, 494 - Mangal, <br />
          Sorocaba, SP, CEP 18040-425
        </p>

        <p className="maps-text">em horário de funcionamento.</p>

        <p className="maps-link">
          Clique{" "}
          <a
            href="https://www.google.com/maps/place/R.+Duque+de+https://www.google.com/maps/place/Sesi+123+Centro+Educacional/@-23.5073602,-47.4714361,17z/data=!3m1!4b1!4m6!3m5!1s0x94c58aeaa2555c8d:0x9a73912099883b51!8m2!3d-23.5073602!4d-47.4688612!16s%2Fg%2F1tcv2k8m?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D,+494+-+Mangal,+Sorocaba+-+SP,+18040-425"
            target="_blank"
            rel="noopener noreferrer"
          >
            aqui
          </a>{" "}
          para ir para o Maps
        </p>
      </div>

      <div className="maps-map">
        <iframe
          title="Localização SESI Mangal"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.254528449038!2d-47.46794842569461!3d-23.5225741603379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58ae10ee3d4f3%3A0x74aa604ac2d56a1e!2sR.%20Duque%20de%20Caxias%2C%20494%20-%20Mangal%2C%20Sorocaba%20-%20SP%2C%2018040-425!5e0!3m2!1spt-BR!2sbr!4v1695000000000!5m2!1spt-BR!2sbr"
          width="400"
          height="300"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
      <Link to="/Profile" className="btn-to-profile">
        Acesse seu perfil
      </Link>
    </section>
  );
}

export default Maps;
