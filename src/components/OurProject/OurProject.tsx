import donation from "../../assets/images/donation.png";
import "./OurProject.css";

function OurProject() {
  return (
    <section className="ourProject">
      <div className="titleProject">
        <h1>Nosso <span className="coloredLetter">p</span>rojeto</h1>
      </div>
      <div className="informationProject">
        <div className="image">
          <img src={donation} alt="Imagem sobre doação" />
        </div>
        <div className="textContent">
          <p className="textProject">
            O <span className="coloredLetter">BloomWise</span> é uma plataforma que conecta ex-alunos e pessoas da
            comunidade dispostas a doar uniformes e materiais escolares a
            estudantes que precisam. <br />
            <br />
            O funcionamento é simples: os doadores se
            cadastram, registram os itens que desejam oferecer, e os alunos em
            situação de vulnerabilidade podem se inscrever para solicitar o que
            necessitam. 
            <br />
            Assim, garantimos que materiais em bom estado sejam
            reaproveitados, promovendo inclusão, solidariedade e acesso
            igualitário à educação.
            <br />
          </p>
          <div className="buttonsProject">
            <button className="donate">QUERO DOAR</button>
            <button className="receive">QUERO RECEBER</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProject;
