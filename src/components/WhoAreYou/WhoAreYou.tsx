import "./whoAreYou.css";
import imageHover from "../../assets/images/fundoHover.png";
import { Link } from "react-router-dom";

function WhoAreYou() {
  return (
    <section className="whoAreYouSection">
      <div
        className="header-container"
        style={{
          backgroundImage: `url(${imageHover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="principalText">Quem <span className="differentWord">você</span> é?</p>
        <Link to="/Giver">
        <button className="giver"> doador </button>
        </Link>
        <button className="receiver"> receptor </button>
      </div>
    </section>
  );
}

export default WhoAreYou;
