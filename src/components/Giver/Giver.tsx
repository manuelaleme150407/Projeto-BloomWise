import "./Giver.css";
import { api } from "../../api";
import fundoGiver from "../../assets/images/fundoGiver.png";
import type React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import type { User } from "../../hooks/useAuth";

interface GiverProps {
  user: User | null;
}

const Giver: React.FC<GiverProps> = ({ user }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");

  const navigate = useNavigate();

  // 🔹 Pré-visualização da imagem
  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // 🔹 Envio do formulário
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Por favor, selecione uma imagem.");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("categoria", categoria);
    formData.append("descricao", descricao);
    formData.append("imagem", selectedFile);

    try {
      await api.post("/doacao", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Doação cadastrada com sucesso!");

      // 🔹 Redireciona de acordo com a categoria
      if (categoria === "material escolar") {
        navigate("/doacoes/SchoolMaterial");
      } else if (categoria === "aparelhos eletrônicos") {
        navigate("/Eletronics");
      } else if (categoria === "uniformes") {
        navigate("/doacoes/Uniform");
      } else {
        navigate("/"); // fallback
      }
    } catch (error) {
      console.error("Erro ao cadastrar doação:", error);
      alert("Erro ao cadastrar a doação. Tente novamente.");
    }
  };

  return (
    <form className="giverSection" onSubmit={submit}>
      <div className="divInicial">
        <img src={fundoGiver} alt="imagem voluntária" className="fundoGiver" />
        <h1 className="welcomeMessage">Olá, doador.</h1>
      </div>

      <div className="giverInformation">
        <div className="giverTotal">
          <p className="giverText">
            Insira as <span className="differentLetter">informações</span> seguintes:
          </p>

          <input
            type="text"
            className="inputGiver"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="nome do item (ex.: livro, lápis, etc.)"
          />
          <br />

          <input
            type="text"
            className="inputGiver"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="descrição do item"
          />
          <br />

          <div className="categoryGroup">
            <p className="categoryTitle">selecione a categoria:</p>

            <label className="categoryRadio">
              <input
                type="radio"
                name="categoria"
                value="material escolar"
                checked={categoria === "material escolar"}
                onChange={(e) => setCategoria(e.target.value)}
              />
              <span className="customRadio"></span>
              material escolar
            </label>

            <label className="categoryRadio">
              <input
                type="radio"
                name="categoria"
                value="aparelhos eletrônicos"
                checked={categoria === "aparelhos eletrônicos"}
                onChange={(e) => setCategoria(e.target.value)}
              />
              <span className="customRadio"></span>
              aparelhos eletrônicos
            </label>

            <label className="categoryRadio">
              <input
                type="radio"
                name="categoria"
                value="uniformes"
                checked={categoria === "uniformes"}
                onChange={(e) => setCategoria(e.target.value)}
              />
              <span className="customRadio"></span>
              uniformes
            </label>
          </div>
        </div>

        <div className="upload">
          <label htmlFor="uploadFile" className="uploadBox">
            <p className="uploadText">
              Carregue a foto do <br /> seu item aqui.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="uploadIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5A2.25 2.25 0 015.25 5.25h13.5A2.25 2.25 0 0121 7.5v9a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 16.5v-9zM15 10.5l-3 3m0 0l-3-3m3 3V6"
              />
            </svg>
            <input
              type="file"
              id="uploadFile"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  setSelectedFile(file);
                  handleImageUpload(file);
                }
              }}
              style={{ display: "none" }}
            />
          </label>

          {previewImage && (
            <img
              src={previewImage}
              alt="Prévia do item"
              className="previewImage"
              style={{
                marginTop: "10px",
                width: "150px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          )}
        </div>
      </div>

      {/* 🔹 O botão agora envia o formulário corretamente */}
      <div className="buttonPronto">
        <button type="submit" className="btn-pronto">
          Cadastrar
        </button>
      </div>

      <Link to="/whoAreYou" className="arrow-button"></Link>
    </form>
  );
};

export default Giver;
