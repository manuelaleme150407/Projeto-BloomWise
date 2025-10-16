import logIn from "../../assets/images/logIn.png";
import unlock from "../../assets/images/unlock.png";
import mail from "../../assets/images/mail.png";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { api } from "../../api";

interface LoginProps{
    loginFn: (user: User) => void;
}

interface FormData {
    email: string;
    senha: string;
}

const Login: React.FC<LoginProps> = ({loginFn}) => {
    const [formData, setFormData] = useState<FormData>({
        email:"",
        senha:"",
    });
     const [loading, setLoading] = useState(false);
      const [showSenha, setShowSenha] = useState(false);
      const navigate = useNavigate();
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const toggleSenha = () => setShowSenha((prev) => !prev);

      const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try{
            const res = await api.post("/usuario/login", {
                email: formData.email,
                senha: formData.senha
            });
    
            const user: User = res.data;

            if(!user) {
                alert("Email ou senha inválidos!");
                setLoading(false);
                return;
            }

            loginFn(user);
            localStorage.setItem("usuarioLogado", JSON.stringify(user));

            navigate("/");
        }catch(err: any){
            console.error(err);
            if(err.response?.status === 401){
                alert("Email ou senha inválidos!");
            }else{
                alert("Erro na autenticação. Tente novamente.")
            }
        } finally{
            setLoading(false)
        }
      }
  return (

    <div className="register-page">
      <form onSubmit={handleSubmit} className="form-container-login">
        <div className="top-parte-login">
          <h1>Login</h1>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="senha-container">
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
            className="btn-view-password"
          >
            {showSenha ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <p className="register-link">
         Não possui uma conta?{" "}
          <button type="button" onClick={() => navigate("/signUp")} className="btn-register">
            Cadastre-se
          </button>
        </p>
      </form>
    </div>
  );
      
    // <div>
    //   <div
    //     className="login-container"
    //     style={{ backgroundImage: `url(${logIn})` }}
    //   >
    //     <div className="right-side">
    //       <h2>Bem Vindo de Volta!</h2>
    //       <form className="form">
    //         <div className="input-group">
    //           <img src={mail} alt="E-mail" />
    //           <input type="email" placeholder="E-mail" required />
    //         </div>
    //         <div className="input-group">
    //           <img src={unlock} alt="Senha" />
    //           <input type="password" placeholder="Senha" required />
    //         </div>
    //         <Link to="/whoAreYou">
    //           <button className="entrar">Entrar</button>
    //         </Link>
    //       </form>
    //       <Link to="/signup">
    //         <p className="signup">
    //           Ainda não tem uma conta? <a href="#">Crie aqui</a>
    //         </p>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
};

export default Login;
