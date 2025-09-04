import './whoAreYou.css'
import imageHover from '../../assets/images/fundoHover.png'

function WhoAreYou(){
    return(
        <section className='whoAreYouSection'>
            <div
      className="header-container"
      style={{ backgroundImage: `url(${imageHover})` }}
    >
      </div>
        </section>
    )
}

export default WhoAreYou;