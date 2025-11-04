
import unlock from "../../assets/images/unlock.png";
import mail from "../../assets/images/mail.png";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  loginFn: (user: User) => void;
}

interface FormData {
  email: string;
  senha: string;
}

const Login: React.FC<LoginProps> = ({ loginFn }) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    senha: "",
  });
  const [loading, setLoading] = useState(false);
  const [showSenha, setShowSenha] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSenha = () => setShowSenha((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/usuario/login", {
        email: formData.email,
        senha: formData.senha,
      });

      const user: User = res.data;

      if (!user) {
        alert("Email ou senha inválidos!");
        setLoading(false);
        return;
      }

      loginFn(user);
      localStorage.setItem("usuarioLogado", JSON.stringify(user));
      navigate("/whoAreYou");
    } catch (err) {
      console.error("Erro de rede:", err);
      alert(
        "Erro ao conectar ao servidor. Verifique sua conexão e tente novamente."
      );
    } finally {
      setLoading(false);
    }
    
  };
  return (
   

    <div>
      <div
        className="login-container"
      >
        
        <div className="right-side">
          <h2>Bem Vindo de Volta!</h2>
          <form onSubmit={handleSubmit} className="form-container-login">
            <div className="input-group">
              <img src={mail} alt="E-mail" />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <img src={unlock} alt="Senha" />
              <input
                type={showSenha ? "text" : "password"}
                name="senha"
                placeholder="Senha"
                required
                value={formData.senha}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={toggleSenha}
                className="btn-view-password"
              >
                {showSenha ? <Eye /> : <EyeOff />}
              </button>
            </div>
            <button type="submit" disabled={loading} className="entrar">
                {loading ? "Entrando..." : "Entrar"}
              </button>
            {/* <Link to="/whoAreYou">
            
            </Link> */}

            <Link to="/signup">
              <p className="signup">
                Ainda não tem uma conta? <a href="#">Crie aqui</a>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
