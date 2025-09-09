import './Receiver.css';
import fundoReceptor from '../../assets/images/fundoReceiver.png';
import pinceis from '../../assets/images/pinceis.png';
import criancas from '../../assets/images/criancas.png';
import computador from '../../assets/images/computador.png'

function Receiver(){
    
   return(
       <section className="receiver-container">
        <div className="fundo">
        <img src={fundoReceptor} alt="imagem receptor" className="fundoReceiver" />
        <h1 className="mensagem">Olá, receptor.</h1>
      </div>
      <div className="receiverInformation">
        <p className="receiverText">
          Selecione a <span className="differentWord"> categoria </span>
           desejada.
        </p>
        </div>
        <div className="categoria">
            <div className="material"
            style={{ backgroundImage: `url(${pinceis})` }}>
               <p className="material-title">Material Escolar</p>
            </div>
            <div className="criancas"
            style={{ backgroundImage: `url(${criancas})` }}>
               <p className="criancas-title">Uniformes</p>
            </div>
            <div className="computador"
            style={{ backgroundImage: `url(${computador})` }}>
               <p className="computador-title">Aparelhos <br/>eletrônicos</p>
            </div>
        </div>
       </section>
    )
}


export default Receiver;