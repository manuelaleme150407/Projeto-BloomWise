import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="BloomWise Logo" />
        </div>

        <div className="footer-infos">
          <h3>Infos</h3>
          <p>
            R. Duque de Caxias, 494 - Mangal,
            <br />
            Sorocaba - SP, 18040-350
          </p>
          <p>bloomwise@gmail.com</p>
        </div>

        <div className="footer-hours">
          <h3>Horários de funcionamento</h3>
          <p>Segunda - Sexta: 8:00 – 18:00</p>
        </div>
      </div>

      <div className="footer-social">
        <h3>Redes Sociais</h3>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 BloomWise. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
