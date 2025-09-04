import logIn from "../../assets/images/logIn.png";
import unlock from '../../assets/images/unlock.png';
import mail from '../../assets/images/mail.png';
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div
        className="login-container"
        style={{ backgroundImage: `url(${logIn})` }}
      >
       <div className="right-side">
    <h2>Bem Vindo de Volta!</h2>
    <form className="form">
      <div className="input-group">
        <img src={mail} alt="E-mail" />
        <input type="email" placeholder="E-mail" />
      </div>
      <div className="input-group">
        <img src={unlock} alt="Senha" />
        <input type="password" placeholder="Senha" />
      </div>
      <Link to="/whoAreYou">
      <button className="entrar">Entrar</button>
      </Link>
    </form>
    <Link to="/signup">
    <p className="signup">Ainda não tem uma conta? <a href="#">Crie aqui</a></p>
    </Link>
    </div>
      </div>
  </div>
  );
}

export default Login;
