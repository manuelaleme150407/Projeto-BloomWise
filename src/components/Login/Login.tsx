import logIn from "../../assets/images/logIn.png";
import "./Login.css";

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
        <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="E-mail" />
        <input type="email" placeholder="E-mail" />
      </div>
      <div className="input-group">
        <img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="Senha" />
        <input type="password" placeholder="Senha" />
      </div>
      <button className="entrar">Entrar</button>
    </form>
    <p className="signup">Ainda não tem uma conta? <a href="#">Crie aqui</a></p>
    </div>
      </div>
  </div>
  );
}

export default Login;
