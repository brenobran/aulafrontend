import './Menu.css';
import { NavLink, Link } from "react-router";

function Menu () {
  return <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/perfil">Perfil</NavLink></li>
      <li><NavLink to="/settings">Configuracoes</NavLink></li>
      <li><NavLink to="/about">Sobre</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </ul>
  </nav>
}

export default Menu;