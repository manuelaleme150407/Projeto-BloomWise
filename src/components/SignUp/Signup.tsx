import signup from "../../assets/images/signup.png";
import id from "../../assets/images/id-card.png";
import unlock from "../../assets/images/unlock.png";
import mail from "../../assets/images/mail.png";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div
        className="signup-container"
        style={{ backgroundImage: `url(${signup})` }}
      >
        <div className="left-side">
          <h2>Comece sua Jornada!</h2>
          <form className="form-signup">
            <div className="sign-group">
              <img src={id} alt="Nome" />
              <input type="Nome" placeholder="Nome" />
            </div>
            <div className="sign-group">
              <img src={mail} alt="E-mail" />
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="sign-group">
              <img src={unlock} alt="Senha" />
              <input type="password" placeholder="Senha" />
            </div>
            <Link to="/whoAreYou">
              <button className="enter">Cadastrar</button>
            </Link>
          </form>
          <Link to="/login">
            <p className="signup">
              Já tem uma conta? <a href="#">Entre aqui</a>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
