import about from "../../assets/images/about.png";
import './About.css'

function About() {
  return (
    <section className="aboutUs">
      <div className="titleAbout">Sobre nós</div>
      <div className="imageAbout" style={{ backgroundImage: `url(${about})`}}>
        {/* <div className="titleAbout">Sobre nós</div> */}
        <div className="content">
        <div className="aboutText">
        Somos quatro meninas movidas pelo desejo de transformar a sociedade
        através da tecnologia. <br /> Acreditamos que pequenas ações podem gerar
        grandes mudanças, e o BloomWise nasceu <br />  para ser essa ponte entre
        ex-alunos que querem doar e estudantes que precisam de apoio. <br /> Mais do
        que um projeto, é um gesto de empatia e cuidado, porque aprender nunca
        deveria ser <br /> um <span style={{ textDecoration: "underline" }}> privilégio</span>.
      </div>
      </div>
      </div>
    </section>
  );
}

export default About;
