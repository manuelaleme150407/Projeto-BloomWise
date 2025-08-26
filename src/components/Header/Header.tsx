import logo from "../../assets/images/logo.png";
import crianca from "../../assets/images/crianca.png";
import './Header.css'

function Header() {
  return (
      <div > 
      <div
      className="header-container"
      style={{ backgroundImage: `url(${crianca})` }}
    >
      <img src={logo} alt="Logo Bloom Wise" className="header-logo" />
    </div>
    </div>
  );
}

export default Header;
