import "./Giver.css";
import fundoGiver from "../../assets/images/fundoGiver.png";

function Giver() {
  return (
    <section className="giverSection">
      <div className="divInicial">
        <img src={fundoGiver} alt="imagem voluntária" className="fundoGiver" />
        <h1 className="welcomeMessage">Olá, doador.</h1>
      </div>
      <div className="giverInformation">
        <div className="giverTotal">
          <p className="giverText">
            Insira as <span className="differentLetter">informações</span>{" "}
            seguintes:
          </p>
          <input
            type="text"
            className="inputGiver"
            placeholder="nome do item (ex.: livro, lápis, etc.)"
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
              style={{ display: "none" }}
            />
          </label>
        </div>
      </div>
      <div className="buttonPronto">
      <button type="submit" className="btn-pronto">
          PRONTO
        </button>
        </div>
    </section>
  );
}

export default Giver;
