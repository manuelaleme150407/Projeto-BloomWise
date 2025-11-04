import signup from "../../assets/images/signup.png";
import id from "../../assets/images/id-card.png";
import unlock from "../../assets/images/unlock.png";
import mail from "../../assets/images/mail.png";
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../hooks/useAuth";
import { api } from "../../api";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"

interface FormData {
  nome: string;
  email: string;
  senha: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
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
      const response = await api.post("/usuario/", {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
      });

      alert("Cadastro realizado com sucesso!");
      localStorage.setItem("usuarioId", response.data.idUsuario);
      navigate("/loginn");
    } catch (error: any) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Falha ao cadastrar usuário. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <div
        className="signup-container"
        // style={{ backgroundImage: `url(${signup})` }}
      >
        
          <div className="left-side">
            <h2>Comece sua Jornada!</h2>
            <form onSubmit={handleSubmit} className="form-container-register">
            <div className="sign-group">
              <img src={id} alt="Nome" />
              <input
                required
                type="text"
                placeholder="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div className="sign-group">
              <img src={mail} alt="E-mail" />
              <input
                required
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              </div>
              <div className="sign-group">
                <img src={unlock} alt="senha" />
                <input
                  required
                  type={showSenha ? "text" : "password"}
                  name="senha"
                  placeholder="Senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
                <button 
                  type="button"
                  onClick={toggleSenha}
                  
                >
                  {showSenha ? <Eye className="eye" /> : <EyeOff className="eye" />}
                </button>
              </div>     

              <button className="enter" type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button> 
              {/* <Link to="/whoAreYou">
              <button className="enter">Cadastrar</button>
            </Link> */}
    
            </form>
            <Link to="/loginn">
                <p className="signup">
                  Já tem uma conta? <a href="#">Entre aqui</a>
                </p>
              </Link>
          </div>
      </div>
</div>
  );
};

export default Signup;
