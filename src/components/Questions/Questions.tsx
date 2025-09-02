import "./Questions.css";

function Questions() {
  return (
    <section className="frequentQuestions">
      <div className="partOne">
      <h1 className="titleQuestions">Perguntas <br /> <span className="coloredLetter">F</span>requentes</h1>
      <hr className="line" />
      <br />
      <p className="principalQuestions">Como posso <span className="coloredLetter">doar</span>?</p>
      <p className="answers">
        Para doar, basta se cadastrar como doador na nossa plataforma e
        registrar os itens que deseja oferecer. Você pode escolher doar
        uniformes ou materiais escolares em bom estado, e pode optar por fazer a
        doação de forma anônima, se preferir. Assim, sua ajuda chega diretamente
        a quem precisa, de forma simples e segura. 
        <br />
        <br />
      </p>
      <p className="principalQuestions">Como posso <span className="coloredLetter">receber</span> uma doação?</p>
      <p className="answers">
        Para receber uma doação, você deve se cadastrar como receptor na
        plataforma. Depois, poderá visualizar os itens disponíveis e solicitar
        aqueles que precisar. Garantimos que todo o processo seja transparente e
        que os itens cheguem até você com segurança e sem burocracia.
        <br />
        <br />
      </p>
      </div>
      <div className="partTwo">
      <p className="principalQuestions">Como funciona o sistema <span className="coloredLetter">anônimo</span>?</p>
      <p className="answers">
        Se você preferir manter sua identidade em sigilo, a plataforma permite
        que a doação seja feita anonimamente. Assim, o receptor receberá o item
        sem saber quem doou, garantindo privacidade e respeito ao doador.
        <br />
        <br />
      </p>
      <p className="principalQuestions">Os meus <span className="coloredLetter">dados</span> estarão <span className="coloredLetter">seguros</span>?</p>
      <p className="answers">
        Sim! No BloomWise, levamos a segurança e a privacidade muito a sério.
        Todas as informações dos usuários são protegidas e utilizadas apenas
        para facilitar as doações e recebimentos, sem compartilhamento com
        terceiros ou uso indevido.
        <br />
        <br />
      </p>
      <hr className="line" />
      <h1 className="makeQuestion">Faça a sua pergunta</h1>
      <input type="text" className="input-box" placeholder="Digite aqui"></input>
      <button className="submit" type="submit">ENVIAR</button>
      </div>
    </section>
  );
}

export default Questions;
