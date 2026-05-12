import './Menu.css';
import { NavLink, Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function Menu () {
  const usuarioId = 0;
  const { logout, usuario } = useAuth();
  const navigate = useNavigate();
  const handleSair = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

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