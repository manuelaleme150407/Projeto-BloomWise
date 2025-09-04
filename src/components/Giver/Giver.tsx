import "./Giver.css";
import fundoGiver from "../../assets/images/fundoGiver.png";
// import { useState, ChangeEvent } from "react";

function Giver() {
//     const [imagem, setImagem] = useState<string | null>(null);

//   // Função chamada quando o usuário seleciona um arquivo
//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]; // pega o primeiro arquivo selecionado
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagem(reader.result as string); // converte para string base64
//       };
//       reader.readAsDataURL(file);
//     }
  return (
    <section className="giverSection">
      <div className="divInicial">
        <img src={fundoGiver} alt="imagem voluntária" className="fundoGiver" />
        <h1 className="welcomeMessage">Olá, doador.</h1>
      </div>
      <div className="giverInformation">
        <p>
          Insira as <span className="differentColor">informações</span>{" "}
          seguintes
        </p>
        <input
          type="text"
          className="inputGiver"
          placeholder="nome do item (ex.: livro, lápis, etc.) aqui"
        ></input>
        <br />
        <input
          type="text"
          className="inputGiver"
          placeholder="categoria (ex.: material escolar)"
        ></input>
        <br />
        <input
          type="text"
          className="inputGiver"
          placeholder="descrição do item"
        ></input>
        <br />
        <input type="file" accept="image/*" />
      
      {/* {imagem && (
        <div>
          <h3>Pré-visualização:</h3>
          <img
            src={imagem}
            alt="Pré-visualização"
            style={{ maxWidth: "300px", marginTop: "10px" }}
          /> 
         </div>
         )} 
      */}
      </div>
    </section>
  );
}


export default Giver;
