import mao from "../../assets/images/mao.png";
import olho from "../../assets/images/olho.png";
import sacola from "../../assets/images/sacola.png";
import "./Differential.css";

function Differential(){
    return(
        <div className="total">
            <h1>Por que <span className="differentColor">nos</span> escolher?</h1>
            <div className="cards">
        <div className="abordagem">
           <h2>Abordagem <br/>
            <span className="coloredLetter">h</span>umanizada</h2>
           <img src={mao} alt="mãos" />
           <p>O BloomWise conecta doadores a causas reais,
             priorizando empatia e respeito. Cada doação valoriza a pessoa que recebe, 
             criando uma experiência mais próxima e significativa.</p>
        </div>
         <div className="privacidade">
           <h2><span className="coloredLetter">P</span>rivacidade <br/>
            e <span className="coloredLetter">s</span>igilo</h2>
           <img src={olho} alt="olho" />
           <p>Os doadores podem escolher se querem permanecer anônimos, 
            garantindo total confidencialidade e conforto durante 
            todo o processo de doação.</p>
        </div>
        <div className="flexibilidade">
           <h2>Flexibilidade e<br/>
             impacto <span className="coloredLetter">d</span>ireto</h2>
           <img src={sacola} alt="sacola" />
           <p>Nossa plataforma permite que cada pessoa decida como, 
            quando e para quem doar, sem burocracias. 
            Isso garante que a ajuda chegue rapidamente a quem realmente precisa.</p>
        </div>
        </div>
        </div>
    )
}

export default Differential;