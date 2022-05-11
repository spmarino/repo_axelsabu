import { Link, NavLink } from "react-router-dom";
import CartWidget from './CartWidget'

const NavBar = ({footer, nombre}) => {
if (footer){  
  return (
    <nav className="nav">
      <CartWidget/>     
      <Link to="/productos/indumentaria" className="nav__link">indumentaria </Link>
      <Link to="/productos/calzado" className="nav__link">calzado </Link>
      <Link to="/productos/accesorios" className="nav__link">accesorios </Link>
    </nav>
  )
}else{
  return (
    <nav className="nav">      
      <Link to="#">{nombre}</Link>  
      <CartWidget/>
      <NavLink to="/productos/indumentaria" className="nav__link">indumentaria </NavLink>
      <NavLink to="/productos/calzado" className="nav__link">calzado </NavLink>
      <NavLink to="/productos/accesorios" className="nav__link">accesorios </NavLink>
    </nav>
  )
}
}

export default NavBar;
