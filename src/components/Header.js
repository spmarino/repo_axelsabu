import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
    return (
      <header className="header">
        <Link to="/">
          <h1 className="header__titlo">E-Commerce</h1>
        </Link>
        <NavBar nombre="Axel" apellido="Sabusechi" footer={false}/>
      </header>
    )
  }
  
  export default Header;