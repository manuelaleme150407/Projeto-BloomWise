import erro404 from "../../assets/images/erro404.png";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div
      className="notfound-container"
      style={{ backgroundImage: `url(${erro404})` }}
    >
      <button className="btn-404">
        <Link to="/">voltar</Link>
      </button>
    </div>
  );
}
