import "./SchoolMaterial.css";
import caderno from "../../assets/images/caderno.png";
import mochilas from "../../assets/images/mochila.png";
import livro from "../../assets/images/livro.png";

function SchoolMaterial() {
  return (
    <section className="materialSection">
      <h1 className="materialTitle">Material Escolar</h1>
      <div className="materialCategoria">
        <div className="bag">
          <img src={mochilas} alt="" />
          <p className="mochila">
            Mochila + Estojo: <br />
            Usados, mas super bem cuidados, perfeitos para acompanhar a rotina
            escolar ou do dia a dia.
          </p>
          <button type="submit" className="btn-add">
            Adicionar a sacola
          </button>
        </div>
        <div className="book">
          <img src={livro} alt="" />
          <p className="livro">
            livro paradidático “1984”: <br />
            Leitura enriquecedora, ideal para estudantes e amantes da
            literatura.
          </p>
          <button type="submit" className="btn-add">
            Adicionar a sacola
          </button>
        </div>
        <div className="notebook">
          <img src={caderno} alt="" />
          <p className="notebook">
            Conjunto de cadernos: <br />
            Já utilizados parcialmente, mas com bastante espaço livre para novas
            anotações.
          </p>
          <button type="submit" className="btn-add">
            Adicionar a sacola
          </button>
        </div>
      </div>
    </section>
  );
}

export default SchoolMaterial;
