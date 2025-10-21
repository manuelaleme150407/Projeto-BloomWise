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

  //  return (
  //   <div className="register-page">
  //     <form onSubmit={handleSubmit} className="form-container-register">
  //       <div className="top-parte-register">
  //         <h1>Cadastro</h1>
  //       </div>

  //       <input
  //         type="text"
  //         name="nome"
  //         placeholder="Nome"
  //         value={formData.nome}
  //         onChange={handleChange}
  //       />

  //       <input
  //         type="email"
  //         name="email"
  //         placeholder="Email"
  //         value={formData.email}
  //         onChange={handleChange}
  //       />

  // <div className="senha-container">
  //   <input
  //     type={showSenha ? "text" : "password"}
  //     name="senha"
  //     placeholder="Senha"
  //     value={formData.senha}
  //     onChange={handleChange}
  //   />

  //         <button
  //           type="button"
  //           onClick={toggleSenha}
  //           className="btn-view-password"
  //         >
  //           {showSenha ? "Ocultar" : "Mostrar"}
  //         </button>
  //       </div>

  //       <button type="submit" disabled={loading}>
  //         {loading ? "Cadastrando..." : "Cadastrar"}
  //       </button>

  //       <p className="login-link">
  //         Já possui uma conta?{" "}
  //         <button type="button" onClick={() => navigate("/loginn")} className="btn-login">
  //           Login
  //         </button>
  //       </p>
  //     </form>
  //   </div>
  // );
  return (
    <div>
      <div
        className="signup-container"
        style={{ backgroundImage: `url(${signup})` }}
      >
        
          <div className="left-side">
            <h2>Comece sua Jornada!</h2>
            <form onSubmit={handleSubmit} className="form-container-register">
            <div className="sign-group">
              <img src={id} alt="Nome" />
              <input
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
                  type={showSenha ? "text" : "password"}
                  name="senha"
                  placeholder="Senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
                <button 
                  type="button"
                  onClick={toggleSenha}
                  // className="ente"
                >
                  {showSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>     

              <button className="enter" type="submit" disabled={loading}>12
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button> 
              {/* <Link to="/whoAreYou">
              <button className="enter">Cadastrar</button>
            </Link> */}
    
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
};

export default Signup;
